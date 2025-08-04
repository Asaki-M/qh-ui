<script setup lang="ts">
import { RadioGroup } from 'qh-ui'
import { ref } from 'vue'

const selectedValue = ref('option1')

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <RadioGroup
      v-model="selectedValue"
      :options="options"
    />
  </div>
</template>
