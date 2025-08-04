<script setup lang="ts">
import { Slider } from 'qh-ui'
import { ref } from 'vue'

const volume = ref([50])
</script>

<template>
  <Slider
    v-model="volume"
    label="Volume"
    :max="100"
  />
</template>
