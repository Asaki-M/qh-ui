# RadioGroup
A radio group component for selecting one option from multiple choices.

<script setup>
import { RadioGroup } from 'qh-ui'
import { ref } from 'vue'

const selectedValue = ref('option1')

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]
</script>

<ComponentPreview name="RadioGroupDemo">
  <RadioGroup v-model="selectedValue" :options="options" />
</ComponentPreview>

## API Reference

### Props

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `string` | `undefined` | 选中的值 |
| `options` | `RadioOption[]` | `required` | 单选选项数组 |
| `disabled` | `boolean` | `false` | 是否禁用整个组 |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | 布局方向 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 单选按钮大小 |

### Types

```typescript
interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}
```

### Size 尺寸对照

| Size | 尺寸 |
| --- | --- |
| `sm` | `16px × 16px` |
| `md` | `20px × 20px` |
| `lg` | `24px × 24px` |

### Events

RadioGroup 组件继承自 `reka-ui` 的 `RadioGroupRoot` 组件，支持以下事件：

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: string) => void` | 选中值变化时触发 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-radio-group-container` | 单选组根容器 |
| `.qh-radio-group-item` | 单选项容器 |
| `.qh-radio-group-button` | 单选按钮 |
| `.qh-radio-group-label` | 单选项标签 |

### 使用示例

```vue
<script setup>
import { RadioGroup } from 'qh-ui'
import { ref } from 'vue'

const selectedSize = ref('medium')
const selectedColor = ref('blue')
const selectedPlan = ref('basic')

const sizeOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' }
]

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Yellow', value: 'yellow', disabled: true }
]

const planOptions = [
  { label: 'Basic Plan - $9/month', value: 'basic' },
  { label: 'Pro Plan - $19/month', value: 'pro' },
  { label: 'Enterprise Plan - $49/month', value: 'enterprise' }
]
</script>

<template>
  <!-- 基础用法 -->
  <RadioGroup v-model="selectedSize" :options="sizeOptions" />

  <!-- 水平布局 -->
  <RadioGroup
    v-model="selectedColor"
    :options="colorOptions"
    orientation="horizontal"
  />

  <!-- 不同尺寸 -->
  <RadioGroup
    v-model="selectedSize"
    :options="sizeOptions"
    size="sm"
  />
  <RadioGroup
    v-model="selectedSize"
    :options="sizeOptions"
    size="md"
  />
  <RadioGroup
    v-model="selectedSize"
    :options="sizeOptions"
    size="lg"
  />

  <!-- 包含禁用选项 -->
  <RadioGroup
    v-model="selectedColor"
    :options="colorOptions"
  />

  <!-- 禁用整个组 -->
  <RadioGroup
    v-model="selectedPlan"
    :options="planOptions"
    disabled
  />
</template>
```

### 使用场景

- **表单选择**: 性别、尺寸、颜色等单选
- **设置选项**: 主题、语言、通知方式
- **调查问卷**: 满意度、评分等
- **产品配置**: 套餐选择、规格选择
