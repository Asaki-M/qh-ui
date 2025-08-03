import type { MarkdownEnv, MarkdownRenderer } from 'vitepress'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

export default function (md: MarkdownRenderer) {
  md.core.ruler.before('normalize', 'component-preview', (state) => {
    const insertComponentImport = (importString: string) => {
      if (!state.src.includes('<script setup>')) {
        state.src = `<script setup>\n${importString}\n</script>\n\n${state.src}`
      }
      else {
        state.src = state.src.replace('</script>', `${importString}\n</script>`)
      }
    }

    // Define the regular expression to match the desired pattern
    const regex = /<ComponentPreview\s+name="([^"]+)"\s*\/>/g

    // Iterate through the Markdown content and replace the pattern
    state.src = state.src.replace(regex, (_, name) => {
      const pathName = `./.vitepress/demo/${name}`
      insertComponentImport(`import ${name} from '${pathName}.vue'`)

      const { realPath, path: _path } = state.env as MarkdownEnv

      // Check if demo file exists
      const demoPath = resolve(dirname(realPath ?? _path), `${pathName}.vue`)
      const fileExists = existsSync(demoPath)

      if (!fileExists) {
        console.warn(`Demo file not found: ${demoPath}`)
        return `<div class="error">Demo file not found: ${name}.vue</div>`
      }

      const groupedFiles = { demo: [`${name}.vue`] }

      // 读取文件内容
      let fileContent = ''
      try {
        fileContent = readFileSync(demoPath, 'utf-8')
      }
      catch (error) {
        console.warn(`Failed to read demo file: ${demoPath}`, error)
        fileContent = '// Failed to load file content'
      }

      return `<ComponentPreview name="${name}" files="${encodeURIComponent(JSON.stringify(groupedFiles))}" >
<${name} />

<template #demo>

\`\`\`vue[${name}.vue]
${fileContent}
\`\`\`

</template>
</ComponentPreview>`
    })
  })
}
