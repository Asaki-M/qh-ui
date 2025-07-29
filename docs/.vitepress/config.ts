import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Qinghuan UI components',
  description: 'A UI components library base on reka ui',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/content/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Markdown Examples', link: '/content/markdown-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Asaki-M/qh-ui' },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
