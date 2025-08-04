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

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `boolean` | `false` | 复选框选中状态 |
| `label` | `string` | `''` | 复选框标签文本 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 复选框大小 |
| `checkboxClass` | `string` | `''` | 复选框额外类名 |
| `labelClass` | `string` | `''` | 标签额外类名 |

### Size 尺寸对照

| Size | 尺寸 | 图标大小 | 圆角 |
| --- | --- | --- | --- |
| `sm` | `16px × 16px` | `12px × 12px` | `rounded-sm` |
| `md` | `20px × 20px` | `16px × 16px` | `rounded-md` |
| `lg` | `24px × 24px` | `20px × 20px` | `rounded-lg` |

### Events

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: boolean) => void` | 复选框状态变化时触发 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-checkbox-label` | 复选框标签容器 |
| `.qh-checkbox` | 复选框根容器 |

### 使用示例

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
  <!-- 基础用法 -->
  <Checkbox v-model="acceptTerms" />

  <!-- 带标签 -->
  <Checkbox
    v-model="acceptTerms"
    label="I accept the terms and conditions"
  />

  <!-- 不同尺寸 -->
  <Checkbox v-model="newsletter" size="sm" label="Small checkbox" />
  <Checkbox v-model="newsletter" size="md" label="Medium checkbox" />
  <Checkbox v-model="newsletter" size="lg" label="Large checkbox" />

  <!-- 禁用状态 -->
  <Checkbox
    v-model="notifications"
    disabled
    label="Disabled checkbox"
  />

  <!-- 多选列表 -->
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

  <!-- 自定义样式 -->
  <Checkbox
    v-model="acceptTerms"
    label="Custom styled checkbox"
    checkbox-class="border-2 border-blue-500"
    label-class="text-blue-600 font-semibold"
  />
</template>
```
