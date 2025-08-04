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

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link'` | `'primary'` | 按钮样式变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮大小 |
| `disabled` | `boolean` | `false` | 是否禁用按钮 |
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `extraClass` | `string` | `''` | 额外的 CSS 类名 |

### Variant 样式对照

| Variant | 样式描述 | CSS 类 |
| --- | --- | --- |
| `primary` | 主要按钮，蓝色背景白色文字 | `bg-primary text-white` |
| `secondary` | 次要按钮，灰色背景 | `bg-secondary` |
| `outline` | 边框按钮，透明背景蓝色边框 | `bg-transparent border border-primary text-primary` |
| `ghost` | 幽灵按钮，透明背景悬停变色 | `bg-transparent text-primary hover:bg-secondary` |
| `link` | 链接样式，透明背景悬停下划线 | `bg-transparent text-primary hover:underline` |

### Size 尺寸对照

| Size | 高度 | 内边距 | 字体大小 |
| --- | --- | --- | --- |
| `sm` | 32px | `p-1` | `text-sm` |
| `md` | 40px | `px-2 py-1` | `text-base` |
| `lg` | 48px | `px-4 py-2` | `text-lg` |

### Events

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `click` | `() => void` | 按钮点击时触发（禁用或加载状态下不触发） |

### Slots

| 插槽名 | 描述 |
| --- | --- |
| `default` | 按钮的主要内容 |
| `prefix` | 按钮内容前的插槽 |
| `suffix` | 按钮内容后的插槽 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-button` | 按钮根容器 |
| `.qh-button-loading` | 加载图标样式 |

### 使用示例

```vue
<template>
  <!-- 基础用法 -->
  <Button>Click me</Button>

  <!-- 不同变体 -->
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

  <!-- 不同尺寸 -->
  <Button size="sm">
    Small
  </Button>
  <Button size="md">
    Medium
  </Button>
  <Button size="lg">
    Large
  </Button>

  <!-- 状态 -->
  <Button disabled>
    Disabled
  </Button>
  <Button loading>
    Loading
  </Button>

  <!-- 带插槽 -->
  <Button>
    <template #prefix>
      <Icon icon="mdi:plus" />
    </template>
    Add Item
  </Button>
</template>
```
