<script setup lang="ts">
import { Switch } from 'qh-ui'
import { ref } from 'vue'

withDefaults(
  defineProps<{
    overflow?: boolean
    name?: string
  }>(),
  { name: '' },
)

const isCodeView = ref(false)
</script>

<template>
  <div class="relative text-sm text-black my-4">
    <div class="w-full flex justify-end mb-4">
      <Switch
        v-model="isCodeView"
        as="span"
        label="View Code"
      />
    </div>

    <div
      v-if="!isCodeView"
      class="rounded-xl bg-card backdrop-blur-2xl w-full relative items-center justify-center flex h-[400px]"
      :class="{ 'overflow-x-auto': overflow }"
    >
      <slot />
    </div>

    <div
      v-else
      class="h-[400px] overflow-y-auto rounded-xl bg-card backdrop-blur-2xl w-full"
    >
      <slot name="codeSlot" />
    </div>
  </div>
</template>
