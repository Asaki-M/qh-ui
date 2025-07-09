import type { App } from 'vue'
import * as components from '../constant/components'

import './index.css'

export * from '../constant/components'

export default function install(app: App, prefix = 'QH') {
  for (const [key, component] of Object.entries(components)) {
    app.component(`${prefix}${key}`, component)
  }
}
