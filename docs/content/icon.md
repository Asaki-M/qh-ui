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

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `icon` | `string` | `required` | Iconify 图标名称 |
| `width` | `string \| number` | `'1em'` | 图标宽度 |
| `height` | `string \| number` | `'1em'` | 图标高度 |
| `color` | `string` | `'currentColor'` | 图标颜色 |
| `customIcon` | `string` | `undefined` | 自定义图标组件名（暂未实现） |
| `extraClass` | `string` | `undefined` | 额外的 CSS 类名 |

### 常用图标示例

| 图标 | 名称 | 用途 |
| --- | --- | --- |
| <Icon icon="mdi:home" /> | `mdi:home` | 首页 |
| <Icon icon="mdi:account" /> | `mdi:account` | 用户 |
| <Icon icon="mdi:settings" /> | `mdi:settings` | 设置 |
| <Icon icon="mdi:heart" /> | `mdi:heart` | 喜欢 |
| <Icon icon="mdi:star" /> | `mdi:star` | 收藏 |
| <Icon icon="mdi:plus" /> | `mdi:plus` | 添加 |
| <Icon icon="mdi:close" /> | `mdi:close` | 关闭 |
| <Icon icon="mdi:check" /> | `mdi:check` | 确认 |

### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <Icon icon="mdi:heart" />

  <!-- 自定义大小 -->
  <Icon icon="mdi:star" width="24" height="24" />
  <Icon icon="mdi:home" width="2em" height="2em" />

  <!-- 自定义颜色 -->
  <Icon icon="mdi:heart" color="red" />
  <Icon icon="mdi:star" color="#ffd700" />

  <!-- 响应当前文字颜色 -->
  <span class="text-blue-500">
    <Icon icon="mdi:info" /> Information
  </span>

  <!-- 在按钮中使用 -->
  <Button>
    <template #prefix>
      <Icon icon="mdi:plus" />
    </template>
    Add Item
  </Button>

  <!-- 不同尺寸示例 -->
  <div class="flex items-center gap-2">
    <Icon icon="mdi:heart" width="16" height="16" />
    <Icon icon="mdi:heart" width="20" height="20" />
    <Icon icon="mdi:heart" width="24" height="24" />
    <Icon icon="mdi:heart" width="32" height="32" />
  </div>

  <!-- 自定义类名 -->
  <Icon
    icon="mdi:star"
    extra-class="hover:text-yellow-500 transition-colors cursor-pointer"
  />

  <!-- 加载动画图标 -->
  <Icon icon="line-md:loading-twotone-loop" width="24" height="24" />
</template>
```

### 图标库

本组件基于 [Iconify](https://iconify.design/) 构建，支持超过 100,000 个图标。

常用图标集：
- **Material Design Icons**: `mdi:*` (如 `mdi:home`, `mdi:account`)
- **Lucide**: `lucide:*` (如 `lucide:home`, `lucide:user`)
- **Heroicons**: `heroicons:*` (如 `heroicons:home`, `heroicons:user`)
- **Tabler Icons**: `tabler:*` (如 `tabler:home`, `tabler:user`)

你可以在 [Iconify 官网](https://icon-sets.iconify.design/) 搜索和浏览所有可用的图标。
