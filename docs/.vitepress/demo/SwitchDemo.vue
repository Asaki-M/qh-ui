<script setup lang="ts">
import { Switch } from 'qh-ui'
import { ref } from 'vue'

const switch1 = ref(false)
</script>

<template>
  <Switch
    v-model="switch1"
    label="Enable notifications"
  />
</template>
