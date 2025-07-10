import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const projectRootDir = resolve(__dirname)

// 记录当前构建的格式
let currentFormat = ''

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true,
      exclude: ['src/test/**', 'src/**/story/**', 'src/**/*.story.vue'],
      rollupTypes: true,
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
    dedupe: ['vue', '@vue/runtime-core'],
  },
  build: {
    minify: false,
    target: 'esnext',
    // sourcemap: true,
    lib: {
      name: 'qh-ui',
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        currentFormat = format
        return `${name}.${format === 'es' ? 'js' : 'cjs'}`
      },
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
    },
    rollupOptions: {
      external: ['vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/shared'],
      output: {
        inlineDynamicImports: false,
        exports: 'named',
        manualChunks: (moduleId, { getModuleInfo }) => {
          const info = getModuleInfo(moduleId)
          if (moduleId.includes('node_modules') || !info?.isIncluded) {
            return null
          }

          const [namespace, file] = moduleId.split('?')[0].split('/').slice(-2)
          return `${namespace}/${file.slice(0, file.lastIndexOf('.'))}`
        },
        // 设置 chunk 文件名，去掉 hash 后缀
        chunkFileNames: chunk => `${chunk.name}.${currentFormat === 'es' ? 'js' : 'cjs'}`,
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        },
      },
    },
  },
})
