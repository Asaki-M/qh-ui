# Slider
A slider component for selecting numeric values within a range.

<script setup>
import { Slider } from 'qh-ui'
import { ref } from 'vue'

const value2 = ref([50])
</script>

<ComponentPreview name="SliderDemo">
  <div class="w-3/5">
    <Slider v-model="value2" label="Volume" :max="100" />
  </div>
</ComponentPreview>

## API Reference

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `number[]` | `required` | Slider value (array format) |
| `label` | `string` | `undefined` | Slider label |
| `labelOrientation` | `'horizontal' \| 'vertical'` | `'vertical'` | Label orientation |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Slider size |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step value |
| `disabled` | `boolean` | `false` | Whether the slider is disabled |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider orientation |
| `containerClasses` | `string` | `undefined` | Additional CSS class for container |
| `labelClasses` | `string` | `undefined` | Additional CSS class for label |
| `sliderClasses` | `string` | `undefined` | Additional CSS class for slider |
| `trackClasses` | `string` | `undefined` | Additional CSS class for track |
| `thumbClasses` | `string` | `undefined` | Additional CSS class for thumb |

### Size Reference

| Size | Track Height | Thumb Size |
| --- | --- | --- |
| `sm` | `4px` | `16px × 16px` |
| `md` | `6px` | `20px × 20px` |
| `lg` | `8px` | `24px × 24px` |

### Events

The Slider component inherits from `reka-ui`'s `SliderRoot` component and supports the following events:

| Event Name | Type | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: number[]) => void` | Triggered when slider value changes |
| `valueCommit` | `(value: number[]) => void` | Triggered when slider value is committed (drag end) |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-slider-root` | Slider root container |
| `.qh-slider-label` | Slider label |
| `.qh-slider-track` | Slider track |
| `.qh-slider-range` | Slider range |
| `.qh-slider-thumb` | Slider thumb |

### Usage Examples

```vue
<script setup>
import { Slider } from 'qh-ui'
import { ref } from 'vue'

const volume = ref([50])
const priceRange = ref([20, 80])
const brightness = ref([75])
const temperature = ref([22])
</script>

<template>
  <!-- Basic usage -->
  <Slider v-model="volume" :max="100" />

  <!-- With label -->
  <Slider
    v-model="volume"
    label="Volume"
    :max="100"
    :step="5"
  />

  <!-- Range slider -->
  <Slider
    v-model="priceRange"
    label="Price Range ($)"
    :min="0"
    :max="1000"
    :step="10"
  />

  <!-- Different sizes -->
  <Slider v-model="brightness" size="sm" label="Small" :max="100" />
  <Slider v-model="brightness" size="md" label="Medium" :max="100" />
  <Slider v-model="brightness" size="lg" label="Large" :max="100" />

  <!-- Horizontal label -->
  <Slider
    v-model="temperature"
    label="Temperature:"
    label-orientation="horizontal"
    :min="10"
    :max="35"
    :step="0.5"
  />

  <!-- Vertical slider -->
  <div class="h-48">
    <Slider
      v-model="volume"
      orientation="vertical"
      label="Vertical Slider"
      :max="100"
    />
  </div>

  <!-- Disabled state -->
  <Slider
    v-model="volume"
    disabled
    label="Disabled"
    :max="100"
  />
</template>
```
