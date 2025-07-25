<script lang="ts">
import type { ComboboxRootProps } from 'reka-ui'

export interface ComboBoxProps extends ComboboxRootProps {
  label?: string
  labelOrientation?: 'horizontal' | 'vertical'
  options: ComboBoxOption[]
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'

  // 额外class
  rootClass?: string
  labelClass?: string
  comboboxClass?: string
  anchorClass?: string
  inputClass?: string
  triggerClass?: string
  contentClass?: string
  contentEmptyClass?: string
  itemClass?: string
}

export interface ComboBoxOption {
  label?: string
  children: {
    label: string
    value: string
    disabled?: boolean
  }[]
}
</script>

<script setup lang="ts">
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxSeparator, ComboboxTrigger, ComboboxViewport } from 'reka-ui'
import { computed, watch } from 'vue'
import { Icon } from '@/Icon'

const props = withDefaults(defineProps<ComboBoxProps>(), {
  labelOrientation: 'vertical',
  variant: 'primary',
  size: 'md',
})

const componentsId = Math.random().toString(36).substring(2, 15)

const labelOrientationClass = computed(() => {
  return props.labelOrientation === 'horizontal'
    ? 'flex flex-row gap-2 items-center'
    : 'flex flex-col gap-2  mb-1'
})

const variantClass = computed(() => {
  const variantClassMap = {
    primary: 'border border-primary bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-primary/20',
    secondary: 'bg-secondary border border-secondary focus:ring-2 focus:ring-secondary/20',
  }
  return variantClassMap[props.variant]
})

const sizeClass = computed(() => {
  const sizeClassMap = {
    sm: 'h-8 px-2 text-sm',
    md: 'h-10 px-3',
    lg: 'h-12 px-4 text-lg',
  }
  return sizeClassMap[props.size]
})

const restProps = computed(() => {
  const { modelValue, open, label, labelOrientation, options, size, variant, rootClass, labelClass, comboboxClass, anchorClass, inputClass, triggerClass, contentClass, contentEmptyClass, itemClass, ...rest } = props
  return rest
})

const model = defineModel<string>({
  required: false,
  default: '',
})

const openModel = defineModel<boolean>('open', {
  required: false,
  default: false,
})

const searchTerm = defineModel<string>('searchTerm', {
  required: false,
  default: '',
})

function displayValue(value: string) {
  if (!value)
    return ''

  for (const group of props.options) {
    const foundOption = group.children.find(option => option.value === value)
    if (foundOption) {
      return foundOption.label
    }
  }
  return value.toString()
}
// 计算显示的标签文本
watch(() => model.value, (newValue) => {
  if (!newValue)
    return ''

  searchTerm.value = displayValue(newValue.toString())
})

function handleBlur() {
  if (model.value) {
    searchTerm.value = displayValue(model.value)
  }
}
</script>

<template>
  <div
    class="qh-combobox-container"
    :class="[labelOrientationClass, rootClass]"
  >
    <label
      :for="componentsId"
      class="qh-combobox-label block text-sm font-medium text-stone-700 dark:text-zinc-300"
      :class="labelClass"
    >
      {{ label }}
    </label>

    <ComboboxRoot
      v-bind="restProps"
      :id="componentsId"
      v-model="model"
      v-model:open="openModel"
      class="qh-combobox-root relative"
      :class="comboboxClass"
    >
      <ComboboxAnchor
        class="qh-combobox-anchor min-w-[160px] inline-flex items-center justify-between rounded border px-3 text-sm leading-none h-10 gap-2 text-stone-900 dark:text-white shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-primary/20 outline-none transition-all"
        :class="[variantClass, sizeClass, anchorClass]"
      >
        <ComboboxInput
          v-model="searchTerm"
          class="qh-combobox-input !bg-transparent outline-none text-stone-900 dark:text-white h-full w-full selection:bg-primary/20 placeholder:text-stone-400 dark:placeholder:text-zinc-500"
          placeholder="Search..."
          :class="inputClass"
          @blur="handleBlur"
        />
        <ComboboxTrigger
          class="qh-combobox-trigger"
          :class="triggerClass"
        >
          <Icon
            icon="line-md:chevron-down"
            class="h-4 w-4 opacity-50"
          />
        </ComboboxTrigger>
      </ComboboxAnchor>

      <ComboboxContent
        class="qh-combobox-content absolute z-50 w-full mt-1 min-w-[160px] max-h-96 bg-white dark:bg-zinc-900 overflow-hidden rounded border border-primary shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        :class="contentClass"
      >
        <ComboboxViewport class="p-1">
          <ComboboxEmpty
            :class="contentEmptyClass"
            class="qh-combobox-content-empty px-2 py-6 text-center text-sm text-stone-500 dark:text-zinc-400"
          />
          <template
            v-for="(group, index) in options"
            :key="group.name"
          >
            <ComboboxGroup>
              <ComboboxSeparator
                v-if="index !== 0"
                class="mx-1 my-1 h-px bg-stone-200 dark:bg-zinc-700"
              />

              <ComboboxLabel class="qh-combobox-content-label px-2 py-1.5 text-sm font-semibold text-stone-700 dark:text-zinc-300">
                {{ group.label }}
              </ComboboxLabel>

              <ComboboxItem
                v-for="option in group.children"
                :key="option.label"
                :value="option.value"
                :disabled="option.disabled"
                class="qh-combobox-content-item relative flex w-full cursor-pointer select-none items-center rounded px-2 py-1.5 text-sm outline-none text-stone-900 dark:text-zinc-300 focus:bg-stone-100 dark:focus:bg-zinc-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-stone-100 dark:data-[highlighted]:bg-zinc-800"
                :class="itemClass"
              >
                <ComboboxItemIndicator
                  class="qh-combobox-content-item-indicator absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
                >
                  <Icon
                    icon="line-md:confirm"
                    class="h-3 w-3"
                  />
                </ComboboxItemIndicator>
                <span class="qh-combobox-content-item-label pl-6">
                  {{ option.label }}
                </span>
              </ComboboxItem>
            </ComboboxGroup>
          </template>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxRoot>
  </div>
</template>
