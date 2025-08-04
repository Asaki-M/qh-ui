# Button
A clickable button component with various styles and states.

<script setup>
import { Button } from 'qh-ui'
</script>

<ComponentPreview name="ButtonDemo">
  <div class="flex gap-2 flex-wrap">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
</ComponentPreview>

## API Reference

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether to show loading state |
| `extraClass` | `string` | `''` | Additional CSS class names |

### Variant Reference

| Variant | Style Description | CSS Classes |
| --- | --- | --- |
| `primary` | Primary button with primary background and white text | `bg-primary text-white` |
| `secondary` | Secondary button with secondary background | `bg-secondary` |
| `outline` | Outline button with transparent background and primary border | `bg-transparent border border-primary text-primary` |
| `ghost` | Ghost button with transparent background and hover effect | `bg-transparent text-primary hover:bg-secondary` |
| `link` | Link-style button with transparent background and underline on hover | `bg-transparent text-primary hover:underline` |

### Size Reference

| Size | Height | Padding | Font Size |
| --- | --- | --- | --- |
| `sm` | 32px | `p-1` | `text-sm` |
| `md` | 40px | `px-2 py-1` | `text-base` |
| `lg` | 48px | `px-4 py-2` | `text-lg` |

### Events

| Event Name | Type | Description |
| --- | --- | --- |
| `click` | `() => void` | Triggered when button is clicked (not triggered when disabled or loading) |

### Slots

| Slot Name | Description |
| --- | --- |
| `default` | Main content of the button |
| `prefix` | Slot before button content |
| `suffix` | Slot after button content |

### CSS Classes

The component provides the following CSS classes for custom styling:

| Class Name | Description |
| --- | --- |
| `.qh-button` | Button root container |
| `.qh-button-loading` | Loading icon styles |

### Usage Examples

```vue
<template>
  <!-- Basic usage -->
  <Button>Click me</Button>

  <!-- Different variants -->
  <Button variant="primary">
    Primary
  </Button>
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

  <!-- Different sizes -->
  <Button size="sm">
    Small
  </Button>
  <Button size="md">
    Medium
  </Button>
  <Button size="lg">
    Large
  </Button>

  <!-- States -->
  <Button disabled>
    Disabled
  </Button>
  <Button loading>
    Loading
  </Button>

  <!-- With slots -->
  <Button>
    <template #prefix>
      <Icon icon="mdi:plus" />
    </template>
    Add Item
  </Button>
</template>
```
