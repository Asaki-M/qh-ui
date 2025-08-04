<script setup lang="ts">
import { PinInput } from 'qh-ui'
import { ref } from 'vue'

const pinValue = ref(['', '', '', '', '', ''])
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <PinInput
      v-model="pinValue"
      :length="6"
      placeholder="0"
    />
  </div>
</template>
