<script lang="ts">
export interface CheckboxProps {
  modelValue?: boolean
  disabled?: boolean
  label?: string
  containerClass?: string
  checkboxClass?: string
  labelClass?: string
  size?: 'sm' | 'md' | 'lg'
  labelPosition?: 'left' | 'right'
}
</script>

<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { computed } from 'vue'
import Icon from '@/Icon/Icon.vue'

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  label: '',
  extraClass: '',
  checkboxClass: '',
  labelClass: '',
  size: 'md',
  labelPosition: 'right',
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const sizeClasses = computed(() => {
  const sizeMap = {
    sm: 'w-4 h-4 rounded-sm',
    md: 'w-5 h-5 rounded-md',
    lg: 'w-6 h-6 rounded-lg',
  }
  return sizeMap[props.size]
})

const iconSize = computed(() => {
  const sizeMap = {
    sm: { width: 12, height: 12 },
    md: { width: 16, height: 16 },
    lg: { width: 20, height: 20 },
  }
  return sizeMap[props.size]
})

function handleChange(value: boolean) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    class="qh-checkbox-container flex items-center gap-2"
    :class="containerClass"
  >
    <!-- Label on left -->
    <label
      v-if="label && labelPosition === 'left'"
      class="qh-checkbox-label select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      :class="labelClass"
      @click="!disabled && handleChange(!modelValue)"
    >
      {{ label }}
    </label>

    <!-- Checkbox -->
    <CheckboxRoot
      :checked="modelValue"
      :disabled="disabled"
      class="qh-checkbox flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed bg-primary"
      :class="[sizeClasses, checkboxClass]"
      @update:checked="handleChange"
    >
      <CheckboxIndicator class="w-full h-full flex items-center justify-center">
        <Icon
          icon="lucide:check"
          class="text-white"
          :width="iconSize.width"
          :height="iconSize.height"
        />
      </CheckboxIndicator>
    </CheckboxRoot>

    <!-- Label on right -->
    <label
      v-if="label && labelPosition === 'right'"
      class="qh-checkbox-label select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      :class="labelClass"
      @click="!disabled && handleChange(!modelValue)"
    >
      {{ label }}
    </label>
  </div>
</template>
