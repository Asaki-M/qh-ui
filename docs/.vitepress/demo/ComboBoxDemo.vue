<script setup lang="ts">
import { ComboBox } from 'qh-ui'
import { ref } from 'vue'

const selectedValue = ref('')

const options = [
  {
    children: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-md">
    <ComboBox
      v-model="selectedValue"
      :options="options"
      label="Choose a fruit"
      placeholder="Search fruits..."
    />
  </div>
</template>
