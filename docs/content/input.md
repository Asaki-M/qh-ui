# Input
A text input component with various types and styles.

<script setup>
import { Input } from 'qh-ui'
import { ref } from 'vue'

const inputValue = ref('')
const emailValue = ref('')
const passwordValue = ref('')
</script>

<ComponentPreview name="InputDemo">
  <Input v-model="inputValue" placeholder="Enter text..." />
</ComponentPreview>

## API Reference

### Props

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `string` | `required` | 输入框的值 |
| `type` | `'text' \| 'password' \| 'email' \| 'tel' \| 'url' \| 'search'` | `'text'` | 输入框类型 |
| `placeholder` | `string` | `undefined` | 占位符文本 |
| `label` | `string` | `undefined` | 输入框标签 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `readonly` | `boolean` | `false` | 是否只读 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 输入框样式变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 输入框大小 |
| `rootClass` | `string` | `undefined` | 根容器额外类名 |
| `labelClass` | `string` | `undefined` | 标签额外类名 |
| `inputContainerClass` | `string` | `undefined` | 输入容器额外类名 |
| `inputClass` | `string` | `undefined` | 输入框额外类名 |

### Size 尺寸对照

| Size | 内边距 | 字体大小 |
| --- | --- | --- |
| `sm` | `8px 8px 4px 4px` | `14px` |
| `md` | `12px 12px 8px 8px` | `16px` |
| `lg` | `16px 16px 12px 12px` | `18px` |

### Events

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: string) => void` | 输入值变化时触发 |

### Slots

| 插槽名 | 描述 |
| --- | --- |
| `prefix` | 输入框前缀内容 |
| `suffix` | 输入框后缀内容 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-input-container` | 输入框根容器 |
| `.qh-input-label` | 输入框标签 |
| `.qh-input-input-container` | 输入框容器 |
| `.qh-input-input` | 输入框元素 |

### 使用示例

```vue
<script setup>
import { Input } from 'qh-ui'
import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const search = ref('')
</script>

<template>
  <!-- 基础用法 -->
  <Input v-model="username" placeholder="Enter username" />

  <!-- 带标签 -->
  <Input
    v-model="email"
    type="email"
    label="Email Address"
    placeholder="your@email.com"
  />

  <!-- 不同类型 -->
  <Input v-model="password" type="password" label="Password" />
  <Input v-model="search" type="search" placeholder="Search..." />

  <!-- 不同尺寸 -->
  <Input v-model="username" size="sm" placeholder="Small" />
  <Input v-model="username" size="md" placeholder="Medium" />
  <Input v-model="username" size="lg" placeholder="Large" />

  <!-- 状态 -->
  <Input v-model="username" disabled placeholder="Disabled" />
  <Input v-model="username" readonly placeholder="Readonly" />

  <!-- 带插槽 -->
  <Input v-model="search" placeholder="Search...">
    <template #prefix>
      <Icon icon="mdi:magnify" />
    </template>
    <template #suffix>
      <Icon icon="mdi:close" />
    </template>
  </Input>

  <!-- 自定义样式 -->
  <Input
    v-model="username"
    label="Custom Input"
    root-class="mb-4"
    label-class="font-bold text-blue-600"
    input-class="border-2 border-blue-300"
  />
</template>
```
