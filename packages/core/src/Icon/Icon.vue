<script lang="ts">
import type { IconifyIconProps } from '@iconify/vue'

export interface IconProps extends IconifyIconProps {
  customIcon?: string
  extraClass?: string
}
</script>

<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps<IconProps>()

const iconifyProps = computed(() => {
  const { extraClass, customIcon, ...rest } = props
  return rest
})
</script>

<template>
  <IconifyIcon
    v-if="!props.customIcon"
    v-bind="iconifyProps"
    :class="props.extraClass"
  />
  <!-- TODO: 自定义图标 -->
  <!-- <component
    :is="props.customIcon"
    v-else
    :class="props.customIconClass"
  /> -->
</template>
