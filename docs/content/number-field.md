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

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `number` | `required` | Number input value |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `Infinity` | Maximum value |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `label` | `string` | `undefined` | Input label |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Input style variant |
| `rootClass` | `string` | `undefined` | Additional CSS class for root container |
| `labelClass` | `string` | `undefined` | Additional CSS class for label |
| `inputContainerClass` | `string` | `undefined` | Additional CSS class for input container |
| `decrementClass` | `string` | `undefined` | Additional CSS class for decrement button |
| `inputClass` | `string` | `undefined` | Additional CSS class for input |
| `incrementClass` | `string` | `undefined` | Additional CSS class for increment button |

### Events

The NumberField component inherits from `reka-ui`'s `NumberFieldRoot` component and supports the following events:

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: number) => void` | Triggered when number value changes |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-number-field-root` | Number field root container |
| `.qh-number-field-label` | Number field label |
| `.qh-number-field-container` | Input container |
| `.qh-number-field-decrement` | Decrement button |
| `.qh-number-field-input` | Input field |
| `.qh-number-field-increment` | Increment button |

### Usage Examples

```vue
<script setup>
import { NumberField } from 'qh-ui'
import { ref } from 'vue'

const quantity = ref(1)
const price = ref(99.99)
const age = ref(25)
</script>

<template>
  <!-- Basic usage -->
  <NumberField v-model="quantity" />

  <!-- With label -->
  <NumberField
    v-model="quantity"
    label="Quantity"
    :min="1"
    :max="10"
  />

  <!-- Price input (supports decimals) -->
  <NumberField
    v-model="price"
    label="Price ($)"
    :min="0"
    :max="999.99"
  />

  <!-- Age input -->
  <NumberField
    v-model="age"
    label="Age"
    :min="0"
    :max="120"
  />

  <!-- Disabled state -->
  <NumberField
    v-model="quantity"
    disabled
    label="Disabled"
  />

  <!-- Different variants -->
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

  <!-- Custom styling -->
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
