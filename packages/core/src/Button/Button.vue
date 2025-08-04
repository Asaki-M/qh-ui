<script lang="ts">
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  extraClass?: string
  loading?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/Icon/Icon.vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  extraClass: '',
  loading: false,
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

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
    sm: 'p-1 text-sm h-8',
    md: 'px-2 py-1 text-base h-10',
    lg: 'px-4 py-2 text-lg h-12',
  }
  return sizeMap[props.size]
})

function handleClick() {
  if (props.loading || props.disabled)
    return
  emit('click')
}
</script>

<template>
  <button
    :class="[variantClasses, sizeClasses, extraClass]"
    class="qh-button rounded-md cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-fit dark:text-white"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <slot name="prefix" />
    <Icon
      v-if="loading"
      width="1.5em"
      height="1.5em"
      icon="line-md:loading-twotone-loop"
      class="qh-button-loading"
    />
    <slot />
    <slot name="suffix" />
  </button>
</template>
