<script setup lang="ts">
import { Checkbox } from 'qh-ui'
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <Checkbox
      v-model="checked1"
      label="Accept terms and conditions"
    />
    <Checkbox
      v-model="checked2"
      label="Subscribe to newsletter"
    />
    <Checkbox
      v-model="checked3"
      label="Enable notifications"
      disabled
    />
  </div>
</template>
