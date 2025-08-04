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

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `string` | `undefined` | Selected value |
| `options` | `RadioOption[]` | `required` | Radio options array |
| `disabled` | `boolean` | `false` | Whether the entire group is disabled |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout orientation |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Radio button size |

### Types

```typescript
interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}
```

### Size Reference

| Size | Dimensions |
| --- | --- |
| `sm` | `16px × 16px` |
| `md` | `20px × 20px` |
| `lg` | `24px × 24px` |

### Events

The RadioGroup component inherits from `reka-ui`'s `RadioGroupRoot` component and supports the following events:

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: string) => void` | Triggered when selected value changes |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-radio-group-container` | Radio group root container |
| `.qh-radio-group-item` | Radio item container |
| `.qh-radio-group-button` | Radio button |
| `.qh-radio-group-label` | Radio item label |

### Usage Examples

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
  <!-- Basic usage -->
  <RadioGroup v-model="selectedSize" :options="sizeOptions" />

  <!-- Horizontal layout -->
  <RadioGroup
    v-model="selectedColor"
    :options="colorOptions"
    orientation="horizontal"
  />

  <!-- Different sizes -->
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

  <!-- With disabled options -->
  <RadioGroup
    v-model="selectedColor"
    :options="colorOptions"
  />

  <!-- Disabled entire group -->
  <RadioGroup
    v-model="selectedPlan"
    :options="planOptions"
    disabled
  />
</template>
```

### Use Cases

- **Form Selection**: Gender, size, color, etc.
- **Settings Options**: Theme, language, notification preferences
- **Surveys**: Satisfaction ratings, evaluations
- **Product Configuration**: Plan selection, specification choices
