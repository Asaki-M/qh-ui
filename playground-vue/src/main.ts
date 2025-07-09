import QHUI from 'qh-ui'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(QHUI)
app.mount('#app')
