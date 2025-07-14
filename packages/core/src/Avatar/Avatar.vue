<script setup lang="ts">
import type { AvatarImageProps } from 'reka-ui'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'
import { computed } from 'vue'
import Icon from '@/Icon/Icon.vue'

export interface AvatarProps extends Omit<AvatarImageProps, 'src'> {
  /** 头像大小 */
  size?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  /** 图片地址 */
  src?: string
  /** 图片alt文本 */
  alt?: string
  /** 加载失败时的占位符文本 */
  fallback?: string
  /** 圆角大小 */
  radius?: 'full' | 'lg' | 'md' | 'sm'
}

// Props 定义
const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  radius: 'md',
})

// 使用预定义的 Tailwind 类名，确保构建时能识别
const sizeClasses = computed(() => {
  const sizeMap = {
    '3xs': 'w-4 h-4',
    '2xs': 'w-5 h-5',
    'xs': 'w-6 h-6',
    'sm': 'w-7 h-7',
    'md': 'w-8 h-8',
    'lg': 'w-9 h-9',
    'xl': 'w-10 h-10',
    '2xl': 'w-11 h-11',
    '3xl': 'w-12 h-12',
  }
  return sizeMap[props.size]
})

const radiusClasses = computed(() => {
  const radiusMap = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }
  return radiusMap[props.radius]
})
</script>

<template>
  <AvatarRoot
    class="inline-flex items-center justify-center overflow-hidden bg-gray-100"
    :class="[
      sizeClasses,
      radiusClasses,
    ]"
  >
    <AvatarImage
      v-if="src"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover"
    />

    <AvatarFallback
      class="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 font-medium"
    >
      <Icon
        v-if="!fallback"
        class="w-2/3 h-2/3"
        icon="mdi:account-circle"
      />
      <span
        v-else
        class="text-sm"
      >
        {{ fallback }}
      </span>
    </AvatarFallback>
  </AvatarRoot>
</template>
