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

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `string \| number` | `required` | Selected value |
| `options` | `SelectOption[]` | `[]` | Options data |
| `label` | `string` | `undefined` | Select label |
| `placeholder` | `string` | `'Select...'` | Placeholder text |
| `labelOrientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Label orientation |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Select size |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Select style variant |
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `open` | `boolean` | `false` | Whether the dropdown is open |
| `rootClass` | `string` | `undefined` | Additional CSS class for root container |
| `labelClass` | `string` | `undefined` | Additional CSS class for label |
| `triggerClass` | `string` | `undefined` | Additional CSS class for trigger |
| `contentClass` | `string` | `undefined` | Additional CSS class for content container |
| `itemClass` | `string` | `undefined` | Additional CSS class for items |

### Types

```typescript
interface SelectItemOption {
  value: string | number
  label: string
  disabled?: boolean
}

interface SelectOption {
  label?: string // Group label
  children: SelectItemOption[]
}
```

### Size Reference

| Size | Height | Padding | Font Size |
| --- | --- | --- | --- |
| `sm` | `32px` | `8px 12px` | `14px` |
| `md` | `40px` | `12px 16px` | `16px` |
| `lg` | `48px` | `16px 20px` | `18px` |

### Events

The Select component inherits from `reka-ui`'s `SelectRoot` component and supports the following events:

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: string \| number) => void` | Triggered when selected value changes |
| `update:open` | `(open: boolean) => void` | Triggered when dropdown open state changes |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-select-root` | Select root container |
| `.qh-select-label` | Select label |
| `.qh-select-trigger` | Select trigger |
| `.qh-select-content` | Dropdown content container |
| `.qh-select-item` | Option items |

### Usage Examples

```vue
<script setup>
import { Select } from 'qh-ui'
import { ref } from 'vue'

const selectedFruit = ref('')
const selectedCountry = ref('')

// Simple options
const fruits = [
  {
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' }
    ]
  }
]

// Grouped options
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
  <!-- Basic usage -->
  <Select
    v-model="selectedFruit"
    :options="fruits"
    placeholder="Choose a fruit"
  />

  <!-- With label -->
  <Select
    v-model="selectedCountry"
    :options="countries"
    label="Country"
    placeholder="Select your country"
  />

  <!-- Different sizes -->
  <Select v-model="selectedFruit" :options="fruits" size="sm" />
  <Select v-model="selectedFruit" :options="fruits" size="md" />
  <Select v-model="selectedFruit" :options="fruits" size="lg" />

  <!-- Horizontal label -->
  <Select
    v-model="selectedFruit"
    :options="fruits"
    label="Fruit:"
    label-orientation="horizontal"
  />

  <!-- Disabled state -->
  <Select
    v-model="selectedFruit"
    :options="fruits"
    disabled
    placeholder="Disabled select"
  />
</template>
```
