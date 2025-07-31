<script lang="ts" setup>
import { Switch } from 'qh-ui'
import { ref } from 'vue'

const isVisableCode = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-end">
      <Switch
        v-model="isVisableCode"
        label="View Code"
        as="span"
      />
    </div>
    <div class="w-full min-h-[400px] flex items-center justify-center rounded-2xl border border-zinc-200 dark:border-neutral-700 bg-zinc-50 dark:bg-neutral-800">
      <template v-if="!isVisableCode">
        <slot />
      </template>
      <template v-else>
        <slot name="code" />
      </template>
    </div>
  </div>
</template>
