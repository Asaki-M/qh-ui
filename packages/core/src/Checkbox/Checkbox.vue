<script lang="ts">
export interface CheckboxProps {
  modelValue?: boolean
  disabled?: boolean
  label?: string
  checkboxClass?: string
  labelClass?: string
  size?: 'sm' | 'md' | 'lg'
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
  <label
    class="qh-checkbox-label flex items-center gap-2 select-none"
    :class="[labelClass, disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']"
    @click="!disabled && handleChange(!modelValue)"
  >
    <CheckboxRoot
      :checked="modelValue"
      :disabled="disabled"
      class="qh-checkbox flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-zinc-900 border border-primary data-[state=checked]:bg-primary"
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
    <span
      v-if="label"
      class="text-stone-700 dark:text-white"
    >{{ label }}</span>
  </label>
</template>
