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

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `string` | `undefined` | Selected value |
| `options` | `ComboBoxOption[]` | `required` | Options data |
| `label` | `string` | `undefined` | Component label |
| `labelOrientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Label orientation |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Style variant |
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `placeholder` | `string` | `undefined` | Input placeholder text |
| `rootClass` | `string` | `undefined` | Additional CSS class for root container |
| `labelClass` | `string` | `undefined` | Additional CSS class for label |
| `comboboxClass` | `string` | `undefined` | Additional CSS class for combobox |
| `anchorClass` | `string` | `undefined` | Additional CSS class for anchor |
| `inputClass` | `string` | `undefined` | Additional CSS class for input |
| `triggerClass` | `string` | `undefined` | Additional CSS class for trigger |
| `contentClass` | `string` | `undefined` | Additional CSS class for content container |
| `itemClass` | `string` | `undefined` | Additional CSS class for items |

### Types

```typescript
interface ComboBoxOption {
  label?: string // Group label
  children: {
    label: string
    value: string
    disabled?: boolean
  }[]
}
```

### Size Reference

| Size | Height | Padding | Font Size |
| --- | --- | --- | --- |
| `sm` | `32px` | `8px 12px` | `14px` |
| `md` | `40px` | `12px 16px` | `16px` |
| `lg` | `48px` | `16px 20px` | `18px` |

### Events

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: string) => void` | Triggered when selected value changes |
| `update:searchTerm` | `(term: string) => void` | Triggered when search term changes |

### CSS Classes

| Class Name | Description |
| --- | --- |
| `.qh-combobox-root` | Combobox root container |
| `.qh-combobox-label` | Combobox label |
| `.qh-combobox-anchor` | Combobox anchor |
| `.qh-combobox-input` | Combobox input |
| `.qh-combobox-trigger` | Combobox trigger |
| `.qh-combobox-content` | Dropdown content container |
| `.qh-combobox-item` | Option items |

### Usage Examples

```vue
<script setup>
import { ComboBox } from 'qh-ui'
import { ref } from 'vue'

const selectedFruit = ref('')
const selectedCountry = ref('')

// Simple options
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

// Grouped options
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
  <!-- Basic usage -->
  <ComboBox
    v-model="selectedFruit"
    :options="fruits"
    placeholder="Search fruits..."
  />

  <!-- With label -->
  <ComboBox
    v-model="selectedCountry"
    :options="countries"
    label="Country"
    placeholder="Search countries..."
  />

  <!-- Different sizes -->
  <ComboBox v-model="selectedFruit" :options="fruits" size="sm" />
  <ComboBox v-model="selectedFruit" :options="fruits" size="md" />
  <ComboBox v-model="selectedFruit" :options="fruits" size="lg" />

  <!-- Horizontal label -->
  <ComboBox
    v-model="selectedFruit"
    :options="fruits"
    label="Fruit:"
    label-orientation="horizontal"
  />

  <!-- Disabled state -->
  <ComboBox
    v-model="selectedFruit"
    :options="fruits"
    disabled
    placeholder="Disabled combobox"
  />
</template>
```
