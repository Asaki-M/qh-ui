# Icon
An icon component based on Iconify with thousands of available icons.

<script setup>
import { Icon } from 'qh-ui'
</script>

<ComponentPreview name="IconDemo">
  <Icon icon="mdi:heart" />
</ComponentPreview>

## API Reference

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `string` | `required` | Iconify icon name |
| `width` | `string \| number` | `'1em'` | Icon width |
| `height` | `string \| number` | `'1em'` | Icon height |
| `color` | `string` | `'currentColor'` | Icon color |
| `customIcon` | `string` | `undefined` | Custom icon component name (not implemented yet) |
| `extraClass` | `string` | `undefined` | Additional CSS class names |

### Common Icon Examples

| Icon | Name | Usage |
| --- | --- | --- |
| <Icon icon="mdi:home" /> | `mdi:home` | Home |
| <Icon icon="mdi:account" /> | `mdi:account` | User |
| <Icon icon="mdi:settings" /> | `mdi:settings` | Settings |
| <Icon icon="mdi:heart" /> | `mdi:heart` | Like |
| <Icon icon="mdi:star" /> | `mdi:star` | Favorite |
| <Icon icon="mdi:plus" /> | `mdi:plus` | Add |
| <Icon icon="mdi:close" /> | `mdi:close` | Close |
| <Icon icon="mdi:check" /> | `mdi:check` | Confirm |

### Usage Examples

```vue
<template>
  <!-- Basic usage -->
  <Icon icon="mdi:heart" />

  <!-- Custom size -->
  <Icon icon="mdi:star" width="24" height="24" />
  <Icon icon="mdi:home" width="2em" height="2em" />

  <!-- Custom color -->
  <Icon icon="mdi:heart" color="red" />
  <Icon icon="mdi:star" color="#ffd700" />

  <!-- Inherit current text color -->
  <span class="text-blue-500">
    <Icon icon="mdi:info" /> Information
  </span>

  <!-- Use in button -->
  <Button>
    <template #prefix>
      <Icon icon="mdi:plus" />
    </template>
    Add Item
  </Button>

  <!-- Different size examples -->
  <div class="flex items-center gap-2">
    <Icon icon="mdi:heart" width="16" height="16" />
    <Icon icon="mdi:heart" width="20" height="20" />
    <Icon icon="mdi:heart" width="24" height="24" />
    <Icon icon="mdi:heart" width="32" height="32" />
  </div>

  <!-- Custom class names -->
  <Icon
    icon="mdi:star"
    extra-class="hover:text-yellow-500 transition-colors cursor-pointer"
  />

  <!-- Loading animation icon -->
  <Icon icon="line-md:loading-twotone-loop" width="24" height="24" />
</template>
```

### Icon Library

This component is built on [Iconify](https://iconify.design/) and supports over 100,000 icons.

Popular icon sets:
- **Material Design Icons**: `mdi:*` (e.g., `mdi:home`, `mdi:account`)
- **Lucide**: `lucide:*` (e.g., `lucide:home`, `lucide:user`)
- **Heroicons**: `heroicons:*` (e.g., `heroicons:home`, `heroicons:user`)
- **Tabler Icons**: `tabler:*` (e.g., `tabler:home`, `tabler:user`)

You can search and browse all available icons on the [Iconify website](https://icon-sets.iconify.design/).
