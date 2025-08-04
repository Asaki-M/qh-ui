# Select
A dropdown select component for choosing from a list of options.

<script setup>
import { Select } from 'qh-ui'
import { ref } from 'vue'

const selectedValue = ref('')

const simpleOptions = [
  {
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' }
    ]
  }
]
</script>

<ComponentPreview name="SelectDemo">
  <Select
    rootClass="w-3/5"
    v-model="selectedValue"
    :options="simpleOptions"
    placeholder="Choose a fruit"
    label="Favorite Fruit"
  />
</ComponentPreview>

## API Reference

### Props

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `string \| number` | `required` | 选中的值 |
| `options` | `SelectOption[]` | `[]` | 选项数据 |
| `label` | `string` | `undefined` | 选择器标签 |
| `placeholder` | `string` | `'Select...'` | 占位符文本 |
| `labelOrientation` | `'horizontal' \| 'vertical'` | `'vertical'` | 标签方向 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 选择器大小 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 选择器样式变体 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `open` | `boolean` | `false` | 是否打开下拉菜单 |
| `rootClass` | `string` | `undefined` | 根容器额外类名 |
| `labelClass` | `string` | `undefined` | 标签额外类名 |
| `triggerClass` | `string` | `undefined` | 触发器额外类名 |
| `contentClass` | `string` | `undefined` | 内容容器额外类名 |
| `itemClass` | `string` | `undefined` | 选项额外类名 |

### Types

```typescript
interface SelectItemOption {
  value: string | number
  label: string
  disabled?: boolean
}

interface SelectOption {
  label?: string // 分组标签
  children: SelectItemOption[]
}
```

### Size 尺寸对照

| Size | 高度 | 内边距 | 字体大小 |
| --- | --- | --- | --- |
| `sm` | `32px` | `8px 12px` | `14px` |
| `md` | `40px` | `12px 16px` | `16px` |
| `lg` | `48px` | `16px 20px` | `18px` |

### Events

Select 组件继承自 `reka-ui` 的 `SelectRoot` 组件，支持以下事件：

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: string \| number) => void` | 选中值变化时触发 |
| `update:open` | `(open: boolean) => void` | 下拉菜单开关状态变化时触发 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-select-root` | 选择器根容器 |
| `.qh-select-label` | 选择器标签 |
| `.qh-select-trigger` | 选择器触发器 |
| `.qh-select-content` | 下拉内容容器 |
| `.qh-select-item` | 选项元素 |

### 使用示例

```vue
<script setup>
import { Select } from 'qh-ui'
import { ref } from 'vue'

const selectedFruit = ref('')
const selectedCountry = ref('')

// 简单选项
const fruits = [
  {
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' }
    ]
  }
]

// 分组选项
const countries = [
  {
    label: 'Asia',
    children: [
      { value: 'cn', label: 'China' },
      { value: 'jp', label: 'Japan' },
      { value: 'kr', label: 'Korea' }
    ]
  },
  {
    label: 'Europe',
    children: [
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' }
    ]
  }
]
</script>

<template>
  <!-- 基础用法 -->
  <Select
    v-model="selectedFruit"
    :options="fruits"
    placeholder="Choose a fruit"
  />

  <!-- 带标签 -->
  <Select
    v-model="selectedCountry"
    :options="countries"
    label="Country"
    placeholder="Select your country"
  />

  <!-- 不同尺寸 -->
  <Select v-model="selectedFruit" :options="fruits" size="sm" />
  <Select v-model="selectedFruit" :options="fruits" size="md" />
  <Select v-model="selectedFruit" :options="fruits" size="lg" />

  <!-- 水平标签 -->
  <Select
    v-model="selectedFruit"
    :options="fruits"
    label="Fruit:"
    label-orientation="horizontal"
  />

  <!-- 禁用状态 -->
  <Select
    v-model="selectedFruit"
    :options="fruits"
    disabled
    placeholder="Disabled select"
  />
</template>
```
