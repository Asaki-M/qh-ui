<script lang="ts">
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  extraClass?: string
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  extraClass: '',
})

const variantClasses = computed(() => {
  const variantMap = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary',
    outline: 'bg-transparent border border-primary text-primary',
    ghost: 'bg-transparent text-primary hover:bg-secondary',
    link: 'bg-transparent text-primary hover:underline',
  }
  return variantMap[props.variant]
})

const sizeClasses = computed(() => {
  const sizeMap = {
    sm: 'p-1 text-sm',
    md: 'px-2 py-1 text-base',
    lg: 'px-4 py-2 text-lg',
  }
  return sizeMap[props.size]
})
</script>

<template>
  <button
    :class="[variantClasses, sizeClasses, extraClass]"
    class="rounded-md cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="disabled"
  >
    <!-- TODO: Add icon and loading -->
    <slot />
  </button>
</template>
