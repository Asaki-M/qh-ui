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

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `number[]` | `required` | 滑块的值（数组形式） |
| `label` | `string` | `undefined` | 滑块标签 |
| `labelOrientation` | `'horizontal' \| 'vertical'` | `'vertical'` | 标签方向 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 滑块大小 |
| `min` | `number` | `0` | 最小值 |
| `max` | `number` | `100` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | 滑块方向 |
| `containerClasses` | `string` | `undefined` | 容器额外类名 |
| `labelClasses` | `string` | `undefined` | 标签额外类名 |
| `sliderClasses` | `string` | `undefined` | 滑块额外类名 |
| `trackClasses` | `string` | `undefined` | 轨道额外类名 |
| `thumbClasses` | `string` | `undefined` | 滑块手柄额外类名 |

### Size 尺寸对照

| Size | 轨道高度 | 手柄大小 |
| --- | --- | --- |
| `sm` | `4px` | `16px × 16px` |
| `md` | `6px` | `20px × 20px` |
| `lg` | `8px` | `24px × 24px` |

### Events

Slider 组件继承自 `reka-ui` 的 `SliderRoot` 组件，支持以下事件：

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: number[]) => void` | 滑块值变化时触发 |
| `valueCommit` | `(value: number[]) => void` | 滑块值提交时触发（拖拽结束） |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-slider-root` | 滑块根容器 |
| `.qh-slider-label` | 滑块标签 |
| `.qh-slider-track` | 滑块轨道 |
| `.qh-slider-range` | 滑块范围 |
| `.qh-slider-thumb` | 滑块手柄 |

### 使用示例

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
  <!-- 基础用法 -->
  <Slider v-model="volume" :max="100" />

  <!-- 带标签 -->
  <Slider
    v-model="volume"
    label="Volume"
    :max="100"
    :step="5"
  />

  <!-- 范围滑块 -->
  <Slider
    v-model="priceRange"
    label="Price Range ($)"
    :min="0"
    :max="1000"
    :step="10"
  />

  <!-- 不同尺寸 -->
  <Slider v-model="brightness" size="sm" label="Small" :max="100" />
  <Slider v-model="brightness" size="md" label="Medium" :max="100" />
  <Slider v-model="brightness" size="lg" label="Large" :max="100" />

  <!-- 水平标签 -->
  <Slider
    v-model="temperature"
    label="Temperature:"
    label-orientation="horizontal"
    :min="10"
    :max="35"
    :step="0.5"
  />

  <!-- 垂直滑块 -->
  <div class="h-48">
    <Slider
      v-model="volume"
      orientation="vertical"
      label="Vertical Slider"
      :max="100"
    />
  </div>

  <!-- 禁用状态 -->
  <Slider
    v-model="volume"
    disabled
    label="Disabled"
    :max="100"
  />
</template>
```
