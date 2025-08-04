# PinInput
A PIN input component for entering verification codes or passwords.

<script setup>
import { PinInput } from 'qh-ui'
import { ref } from 'vue'

const pinValue = ref(['', '', '', '', '', ''])
</script>

<ComponentPreview name="PinInputDemo">
  <PinInput v-model="pinValue" :length="6" placeholder="0" />
</ComponentPreview>

## API Reference

### Props

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `v-model` | `string[] \| number[]` | `required` | PIN 输入的值数组 |
| `length` | `number` | `6` | PIN 输入框的数量 |
| `type` | `'text' \| 'number'` | `'text'` | 输入类型 |
| `placeholder` | `string` | `undefined` | 占位符 |
| `mask` | `boolean` | `false` | 是否遮盖输入内容（密码模式） |
| `otp` | `boolean` | `false` | 是否为一次性密码模式 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | 样式变体 |
| `rootClass` | `string` | `undefined` | 根容器额外类名 |
| `labelClass` | `string` | `undefined` | 标签额外类名 |
| `containerClass` | `string` | `undefined` | 容器额外类名 |
| `inputClass` | `string` | `undefined` | 输入框额外类名 |

### Events

PinInput 组件继承自 `reka-ui` 的 `PinInputRoot` 组件，支持以下事件：

| 事件名 | 类型 | 描述 |
| --- | --- | --- |
| `update:modelValue` | `(value: string[] \| number[]) => void` | PIN 值变化时触发 |
| `complete` | `(value: string[] \| number[]) => void` | PIN 输入完成时触发 |

### CSS 类名

组件提供以下 CSS 类名用于自定义样式：

| 类名 | 描述 |
| --- | --- |
| `.qh-pin-input-root` | PIN 输入根容器 |
| `.qh-pin-input-input` | 单个输入框 |

### 使用示例

```vue
<script setup>
import { PinInput } from 'qh-ui'
import { ref } from 'vue'

const verificationCode = ref(['', '', '', '', '', ''])
const password = ref(['', '', '', ''])
const numberPin = ref([0, 0, 0, 0])
</script>

<template>
  <!-- 基础用法 -->
  <PinInput v-model="verificationCode" :length="6" />

  <!-- 验证码输入 -->
  <PinInput
    v-model="verificationCode"
    :length="6"
    placeholder="0"
    otp
  />

  <!-- 密码模式 -->
  <PinInput
    v-model="password"
    :length="4"
    mask
    placeholder="•"
  />

  <!-- 数字类型 -->
  <PinInput
    v-model="numberPin"
    :length="4"
    type="number"
    placeholder="0"
  />

  <!-- 不同变体 -->
  <PinInput
    v-model="verificationCode"
    variant="primary"
    :length="6"
  />
  <PinInput
    v-model="verificationCode"
    variant="secondary"
    :length="6"
  />

  <!-- 禁用状态 -->
  <PinInput
    v-model="verificationCode"
    :length="6"
    disabled
  />

  <!-- 自定义样式 -->
  <PinInput
    v-model="verificationCode"
    :length="6"
    root-class="gap-4"
    input-class="border-2 border-blue-500 rounded-lg"
  />
</template>
```

### 使用场景

- **验证码输入**: 短信验证码、邮箱验证码
- **密码输入**: PIN 码、安全密码
- **身份验证**: 二次验证、安全确认
- **游戏**: 房间号输入、邀请码输入
