<script setup lang="ts">
import { Input } from 'qh-ui'
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <Input
    v-model="text"
    placeholder="Enter text..."
  />
</template>
