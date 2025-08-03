import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import ComponentPreviewPlugin from './plugins/ComponentPreview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Qinghuan UI components',
  description: 'A UI components library base on reka ui',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/component-preview-guide' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Asaki-M/qh-ui' },
    ],
  },
  markdown: {
    preConfig(md) {
      md.use(ComponentPreviewPlugin)
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
