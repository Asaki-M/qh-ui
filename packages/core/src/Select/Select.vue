<script lang="ts">
import type { SelectRootProps } from 'reka-ui'

export interface SelectItemOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface SelectOption {
  label?: string
  children: SelectItemOption[]
}

export interface SelectProps extends SelectRootProps {
  label?: string
  labelOrientation?: 'horizontal' | 'vertical'
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  options?: SelectOption[]
  rootClass?: string
  labelClass?: string
  triggerClass?: string
  contentClass?: string
  itemClass?: string
}
</script>

<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { computed } from 'vue'
import { Icon } from '@/Icon'

const props = withDefaults(defineProps<SelectProps>(), {
  labelOrientation: 'vertical',
  size: 'md',
  variant: 'primary',
  disabled: false,
  placeholder: 'Select...',
})

const componentsId = Math.random().toString(36).substring(2, 15)

const model = defineModel<string | number>({
  required: true,
})

const openModel = defineModel<boolean>('open', {
  required: false,
  default: false,
})

const selectExtendsProps = computed(() => {
  const {
    label,
    labelOrientation,
    placeholder,
    size,
    variant,
    disabled,
    options,
    rootClass,
    labelClass,
    triggerClass,
    contentClass,
    itemClass,
    modelValue,
    open,
    ...restProps
  } = props
  return restProps
})

const variantClass = computed(() => {
  const variantClassMap = {
    primary: 'border border-primary bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-primary/20',
    secondary: 'bg-secondary border border-secondary focus:ring-2 focus:ring-secondary/20',
  }
  return variantClassMap[props.variant]
})

const labelOrientationClass = computed(() => {
  return props.labelOrientation === 'horizontal'
    ? 'flex flex-row gap-2 items-center'
    : 'flex flex-col gap-2  mb-1'
})

const sizeClass = computed(() => {
  const sizeClassMap = {
    sm: 'h-8 px-2 text-sm',
    md: 'h-10 px-3',
    lg: 'h-12 px-4 text-lg',
  }
  return sizeClassMap[props.size]
})
</script>

<template>
  <div
    class="qh-select-container"
    :class="[rootClass, labelOrientationClass]"
  >
    <label
      v-if="label"
      :for="componentsId"
      class="qh-select-label text-stone-700 dark:text-white block"
      :class="labelClass"
    >
      {{ label }}
    </label>

    <SelectRoot
      :id="componentsId"
      v-model="model"
      v-model:open="openModel"
      :disabled="disabled"
      v-bind="selectExtendsProps"
    >
      <SelectTrigger
        class="qh-select-trigger inline-flex w-full items-center justify-between rounded transition-all focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-zinc-500"
        :class="[variantClass, sizeClass, triggerClass]"
      >
        <SelectValue
          :placeholder="placeholder"
          class="text-left truncate data-[placeholder]:text-stone-400 dark:data-[placeholder]:text-zinc-500"
        />
        <Icon
          icon="line-md:chevron-down"
          class="h-4 w-4 opacity-50 shrink-0"
        />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="qh-select-content relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded border border-primary bg-white dark:bg-zinc-900 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          :class="contentClass"
          :side-offset="4"
        >
          <SelectViewport class="p-1">
            <!-- 使用 label 和 children 格式的分组数据 -->
            <template v-if="options && options.length > 0">
              <template
                v-for="(group, groupIndex) in options"
                :key="`group-${groupIndex}`"
              >
                <SelectGroup>
                  <!-- 分组标签 -->
                  <SelectLabel
                    v-if="group.label"
                    class="px-2 py-1.5 text-sm font-semibold text-stone-700 dark:text-zinc-300"
                  >
                    {{ group.label }}
                  </SelectLabel>

                  <SelectItem
                    v-for="option in group.children"
                    :key="`${groupIndex}-${option.value}`"
                    :value="String(option.value)"
                    :disabled="option.disabled"
                    class="qh-select-item relative flex w-full cursor-pointer select-none items-center rounded px-2 py-1.5 text-sm outline-none dark:text-zinc-300 focus:bg-stone-100 dark:focus:bg-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    :class="itemClass"
                  >
                    <SelectItemIndicator class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <Icon
                        icon="line-md:confirm"
                        class="h-3 w-3"
                      />
                    </SelectItemIndicator>
                    <SelectItemText class="pl-6">
                      {{ option.label }}
                    </SelectItemText>
                  </SelectItem>
                </SelectGroup>

                <!-- 分组之间的分隔符 -->
                <SelectSeparator
                  v-if="groupIndex < options.length - 1"
                  class="mx-1 my-1 h-px bg-stone-200 dark:bg-zinc-700"
                />
              </template>
            </template>

            <!-- 插槽支持自定义内容 -->
            <slot />
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
