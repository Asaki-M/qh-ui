import type { MarkdownEnv, MarkdownRenderer } from 'vitepress'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'

export default function (md: MarkdownRenderer) {
  md.core.ruler.before('normalize', 'component-preview', (state) => {
    const { realPath, path: _path } = state.env as MarkdownEnv
    const currentDir = dirname(realPath ?? _path)

    // 找到 docs 根目录
    const findDocsRoot = (dir: string): string => {
      const parent = resolve(dir, '..')
      return existsSync(resolve(dir, '.vitepress'))
        ? dir
        : parent === dir ? dir : findDocsRoot(parent)
    }

    const docsRoot = findDocsRoot(currentDir)
    const demoDir = resolve(docsRoot, '.vitepress/demo')

    const insertImport = (importString: string) => {
      const hasScript = state.src.includes('<script setup>')
      state.src = hasScript
        ? state.src.replace('</script>', `${importString}\n</script>`)
        : `<script setup>\n${importString}\n</script>\n\n${state.src}`
    }

    const createPreview = (name: string) => {
      const demoPath = resolve(demoDir, `${name}.vue`)

      if (!existsSync(demoPath)) {
        console.warn(`Demo file not found: ${demoPath}`)
        return `<div class="error">Demo file not found: ${name}.vue</div>`
      }

      const relativePath = relative(currentDir, demoDir).replace(/\\/g, '/')
      const importPath = `${relativePath}/${name}`

      insertImport(`import ${name} from '${importPath}.vue'`)

      const fileContent = (() => {
        try {
          return readFileSync(demoPath, 'utf-8')
        }
        catch (error) {
          console.warn(`Failed to read demo file: ${demoPath}`, error)
          return '// Failed to load file content'
        }
      })()

      const files = JSON.stringify({ demo: [`${name}.vue`] })

      return { files: encodeURIComponent(files), fileContent }
    }

    // 处理自闭合标签：<ComponentPreview name="xxx" />
    state.src = state.src.replace(
      /<ComponentPreview\s+name="([^"]+)"\s*\/>/g,
      (_, name) => {
        const result = createPreview(name)
        if (typeof result === 'string')
          return result

        const { files, fileContent } = result
        return `<ComponentPreview name="${name}" files="${files}">
<${name} />

<template #demo>

\`\`\`vue[${name}.vue]
${fileContent}
\`\`\`

</template>
</ComponentPreview>`
      },
    )

    // 处理带内容的标签：<ComponentPreview name="xxx">...</ComponentPreview>
    state.src = state.src.replace(
      /<ComponentPreview\s+name="([^"]+)"([^>]*)>([\s\S]*?)<\/ComponentPreview>/g,
      (match, name, attributes, content) => {
        if (attributes.includes('files='))
          return match

        const result = createPreview(name)
        if (typeof result === 'string')
          return result

        const { files, fileContent } = result
        const hasCodeSlot = content.includes('<template #demo>')

        return hasCodeSlot
          ? `<ComponentPreview name="${name}" files="${files}"${attributes}>${content}</ComponentPreview>`
          : `<ComponentPreview name="${name}" files="${files}"${attributes}>${content}

<template #demo>

\`\`\`vue[${name}.vue]
${fileContent}
\`\`\`

</template>
</ComponentPreview>`
      },
    )
  })
}
