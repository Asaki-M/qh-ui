<script setup lang="ts">
import { computed } from 'vue'
import PreviewContainer from './PreviewContainer.vue'

const props = withDefaults(defineProps<{
  name: string
  files?: string
}>(), {})

const parsedFiles = computed(() => {
  try {
    return JSON.parse(decodeURIComponent(props.files ?? ''))
  }
  catch {
    return { demo: [] }
  }
})
</script>

<template>
  <PreviewContainer
    :name="name"
    :files="parsedFiles"
  >
    <slot />

    <template #codeSlot>
      <slot name="demo" />
    </template>
  </PreviewContainer>
</template>
