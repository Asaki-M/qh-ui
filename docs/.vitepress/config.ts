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
      { text: 'Components', link: '/content/avatar' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Avatar', link: '/content/avatar' },
          { text: 'Button', link: '/content/button' },
          { text: 'Checkbox', link: '/content/checkbox' },
          { text: 'Combobox', link: '/content/combobox' },
          { text: 'Icon', link: '/content/icon' },
          { text: 'Input', link: '/content/input' },
          { text: 'NumberField', link: '/content/number-field' },
          { text: 'PinInput', link: '/content/pin-input' },
          { text: 'RadioGroup', link: '/content/radio-group' },
          { text: 'Select', link: '/content/select' },
          { text: 'Slider', link: '/content/slider' },
          { text: 'Switch', link: '/content/switch' },
        ],
      },
    ],

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
