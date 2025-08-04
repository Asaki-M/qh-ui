# ComboBox
A combobox component that combines an input field with a dropdown list for autocomplete functionality.

<script setup>
import { ComboBox } from 'qh-ui'
import { ref } from 'vue'

const selectedValue = ref('')

const options = [
  {
    children: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' }
    ]
  }
]
</script>

<ComponentPreview name="ComboBoxDemo">
  <ComboBox v-model="selectedValue" :options="options" label="Choose a fruit" />
</ComponentPreview>

## API Reference

### Props

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `string` | `undefined` | 选中的值 |
| `options` | `ComboBoxOption[]` | `required` | 选项数据 |
| `label` | `string` | `undefined` | 组件标签 |
| `labelOrientation` | `'horizontal' \| 'vertical'` | `'vertical'` | 标签方向 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 组件大小 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 样式变体 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `placeholder` | `string` | `undefined` | 输入框占位符 |
| `rootClass` | `string` | `undefined` | 根容器额外类名 |
| `labelClass` | `string` | `undefined` | 标签额外类名 |
| `comboboxClass` | `string` | `undefined` | 组合框额外类名 |
| `anchorClass` | `string` | `undefined` | 锚点额外类名 |
| `inputClass` | `string` | `undefined` | 输入框额外类名 |
| `triggerClass` | `string` | `undefined` | 触发器额外类名 |
| `contentClass` | `string` | `undefined` | 内容容器额外类名 |
| `itemClass` | `string` | `undefined` | 选项额外类名 |

### Types

```typescript
interface ComboBoxOption {
  label?: string // 分组标签
  children: {
    label: string
    value: string
    disabled?: boolean
  }[]
}
```

### Size 尺寸对照

| Size | 高度 | 内边距 | 字体大小 |
| --- | --- | --- | --- |
| `sm` | `32px` | `8px 12px` | `14px` |
| `md` | `40px` | `12px 16px` | `16px` |
| `lg` | `48px` | `16px 20px` | `18px` |

### Events

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: string) => void` | 选中值变化时触发 |
| `update:searchTerm` | `(term: string) => void` | 搜索词变化时触发 |

### CSS 类名

| 类名 | 描述 |
| --- | --- |
| `.qh-combobox-root` | 组合框根容器 |
| `.qh-combobox-label` | 组合框标签 |
| `.qh-combobox-anchor` | 组合框锚点 |
| `.qh-combobox-input` | 组合框输入框 |
| `.qh-combobox-trigger` | 组合框触发器 |
| `.qh-combobox-content` | 下拉内容容器 |
| `.qh-combobox-item` | 选项元素 |

### 使用示例

```vue
<script setup>
import { ComboBox } from 'qh-ui'
import { ref } from 'vue'

const selectedFruit = ref('')
const selectedCountry = ref('')

// 简单选项
const fruits = [
  {
    children: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' },
      { label: 'Elderberry', value: 'elderberry' }
    ]
  }
]

// 分组选项
const countries = [
  {
    label: 'Asia',
    children: [
      { label: 'China', value: 'cn' },
      { label: 'Japan', value: 'jp' },
      { label: 'Korea', value: 'kr' }
    ]
  },
  {
    label: 'Europe',
    children: [
      { label: 'United Kingdom', value: 'uk' },
      { label: 'France', value: 'fr' },
      { label: 'Germany', value: 'de' }
    ]
  }
]
</script>

<template>
  <!-- 基础用法 -->
  <ComboBox
    v-model="selectedFruit"
    :options="fruits"
    placeholder="Search fruits..."
  />

  <!-- 带标签 -->
  <ComboBox
    v-model="selectedCountry"
    :options="countries"
    label="Country"
    placeholder="Search countries..."
  />

  <!-- 不同尺寸 -->
  <ComboBox v-model="selectedFruit" :options="fruits" size="sm" />
  <ComboBox v-model="selectedFruit" :options="fruits" size="md" />
  <ComboBox v-model="selectedFruit" :options="fruits" size="lg" />

  <!-- 水平标签 -->
  <ComboBox
    v-model="selectedFruit"
    :options="fruits"
    label="Fruit:"
    label-orientation="horizontal"
  />

  <!-- 禁用状态 -->
  <ComboBox
    v-model="selectedFruit"
    :options="fruits"
    disabled
    placeholder="Disabled combobox"
  />
</template>
```
