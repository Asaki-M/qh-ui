<script setup lang="ts">
import { Select } from 'qh-ui'
import { ref } from 'vue'

const selectedValue = ref('')

const simpleOptions = [
  {
    children: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
    ],
  },
]
</script>

<template>
  <Select
    v-model="selectedValue"
    :options="simpleOptions"
    placeholder="Choose a fruit"
    label="Favorite Fruit"
  />
</template>
