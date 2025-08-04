# Switch
A toggle switch component for binary choices.

<script setup>
import { Switch } from 'qh-ui'
import { ref } from 'vue'

const switchValue = ref(false)
</script>

<ComponentPreview name="SwitchDemo">
  <Switch v-model="switchValue" label="Enable notifications" />
</ComponentPreview>

## API Reference

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `boolean` | `required` | Switch state |
| `label` | `string` | `undefined` | Switch label text |
| `labelPosition` | `'left' \| 'right'` | `'right'` | Label position |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Switch size |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Switch style variant |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `containerClasses` | `string` | `undefined` | Additional CSS class for container |
| `labelClasses` | `string` | `undefined` | Additional CSS class for label |
| `switchClasses` | `string` | `undefined` | Additional CSS class for switch |
| `thumbClasses` | `string` | `undefined` | Additional CSS class for thumb |

### Size Reference

| Size | Switch Size | Thumb Size |
| --- | --- | --- |
| `sm` | `32px × 16px` | `12px × 12px` |
| `md` | `40px × 20px` | `16px × 16px` |
| `lg` | `48px × 24px` | `20px × 20px` |

### Events

The Switch component inherits from `reka-ui`'s `SwitchRoot` component and supports the following events:

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean) => void` | Triggered when switch state changes |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-switch-label` | Switch label |
| `.qh-switch-root` | Switch root container |
| `.qh-switch-thumb` | Switch thumb |

### Usage Examples

```vue
<script setup>
import { Switch } from 'qh-ui'
import { ref } from 'vue'

const isEnabled = ref(false)
const isDarkMode = ref(true)
</script>

<template>
  <!-- Basic usage -->
  <Switch v-model="isEnabled" />

  <!-- With label -->
  <Switch v-model="isEnabled" label="Enable feature" />

  <!-- Label on left -->
  <Switch
    v-model="isDarkMode"
    label="Dark mode"
    label-position="left"
  />

  <!-- Different sizes -->
  <Switch v-model="isEnabled" size="sm" label="Small" />
  <Switch v-model="isEnabled" size="md" label="Medium" />
  <Switch v-model="isEnabled" size="lg" label="Large" />

  <!-- Different variants -->
  <Switch v-model="isEnabled" variant="primary" label="Primary" />
  <Switch v-model="isEnabled" variant="secondary" label="Secondary" />

  <!-- Disabled state -->
  <Switch v-model="isEnabled" disabled label="Disabled" />

  <!-- Custom styling -->
  <Switch
    v-model="isEnabled"
    label="Custom style"
    container-classes="p-2 bg-gray-100 rounded"
    label-classes="font-bold text-blue-600"
  />
</template>
```
