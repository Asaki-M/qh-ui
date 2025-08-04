<script lang="ts">
import type { SliderRootProps } from 'reka-ui'
import { computed } from 'vue'

export interface SliderProps extends SliderRootProps {
  label?: string
  labelOrientation?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
  containerClasses?: string
  labelClasses?: string
  sliderClasses?: string
  trackClasses?: string
  thumbClasses?: string
}
</script>

<script lang="ts" setup>
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'

const props = withDefaults(defineProps<SliderProps>(), {
  orientation: 'horizontal',
  labelOrientation: 'vertical',
  size: 'md',
})

const componentsId = Math.random().toString(36).substring(2, 15)
const model = defineModel<number[]>({
  required: true,
})

const sliderExtendsProps = computed(() => {
  const {
    label,
    labelOrientation,
    size,
    containerClasses,
    labelClasses,
    sliderClasses,
    trackClasses,
    thumbClasses,
    modelValue,
    ...restProps
  } = props
  return restProps
})

const containerClass = computed(() => {
  const containerMap = {
    horizontal: 'flex gap-2 items-center',
    vertical: 'flex flex-col gap-2',
  }
  return containerMap[props.labelOrientation]
})

const thumbSize = computed(() => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }
  return sizeMap[props.size]
})

const trackSize = computed(() => {
  if (props.orientation === 'vertical') {
    const sizeMap = {
      sm: 'w-2',
      md: 'w-3',
      lg: 'w-4',
    }
    return sizeMap[props.size]
  }
  else {
    const sizeMap = {
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
    }
    return sizeMap[props.size]
  }
})
</script>

<template>
  <div
    :class="[containerClass, containerClasses]"
  >
    <label
      v-if="label"
      :for="componentsId"
      class="qh-slider-label text-stone-700 dark:text-white block mb-2"
      :class="labelClasses"
    >{{ label }}</label>
    <div
      :id="componentsId"
      :class="sliderClasses"
      class="w-full"
    >
      <SliderRoot
        v-model="model"
        class="relative select-none touch-none"
        :class="[
          props.orientation === 'vertical'
            ? 'flex flex-col items-center h-48 w-5'
            : 'flex items-center w-full',
          trackClasses,
        ]"
        v-bind="sliderExtendsProps"
      >
        <SliderTrack
          class="bg-stone-500/30 relative grow rounded-full"
          :class="[trackSize, trackClasses]"
        >
          <SliderRange
            class="absolute bg-primary rounded-full"
            :class="props.orientation === 'vertical' ? 'w-full' : 'h-full'"
          />
        </SliderTrack>
        <SliderThumb
          :class="[thumbSize, thumbClasses]"
          class="block bg-primary rounded-full cursor-pointer hover:bg-primary/90 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-secondary"
        />
      </SliderRoot>
    </div>
  </div>
</template>
