<script setup lang="ts">
import { Avatar } from 'qh-ui'
import { ref } from 'vue'
import BasicUsageLayout from '../components/BasicUsageLayout.vue'

const value = ref('')
</script>

<template>
  <div class="text-2xl font-bold">
    Qh UI Avatar Demo
  </div>

  <BasicUsageLayout>
    <Avatar size="lg" />
  </BasicUsageLayout>
</template>
