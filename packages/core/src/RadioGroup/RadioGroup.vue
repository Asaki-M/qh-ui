<script lang="ts">
export interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}

export interface RadioGroupProps {
  options: RadioOption[]
  disabled?: boolean
  orientation?: 'vertical' | 'horizontal'
  size?: 'sm' | 'md' | 'lg'
}
</script>

<script setup lang="ts">
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  disabled: false,
  size: 'md',
  orientation: 'vertical',
})

const sizeClasses = computed(() => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }
  return sizeMap[props.size]
})

// 根据方向设置布局类
const layoutClasses = computed(() => {
  return props.orientation === 'horizontal'
    ? 'flex flex-row gap-4'
    : 'flex flex-col gap-2'
})

const model = defineModel<string>()
</script>

<template>
  <RadioGroupRoot
    v-model="model"
    :disabled="disabled"
    class="qh-radio-group-container"
    :class="[layoutClasses]"
  >
    <div
      v-for="(option, index) in options"
      :key="option.value + index"
      class="flex items-center gap-2 select-none qh-radio-group-item"
      :class="{
        'opacity-50 pointer-events-none': props.disabled || option.disabled,
      }"
    >
      <RadioGroupItem
        :id="option.value"
        :disabled="props.disabled || option.disabled"
        class="qh-radio-group-item-container bg-white rounded-full border border-primary shadow-sm outline-none transition-all"
        :class="[
          sizeClasses,
          {
            'cursor-pointer': !props.disabled && !option.disabled,
            'cursor-not-allowed opacity-50': props.disabled || option.disabled,
          },
        ]"
        :value="option.value"
      >
        <RadioGroupIndicator
          class="qh-radio-group-item-indicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-primary dark:after:bg-primary"
        />
      </RadioGroupItem>
      <label
        class="text-stone-700 dark:text-white text-sm leading-none transition-all qh-radio-group-item-label"
        :class="{
          'cursor-pointer': !props.disabled && !option.disabled,
          'cursor-not-allowed': props.disabled || option.disabled,
        }"
        :for="option.value"
      >
        {{ option.label }}
      </label>
    </div>
  </RadioGroupRoot>
</template>
