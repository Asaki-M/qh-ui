# Checkbox
A checkbox component for selecting multiple options.

<script setup>
import { Checkbox } from 'qh-ui'
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
</script>

<ComponentPreview name="CheckboxDemo">
  <div class="flex flex-col gap-4">
    <Checkbox v-model="checked1" label="Accept terms and conditions" />
    <Checkbox v-model="checked2" label="Subscribe to newsletter" />
    <Checkbox v-model="checked3" label="Enable notifications" disabled />
  </div>
</ComponentPreview>

## API Reference

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `boolean` | `false` | Checkbox checked state |
| `label` | `string` | `''` | Checkbox label text |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Checkbox size |
| `checkboxClass` | `string` | `''` | Additional CSS class for checkbox |
| `labelClass` | `string` | `''` | Additional CSS class for label |

### Size Reference

| Size | Dimensions | Icon Size | Border Radius |
| --- | --- | --- | --- |
| `sm` | `16px × 16px` | `12px × 12px` | `rounded-sm` |
| `md` | `20px × 20px` | `16px × 16px` | `rounded-md` |
| `lg` | `24px × 24px` | `20px × 20px` | `rounded-lg` |

### Events

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean) => void` | Triggered when checkbox state changes |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-checkbox-label` | Checkbox label container |
| `.qh-checkbox` | Checkbox root container |

### Usage Examples

```vue
<script setup>
import { Checkbox } from 'qh-ui'
import { ref } from 'vue'

const acceptTerms = ref(false)
const newsletter = ref(true)
const notifications = ref(false)
const features = ref([])

function handleFeatureChange(feature, checked) {
  if (checked) {
    features.value.push(feature)
  }
  else {
    features.value = features.value.filter(f => f !== feature)
  }
}
</script>

<template>
  <!-- Basic usage -->
  <Checkbox v-model="acceptTerms" />

  <!-- With label -->
  <Checkbox
    v-model="acceptTerms"
    label="I accept the terms and conditions"
  />

  <!-- Different sizes -->
  <Checkbox v-model="newsletter" size="sm" label="Small checkbox" />
  <Checkbox v-model="newsletter" size="md" label="Medium checkbox" />
  <Checkbox v-model="newsletter" size="lg" label="Large checkbox" />

  <!-- Disabled state -->
  <Checkbox
    v-model="notifications"
    disabled
    label="Disabled checkbox"
  />

  <!-- Multiple selection list -->
  <div class="space-y-2">
    <h3>Select features:</h3>
    <Checkbox
      :model-value="features.includes('dark-mode')"
      label="Dark mode"
      @update:model-value="handleFeatureChange('dark-mode', $event)"
    />
    <Checkbox
      :model-value="features.includes('notifications')"
      label="Push notifications"
      @update:model-value="handleFeatureChange('notifications', $event)"
    />
    <Checkbox
      :model-value="features.includes('analytics')"
      label="Analytics"
      @update:model-value="handleFeatureChange('analytics', $event)"
    />
  </div>

  <!-- Custom styling -->
  <Checkbox
    v-model="acceptTerms"
    label="Custom styled checkbox"
    checkbox-class="border-2 border-blue-500"
    label-class="text-blue-600 font-semibold"
  />
</template>
```
