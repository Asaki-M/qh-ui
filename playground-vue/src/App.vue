<script setup lang="ts">
import { reactive, ref } from 'vue'
// import { Avatar } from 'qh-ui'
import 'qh-ui/index.css'

const loading = ref(false)
const checked = ref(false)
// watch(checked, (newVal) => {
//   console.log(newVal)
// })

const radioValue = ref('default')
const radioOptions = ref([
  {
    label: '同意条款',
    value: 'default',
  },
  {
    label: '不同意条款',
    value: 'disagree',
  },
])
const radioValue2 = ref('disagree2')
const radioOptions2 = ref([
  {
    label: '同意条款',
    value: 'default2',
  },
  {
    label: '不同意条款',
    value: 'disagree2',
    disabled: true,
  },
])
// watch(radioValue, (newVal) => {
//   console.log(newVal, 'radioValue')
// })

function handleClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}

function handleToggleTheme() {
  document.documentElement.classList.toggle('dark')
}

const numberValue = ref(0)
const inputValue = reactive({
  text: '',
  password: '',
  email: '',
  tel: '',
  url: '',
  search: '',
})
const passwordVisible = ref(false)

const pinInputValue = ref([])
const pinInputNumberValue = ref<number[]>([])
// watch(pinInputNumberValue, (newVal) => {
//   console.log(newVal, 'pinInputNumberValue')
// })
// watch(pinInputValue, (newVal) => {
//   console.log(newVal, 'pinInputValue')
// })

const sliderValue = ref([30])

const switchValue = ref(false)
const switchValue2 = ref(true)
const switchValue3 = ref(false)
const switchValue4 = ref(true)
const switchValue5 = ref(false)
const switchValue6 = ref(true)
const switchValue7 = ref(false)
const switchValue8 = ref(true)
const switchValue9 = ref(false)
const switchValue10 = ref(true)
const switchValue11 = ref(false)
const switchValue12 = ref(true)
const switchValue13 = ref(false)
</script>

<template>
  <div class="w-full h-full bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors">
    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHSwitch Examples
      </h1>
      <!-- 基础示例 -->
      <QHSwitch
        v-model="switchValue"
        label="基础开关"
      />

      <!-- 不同尺寸 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          不同尺寸
        </h3>
        <div class="flex items-center gap-4">
          <QHSwitch
            v-model="switchValue2"
            label="小尺寸"
            size="sm"
          />
          <QHSwitch
            v-model="switchValue3"
            label="中等尺寸"
            size="md"
          />
          <QHSwitch
            v-model="switchValue4"
            label="大尺寸"
            size="lg"
          />
        </div>
      </div>

      <!-- 不同变体 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          不同变体
        </h3>
        <div class="flex items-center gap-4">
          <QHSwitch
            v-model="switchValue5"
            label="主要样式"
            variant="primary"
          />
          <QHSwitch
            v-model="switchValue6"
            label="次要样式"
            variant="secondary"
          />
        </div>
      </div>

      <!-- 标签位置 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          标签位置
        </h3>
        <div class="flex items-center gap-4">
          <QHSwitch
            v-model="switchValue7"
            label="标签在右侧"
            label-position="right"
          />
          <QHSwitch
            v-model="switchValue8"
            label="标签在左侧"
            label-position="left"
          />
        </div>
      </div>

      <!-- 禁用状态 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          禁用状态
        </h3>
        <div class="flex items-center gap-4">
          <QHSwitch
            v-model="switchValue9"
            label="禁用（关闭）"
            :disabled="true"
          />
          <QHSwitch
            v-model="switchValue10"
            label="禁用（开启）"
            :disabled="true"
          />
        </div>
      </div>

      <!-- 无标签 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          无标签开关
        </h3>
        <div class="flex items-center gap-4">
          <QHSwitch v-model="switchValue11" />
          <QHSwitch
            v-model="switchValue12"
            size="lg"
          />
        </div>
      </div>

      <!-- 自定义样式 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          自定义样式
        </h3>
        <QHSwitch
          v-model="switchValue13"
          label="自定义样式开关"
          label-classes="text-blue-600 font-medium"
          switch-classes="border-blue-300"
          thumb-classes="bg-blue-100"
        />
      </div>
    </div>
    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHSlider Examples
      </h1>
      <QHSlider
        v-model="sliderValue"
        orientation="vertical"
        label="Slider"
        :length="8"
      />
      <QHSlider
        v-model="sliderValue"
        label="Slider"
        container-classes="w-[200px]"
        label-orientation="horizontal"
        size="sm"
      />
      <QHSlider
        v-model="sliderValue"
        :step="8"
        size="lg"
      />
    </div>
    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHPinInput Examples
      </h1>
      <QHPinInput
        v-model="pinInputValue"
        :length="8"
      />
      <QHPinInput
        v-model="pinInputNumberValue"
        type="number"
        :length="4"
        placeholder="o"
        variant="secondary"
      />
    </div>
    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHInput Examples
      </h1>
      <QHInput
        v-model="inputValue.text"
        label="Text"
        size="sm"
        variant="secondary"
      />
      <QHInput
        v-model="inputValue.password"
        label="Password"
        :type="passwordVisible ? 'text' : 'password'"
      >
        <template #suffix>
          <QHIcon
            :icon="passwordVisible ? 'line-md:watch' : 'line-md:watch-off'"
            class="cursor-pointer"
            @click="passwordVisible = !passwordVisible"
          />
        </template>
      </QHInput>
      <QHInput
        v-model="inputValue.email"
        type="email"
        label="Email"
        size="lg"
        variant="secondary"
      />
      <QHInput
        v-model="inputValue.tel"
        type="tel"
        label="Tel"
      />
      <QHInput
        v-model="inputValue.url"
        type="url"
        label="Url"
      />
      <QHInput
        v-model="inputValue.search"
        size="md"
        label="Search"
      >
        <template #prefix>
          <span class="text-zinc-500 pl-2">$</span>
        </template>
      </QHInput>
    </div>

    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHNumberField Examples
      </h1>
      <QHNumberField
        v-model="numberValue"
        label="Age"
      />
      <QHNumberField
        v-model="numberValue"
        variant="secondary"
      />
    </div>

    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHRadioGroup Examples
      </h1>
      <div class="space-x-4 flex items-center">
        <QHRadioGroup
          v-model="radioValue"
          :options="radioOptions"
        />
        <QHRadioGroup
          v-model="radioValue2"
          disabled
          orientation="horizontal"
          :options="radioOptions2"
        />
        <QHRadioGroup
          v-model="radioValue2"
          :options="radioOptions2"
        />
      </div>
    </div>

    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHCheckbox Examples
      </h1>
      <div class="space-x-4 flex items-center">
        <QHCheckbox label="同意条款" />
        <QHCheckbox
          label="同意条款"
        />
        <QHCheckbox
          label="同意条款"
          disabled
        />
        <QHCheckbox
          label="同意条款"
          size="sm"
        />
        <QHCheckbox
          v-model="checked"
          label="同意条款"
          size="lg"
        />
      </div>
    </div>
    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHButton Examples
      </h1>
      <div class="space-x-4 flex items-center">
        <QHButton @click="handleToggleTheme">
          🌙 切换暗黑模式
        </QHButton>
        <QHButton variant="secondary">
          Click me
        </QHButton>
        <QHButton variant="outline">
          Click me
        </QHButton>
        <QHButton variant="ghost">
          Click me
        </QHButton>
        <QHButton variant="link">
          Click me
        </QHButton>
      </div>
      <div class="space-x-4 flex items-center">
        <QHButton size="sm">
          Click me
        </QHButton>
        <QHButton
          size="md"
          :loading="loading"
          @click="handleClick"
        >
          Click me
        </QHButton>
        <QHButton
          size="lg"
          disabled
        >
          Click me
        </QHButton>
      </div>
    </div>
    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHAvatar Examples
      </h1>

      <div class="space-y-2">
        <h2 class="text-lg font-semibold">
          Different Sizes
        </h2>
        <div class="flex items-center space-x-2">
          <QHAvatar size="xs" />
          <QHAvatar size="sm" />
          <QHAvatar size="md" />
          <QHAvatar size="lg" />
          <QHAvatar size="xl" />
          <QHAvatar size="2xl" />
          <QHAvatar size="3xl" />
        </div>
      </div>

      <div class="space-y-2">
        <h2 class="text-lg font-semibold">
          With Image
        </h2>
        <QHAvatar
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
          <QHAvatar
            size="md"
            fallback="A"
            radius="full"
          />
          <QHAvatar
            size="lg"
            fallback="Test"
            radius="md"
          />
          <QHAvatar
            size="xl"
            fallback="UI"
            radius="lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
