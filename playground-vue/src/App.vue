<script setup lang="ts">
import { Avatar } from 'qh-ui'
import 'qh-ui/index.css'
</script>

<template>
  <div class="space-y-4 p-8">
    <h1 class="text-2xl font-bold">
      Avatar Examples
    </h1>

    <div class="space-y-2">
      <h2 class="text-lg font-semibold">
        Different Sizes
      </h2>
      <div class="flex items-center space-x-2">
        <Avatar size="xs" />
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xl" />
        <Avatar size="2xl" />
        <Avatar size="3xl" />
      </div>
    </div>

    <div class="space-y-2">
      <h2 class="text-lg font-semibold">
        With Image
      </h2>
      <Avatar
        size="xl"
        src="https://vitepress.dev/vitepress-logo-mini.svg"
        fallback="VP"
      />
    </div>

    <div class="space-y-2">
      <h2 class="text-lg font-semibold">
        With Fallback Text
      </h2>
      <div class="flex items-center space-x-2">
        <Avatar
          size="md"
          fallback="A"
          radius="full"
        />
        <Avatar
          size="lg"
          fallback="Test"
          radius="md"
        />
        <Avatar
          size="xl"
          fallback="UI"
          radius="lg"
        />
      </div>
    </div>
  </div>
</template>
