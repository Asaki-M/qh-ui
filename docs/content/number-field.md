# NumberField
A number input component with increment and decrement buttons.

<script setup>
import { NumberField } from 'qh-ui'
import { ref } from 'vue'

const numberValue = ref(10)
</script>

<ComponentPreview name="NumberFieldDemo">
  <NumberField v-model="numberValue" label="Quantity" :min="0" :max="100" />
</ComponentPreview>

## API Reference

### Props

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `number` | `required` | 数字输入框的值 |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `Infinity` | 最大值 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `label` | `string` | `undefined` | 输入框标签 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 输入框样式变体 |
| `rootClass` | `string` | `undefined` | 根容器额外类名 |
| `labelClass` | `string` | `undefined` | 标签额外类名 |
| `inputContainerClass` | `string` | `undefined` | 输入容器额外类名 |
| `decrementClass` | `string` | `undefined` | 减少按钮额外类名 |
| `inputClass` | `string` | `undefined` | 输入框额外类名 |
| `incrementClass` | `string` | `undefined` | 增加按钮额外类名 |

### Events

NumberField 组件继承自 `reka-ui` 的 `NumberFieldRoot` 组件，支持以下事件：

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: number) => void` | 数值变化时触发 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-number-field-root` | 数字输入框根容器 |
| `.qh-number-field-label` | 数字输入框标签 |
| `.qh-number-field-container` | 输入容器 |
| `.qh-number-field-decrement` | 减少按钮 |
| `.qh-number-field-input` | 输入框 |
| `.qh-number-field-increment` | 增加按钮 |

### 使用示例

```vue
<script setup>
import { NumberField } from 'qh-ui'
import { ref } from 'vue'

const quantity = ref(1)
const price = ref(99.99)
const age = ref(25)
</script>

<template>
  <!-- 基础用法 -->
  <NumberField v-model="quantity" />

  <!-- 带标签 -->
  <NumberField
    v-model="quantity"
    label="Quantity"
    :min="1"
    :max="10"
  />

  <!-- 价格输入（支持小数） -->
  <NumberField
    v-model="price"
    label="Price ($)"
    :min="0"
    :max="999.99"
  />

  <!-- 年龄输入 -->
  <NumberField
    v-model="age"
    label="Age"
    :min="0"
    :max="120"
  />

  <!-- 禁用状态 -->
  <NumberField
    v-model="quantity"
    disabled
    label="Disabled"
  />

  <!-- 不同变体 -->
  <NumberField
    v-model="quantity"
    variant="primary"
    label="Primary"
  />
  <NumberField
    v-model="quantity"
    variant="secondary"
    label="Secondary"
  />

  <!-- 自定义样式 -->
  <NumberField
    v-model="quantity"
    label="Custom Style"
    root-class="mb-4"
    label-class="font-bold text-blue-600"
    input-class="text-center"
    increment-class="bg-green-500 hover:bg-green-600"
    decrement-class="bg-red-500 hover:bg-red-600"
  />
</template>
```
