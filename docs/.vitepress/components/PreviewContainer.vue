<script setup lang="ts">
import { Switch } from 'qh-ui'
import { ref } from 'vue'

withDefaults(
  defineProps<{
    overflow?: boolean
    name?: string
    files?: Record<string, string[]>
  }>(),
  { name: '', files: () => ({}) },
)

const isCodeView = ref(false)
</script>

<template>
  <div class="relative text-sm text-black my-4">
    <div class="w-full flex justify-end">
      <Switch
        v-model="isCodeView"
        as="span"
        label="View Code"
      />
    </div>

    <div
      v-if="!isCodeView"
      class="p-4 rounded-xl bg-zinc-200 dark:bg-zinc-800 backdrop-blur-2xl w-full relative items-center justify-center flex h-[400px]"
      :class="{ 'overflow-x-auto': overflow }"
    >
      <div class="w-full max-w-[700px] flex items-center justify-center">
        <slot />
      </div>
    </div>

    <div
      v-else
      class="p-4 h-[400px] overflow-y-auto rounded-xl bg-zinc-200 dark:bg-zinc-800 backdrop-blur-2xl w-full"
    >
      <slot name="codeSlot" />
    </div>
  </div>
</template>
