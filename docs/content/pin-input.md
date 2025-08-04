# PinInput
A PIN input component for entering verification codes or passwords.

<script setup>
import { PinInput } from 'qh-ui'
import { ref } from 'vue'

const pinValue = ref(['', '', '', '', '', ''])
</script>

<ComponentPreview name="PinInputDemo">
  <PinInput v-model="pinValue" :length="6" placeholder="0" />
</ComponentPreview>

## API Reference

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `string[] \| number[]` | `required` | PIN input value array |
| `length` | `number` | `6` | Number of PIN input fields |
| `type` | `'text' \| 'number'` | `'text'` | Input type |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `mask` | `boolean` | `false` | Whether to mask input content (password mode) |
| `otp` | `boolean` | `false` | Whether it's one-time password mode |
| `disabled` | `boolean` | `false` | Whether the component is disabled |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Style variant |
| `rootClass` | `string` | `undefined` | Additional CSS class for root container |
| `labelClass` | `string` | `undefined` | Additional CSS class for label |
| `containerClass` | `string` | `undefined` | Additional CSS class for container |
| `inputClass` | `string` | `undefined` | Additional CSS class for input |

### Events

The PinInput component inherits from `reka-ui`'s `PinInputRoot` component and supports the following events:

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: string[] \| number[]) => void` | Triggered when PIN value changes |
| `complete` | `(value: string[] \| number[]) => void` | Triggered when PIN input is complete |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-pin-input-root` | PIN input root container |
| `.qh-pin-input-input` | Individual input field |

### Usage Examples

```vue
<script setup>
import { PinInput } from 'qh-ui'
import { ref } from 'vue'

const verificationCode = ref(['', '', '', '', '', ''])
const password = ref(['', '', '', ''])
const numberPin = ref([0, 0, 0, 0])
</script>

<template>
  <!-- Basic usage -->
  <PinInput v-model="verificationCode" :length="6" />

  <!-- Verification code input -->
  <PinInput
    v-model="verificationCode"
    :length="6"
    placeholder="0"
    otp
  />

  <!-- Password mode -->
  <PinInput
    v-model="password"
    :length="4"
    mask
    placeholder="•"
  />

  <!-- Number type -->
  <PinInput
    v-model="numberPin"
    :length="4"
    type="number"
    placeholder="0"
  />

  <!-- Different variants -->
  <PinInput
    v-model="verificationCode"
    variant="primary"
    :length="6"
  />
  <PinInput
    v-model="verificationCode"
    variant="secondary"
    :length="6"
  />

  <!-- Disabled state -->
  <PinInput
    v-model="verificationCode"
    :length="6"
    disabled
  />

  <!-- Custom styling -->
  <PinInput
    v-model="verificationCode"
    :length="6"
    root-class="gap-4"
    input-class="border-2 border-blue-500 rounded-lg"
  />
</template>
```

### Use Cases

- **Verification Code Input**: SMS verification codes, email verification codes
- **Password Input**: PIN codes, security passwords
- **Identity Verification**: Two-factor authentication, security confirmation
- **Gaming**: Room number input, invitation code input
