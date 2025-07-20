<script lang="ts">
export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'tel' | 'url' | 'search'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  label?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  rootClass?: string
  labelClass?: string
  inputContainerClass?: string
  inputClass?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  variant: 'primary',
  size: 'md',
})

const componentsId = Math.random().toString(36).substring(2, 15)

const model = defineModel<string>({
  required: true,
})

const variantClass = computed(() => {
  const variantClassMap = {
    primary: 'border border-primary bg-white dark:bg-zinc-900',
    secondary: 'bg-secondary',
  }

  return variantClassMap[props.variant]
})

const sizeClass = computed(() => {
  const sizeClassMap = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2',
    lg: 'px-4 py-3 text-lg',
  }

  return sizeClassMap[props.size]
})
</script>

<template>
  <div
    class="qh-input-container"
    :class="rootClass"
  >
    <label
      v-if="label"
      :for="componentsId"
      class="qh-input-label text-stone-700 dark:text-white block mb-1"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <div
      class="qh-input-input-container px-2 flex items-center w-full rounded transition-all focus-within:ring-2 focus-within:ring-primary/20"
      :class="[variantClass, inputContainerClass]"
    >
      <slot name="prefix" />
      <input
        :id="componentsId"
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        class="qh-input-input bg-transparent w-full focus:outline-0 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="[sizeClass, inputClass]"
      >
      <slot name="suffix" />
    </div>
  </div>
</template>
