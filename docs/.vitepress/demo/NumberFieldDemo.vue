<script setup lang="ts">
import { NumberField } from 'qh-ui'
import { ref } from 'vue'

const quantity = ref(10)
</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <NumberField
      v-model="quantity"
      label="Quantity"
      :min="0"
      :max="100"
    />
  </div>
</template>
