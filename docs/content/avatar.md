# Avatar
An image element with a fallback for representing the user.

<script setup>
import { Avatar } from 'qh-ui'
</script>

<ComponentPreview name="AvatarDemo">
  <div class="flex gap-2">
    <Avatar
      size="2xl"
      fallback="QH"
    />
    <Avatar
      size="2xl"
      radius="full"
    />
  </div>
</ComponentPreview>

## API Reference

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'3xs' \| '2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'md'` | Avatar size |
| `src` | `string` | `undefined` | Image source URL |
| `alt` | `string` | `undefined` | Image alt text |
| `fallback` | `string` | `undefined` | Fallback text when image fails to load |
| `radius` | `'full' \| 'lg' \| 'md' \| 'sm'` | `'md'` | Border radius size |

### Size Reference

| Size | Dimensions | Tailwind Class |
| --- | --- | --- |
| `3xs` | 16px | `w-4 h-4` |
| `2xs` | 20px | `w-5 h-5` |
| `xs` | 24px | `w-6 h-6` |
| `sm` | 28px | `w-7 h-7` |
| `md` | 32px | `w-8 h-8` |
| `lg` | 36px | `w-9 h-9` |
| `xl` | 40px | `w-10 h-10` |
| `2xl` | 44px | `w-11 h-11` |
| `3xl` | 48px | `w-12 h-12` |

### Events

The Avatar component inherits from `reka-ui`'s `AvatarImage` component and supports the following events:

| Event Name | Type | Description |
| --- | --- | --- |
| `loadingStatusChange` | `(status: 'idle' \| 'loading' \| 'loaded' \| 'error') => void` | Triggered when image loading status changes |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-avatar-root` | Avatar root container |
| `.qh-avatar-image` | Avatar image element |
| `.qh-avatar-fallback` | Avatar fallback container |

### Usage Examples

```vue
<template>
  <!-- Basic usage -->
  <Avatar fallback="QH" />

  <!-- With image -->
  <Avatar
    src="https://example.com/avatar.jpg"
    alt="User avatar"
    fallback="QH"
  />

  <!-- Different sizes -->
  <Avatar size="sm" fallback="S" />
  <Avatar size="lg" fallback="L" />
  <Avatar size="2xl" fallback="XL" />

  <!-- Different radius -->
  <Avatar radius="full" fallback="QH" />
  <Avatar radius="sm" fallback="QH" />
</template>
```
