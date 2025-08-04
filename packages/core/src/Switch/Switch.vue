<script lang="ts">
import type { SwitchRootProps } from 'reka-ui'
import { computed } from 'vue'

export interface SwitchProps extends SwitchRootProps {
  label?: string
  labelPosition?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  containerClasses?: string
  labelClasses?: string
  switchClasses?: string
  thumbClasses?: string
}
</script>

<script lang="ts" setup>
import { SwitchRoot, SwitchThumb } from 'reka-ui'

const props = withDefaults(defineProps<SwitchProps>(), {
  labelPosition: 'right',
  size: 'md',
  variant: 'primary',
})

const componentsId = Math.random().toString(36).substring(2, 15)
const model = defineModel<boolean>({
  required: true,
})

const switchExtendsProps = computed(() => {
  const {
    label,
    labelPosition,
    size,
    variant,
    containerClasses,
    labelClasses,
    switchClasses,
    thumbClasses,
    modelValue,
    id,
    ...restProps
  } = props
  return restProps
})

const containerClass = computed(() => {
  const containerMap = {
    left: 'flex gap-2 items-center flex-row-reverse',
    right: 'flex gap-2 items-center',
  }
  return containerMap[props.labelPosition]
})

const switchSize = computed(() => {
  const sizeMap = {
    sm: 'w-8 h-4',
    md: 'w-10 h-5',
    lg: 'w-12 h-6',
  }
  return sizeMap[props.size]
})

const thumbSize = computed(() => {
  const sizeMap = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }
  return sizeMap[props.size]
})

const variantClass = computed(() => {
  const variantClassMap = {
    primary: 'data-[state=checked]:bg-primary data-[state=unchecked]:bg-stone-300 dark:data-[state=unchecked]:bg-zinc-600',
    secondary: 'data-[state=checked]:bg-secondary data-[state=unchecked]:bg-stone-300 dark:data-[state=unchecked]:bg-zinc-600',
  }
  return variantClassMap[props.variant]
})
</script>

<template>
  <div
    :class="[containerClass, containerClasses]"
  >
    <label
      v-if="label"
      :for="componentsId"
      class="qh-switch-label text-stone-700 dark:text-white cursor-pointer select-none"
      :class="labelClasses"
    >
      {{ label }}
    </label>
    <SwitchRoot
      :id="componentsId"
      v-model="model"
      class="qh-switch-root relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      :class="[switchSize, variantClass, switchClasses]"
      v-bind="switchExtendsProps"
    >
      <SwitchThumb
        class="qh-switch-thumb pointer-events-none block rounded-full bg-white dark:bg-zinc-100 shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0"
        :class="[thumbSize, thumbClasses]"
      />
    </SwitchRoot>
  </div>
</template>
