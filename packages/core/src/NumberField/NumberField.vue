<script lang="ts">
export interface NumberFieldProps {
  min?: number
  max?: number
  disabled?: boolean
  label?: string
  variant?: 'primary' | 'secondary'
  rootClass?: string
  labelClass?: string
  inputContainerClass?: string
  decrementClass?: string
  inputClass?: string
  incrementClass?: string
}
</script>

<script setup lang="ts">
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from 'reka-ui'
import { computed } from 'vue'
import { Icon } from '@/Icon'

const props = withDefaults(defineProps<NumberFieldProps>(), {
  min: 0,
  max: Infinity,
  disabled: false,
  variant: 'primary',
})

const componentsId = Math.random().toString(36).substring(2, 15)

const model = defineModel<number>({
  required: true,
})

const variantClass = computed(() => {
  const variantClassMap = {
    primary: 'border border-primary bg-white dark:bg-zinc-900',
    secondary: 'bg-secondary',
  }

  return variantClassMap[props.variant]
})
</script>

<template>
  <NumberFieldRoot
    :id="componentsId"
    v-model="model"
    :min="min"
    :max="max"
    :disabled="disabled"
    class="qh-number-field-container"
    :class="rootClass"
  >
    <label
      :for="componentsId"
      class="qh-number-field-label text-stone-700 dark:text-white"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <div
      class="qh-number-field-input-container mt-1 flex items-center w-fit rounded focus-within:ring-2 focus-within:ring-primary/20"
      :class="[variantClass, inputContainerClass]"
    >
      <NumberFieldDecrement
        class="qh-number-field-decrement p-2 disabled:opacity-20 cursor-pointer hover:opacity-50 transition-all"
        :class="decrementClass"
      >
        <Icon icon="line-md:minus" />
      </NumberFieldDecrement>
      <NumberFieldInput
        class="qh-number-field-input bg-transparent w-16 tabular-nums text-center focus:outline-0 p-1"
        :class="inputClass"
      />
      <NumberFieldIncrement
        class="qh-number-field-increment p-2 disabled:opacity-20 cursor-pointer hover:opacity-50 transition-all"
        :class="incrementClass"
      >
        <Icon icon="line-md:plus" />
      </NumberFieldIncrement>
    </div>
  </NumberFieldRoot>
</template>
