<script setup lang="ts">
import { Button } from 'qh-ui'
</script>

<template>
  <div class="flex gap-2 flex-wrap">
    <Button>Primary</Button>
    <Button variant="secondary">
      Secondary
    </Button>
    <Button variant="outline">
      Outline
    </Button>
    <Button variant="ghost">
      Ghost
    </Button>
    <Button variant="link">
      Link
    </Button>
  </div>
</template>
