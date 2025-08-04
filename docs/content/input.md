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

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `string` | `required` | Input value |
| `type` | `'text' \| 'password' \| 'email' \| 'tel' \| 'url' \| 'search'` | `'text'` | Input type |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `label` | `string` | `undefined` | Input label |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `readonly` | `boolean` | `false` | Whether the input is readonly |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Input style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `rootClass` | `string` | `undefined` | Additional CSS class for root container |
| `labelClass` | `string` | `undefined` | Additional CSS class for label |
| `inputContainerClass` | `string` | `undefined` | Additional CSS class for input container |
| `inputClass` | `string` | `undefined` | Additional CSS class for input |

### Size Reference

| Size | Padding | Font Size |
| --- | --- | --- |
| `sm` | `8px 8px 4px 4px` | `14px` |
| `md` | `12px 12px 8px 8px` | `16px` |
| `lg` | `16px 16px 12px 12px` | `18px` |

### Events

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: string) => void` | Triggered when input value changes |

### Slots

| Slot Name | Description |
| --- | --- |
| `prefix` | Content before the input |
| `suffix` | Content after the input |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-input-container` | Input root container |
| `.qh-input-label` | Input label |
| `.qh-input-input-container` | Input container |
| `.qh-input-input` | Input element |

### Usage Examples

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
  <!-- Basic usage -->
  <Input v-model="username" placeholder="Enter username" />

  <!-- With label -->
  <Input
    v-model="email"
    type="email"
    label="Email Address"
    placeholder="your@email.com"
  />

  <!-- Different types -->
  <Input v-model="password" type="password" label="Password" />
  <Input v-model="search" type="search" placeholder="Search..." />

  <!-- Different sizes -->
  <Input v-model="username" size="sm" placeholder="Small" />
  <Input v-model="username" size="md" placeholder="Medium" />
  <Input v-model="username" size="lg" placeholder="Large" />

  <!-- States -->
  <Input v-model="username" disabled placeholder="Disabled" />
  <Input v-model="username" readonly placeholder="Readonly" />

  <!-- With slots -->
  <Input v-model="search" placeholder="Search...">
    <template #prefix>
      <Icon icon="mdi:magnify" />
    </template>
    <template #suffix>
      <Icon icon="mdi:close" />
    </template>
  </Input>

  <!-- Custom styling -->
  <Input
    v-model="username"
    label="Custom Input"
    root-class="mb-4"
    label-class="font-bold text-blue-600"
    input-class="border-2 border-blue-300"
  />
</template>
```
