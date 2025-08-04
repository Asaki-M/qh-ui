<script lang="ts">
import type { PinInputRootProps } from 'reka-ui'

// 定义类型映射
type PinInputModelValue<T extends 'text' | 'number'> = T extends 'number' ? number[] : string[]

export interface PinInputProps extends PinInputRootProps {
  length?: number
  /** Variant style */
  variant?: 'primary' | 'secondary'
  /** Custom classes */
  rootClass?: string
  labelClass?: string
  containerClass?: string
  inputClass?: string
}
</script>

<script setup lang="ts" generic="T extends 'text' | 'number' = 'text'">
import { PinInputInput, PinInputRoot } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<PinInputProps & { type?: T }>(), {
  variant: 'primary',
  length: 6,
})

const model = defineModel<PinInputModelValue<T>>({
  required: true,
})

const pinInputRootProps = computed(() => {
  const { placeholder, mask, otp, type, dir, disabled, id } = props
  return ({ placeholder, mask, otp, type, dir, disabled, id })
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
  <PinInputRoot
    v-model="model"
    v-bind="pinInputRootProps"
    class="qh-pin-input-root"
  >
    <div
      class="qh-pin-input-inputs-container mt-1 flex items-center gap-2"
      :class="containerClass"
    >
      <PinInputInput
        v-for="(id, index) in props.length"
        :key="id"
        :index="index"
        :disabled="disabled"
        class="qh-pin-input-input w-12 h-12 text-center text-lg font-medium rounded focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all tabular-nums text-stone-900 dark:text-white"
        :class="[variantClass, inputClass]"
      />
    </div>
  </PinInputRoot>
</template>
