import type { Theme } from 'vitepress'
import QHUIInstall from 'qh-ui'
import DefaultTheme from 'vitepress/theme'
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import ComponentPreview from '../components/ComponentPreview.vue'
import 'qh-ui/index.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.component('ComponentPreview', ComponentPreview)
  },
} satisfies Theme
