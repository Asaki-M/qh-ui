# Switch
A toggle switch component for binary choices.

<script setup>
import { Switch } from 'qh-ui'
import { ref } from 'vue'

const switchValue = ref(false)
</script>

<ComponentPreview name="SwitchDemo">
  <Switch v-model="switchValue" label="Enable notifications" />
</ComponentPreview>

## API Reference

### Props

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `boolean` | `required` | 开关状态 |
| `label` | `string` | `undefined` | 开关标签文本 |
| `labelPosition` | `'left' \| 'right'` | `'right'` | 标签位置 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 开关大小 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 开关样式变体 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `containerClasses` | `string` | `undefined` | 容器额外类名 |
| `labelClasses` | `string` | `undefined` | 标签额外类名 |
| `switchClasses` | `string` | `undefined` | 开关额外类名 |
| `thumbClasses` | `string` | `undefined` | 滑块额外类名 |

### Size 尺寸对照

| Size | 开关尺寸 | 滑块尺寸 |
| --- | --- | --- |
| `sm` | `32px × 16px` | `12px × 12px` |
| `md` | `40px × 20px` | `16px × 16px` |
| `lg` | `48px × 24px` | `20px × 20px` |

### Events

Switch 组件继承自 `reka-ui` 的 `SwitchRoot` 组件，支持以下事件：

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean) => void` | 开关状态变化时触发 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-switch-label` | 开关标签 |
| `.qh-switch-root` | 开关根容器 |
| `.qh-switch-thumb` | 开关滑块 |

### 使用示例

```vue
<script setup>
import { Switch } from 'qh-ui'
import { ref } from 'vue'

const isEnabled = ref(false)
const isDarkMode = ref(true)
</script>

<template>
  <!-- 基础用法 -->
  <Switch v-model="isEnabled" />

  <!-- 带标签 -->
  <Switch v-model="isEnabled" label="Enable feature" />

  <!-- 标签在左侧 -->
  <Switch
    v-model="isDarkMode"
    label="Dark mode"
    label-position="left"
  />

  <!-- 不同尺寸 -->
  <Switch v-model="isEnabled" size="sm" label="Small" />
  <Switch v-model="isEnabled" size="md" label="Medium" />
  <Switch v-model="isEnabled" size="lg" label="Large" />

  <!-- 不同变体 -->
  <Switch v-model="isEnabled" variant="primary" label="Primary" />
  <Switch v-model="isEnabled" variant="secondary" label="Secondary" />

  <!-- 禁用状态 -->
  <Switch v-model="isEnabled" disabled label="Disabled" />

  <!-- 自定义样式 -->
  <Switch
    v-model="isEnabled"
    label="Custom style"
    container-classes="p-2 bg-gray-100 rounded"
    label-classes="font-bold text-blue-600"
  />
</template>
```
