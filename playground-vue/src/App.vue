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

const selectValue = ref(['apple'])
// watch(selectValue, (newVal) => {
//   console.log(newVal, 'selectValue')
// })
const selectValue2 = ref('')
const selectValue3 = ref('strawberry')
const selectValue4 = ref('')
const selectValue5 = ref('banana')
const selectValue6 = ref('')

// 使用 label 和 children 格式的分组数据
const fruits = [
  {
    label: '水果',
    children: [
      { value: 'apple', label: '苹果' },
      { value: 'banana', label: '香蕉' },
      { value: 'orange', label: '橙子' },
      { value: 'grape', label: '葡萄', disabled: true },
    ],
  },
  {
    label: '蔬菜',
    children: [
      { value: 'carrot', label: '胡萝卜' },
      { value: 'broccoli', label: '西兰花' },
      { value: 'potato', label: '土豆', disabled: true },
    ],
  },
]

// 单层数据（无分组标签）
const simpleFruits = [
  {
    children: [
      { value: 'apple', label: '苹果' },
      { value: 'banana', label: '香蕉' },
      { value: 'orange', label: '橙子' },
      { value: 'pineapple', label: '菠萝' },
    ],
  },
]

// 热带水果分组
const tropicalFruits = [
  {
    label: '热带水果',
    children: [
      { value: 'mango', label: '芒果' },
      { value: 'pineapple', label: '菠萝' },
      { value: 'coconut', label: '椰子' },
      { value: 'papaya', label: '木瓜', disabled: true },
    ],
  },
  {
    label: '温带水果',
    children: [
      { value: 'apple', label: '苹果' },
      { value: 'pear', label: '梨' },
      { value: 'peach', label: '桃子' },
      { value: 'cherry', label: '樱桃' },
    ],
  },
]

// 浆果类
const berries = [
  {
    label: '浆果',
    children: [
      { value: 'strawberry', label: '草莓' },
      { value: 'blueberry', label: '蓝莓' },
      { value: 'raspberry', label: '覆盆子' },
      { value: 'blackberry', label: '黑莓' },
    ],
  },
]

const openSelect = ref(false)
// watch(openSelect, (newVal) => {
//   console.log(newVal, 'openSelect')
// })
</script>

<template>
  <div class="w-full h-full bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors">
    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHComboBox Examples
      </h1>
      <!-- 基础示例 -->
      <QHComboBox
        :options="tropicalFruits"
        label="基础搜索框"
      />

      <!-- 不同尺寸 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          不同尺寸
        </h3>
        <div class="flex items-start gap-4">
          <QHComboBox
            :options="simpleFruits"
            label="小尺寸"
            size="sm"
          />
          <QHComboBox
            :options="simpleFruits"
            label="中等尺寸"
            size="md"
          />
          <QHComboBox
            :options="simpleFruits"
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
        <div class="flex items-start gap-4">
          <QHComboBox
            :options="simpleFruits"
            label="主要样式"
            variant="primary"
          />
          <QHComboBox
            :options="simpleFruits"
            label="次要样式"
            variant="secondary"
          />
        </div>
      </div>
    </div>

    <div class="space-y-4 p-8">
      <h1 class="text-2xl font-bold">
        QHSelect Examples
      </h1>

      <!-- 基础示例 -->
      <QHSelect
        v-model="selectValue"
        v-model:open="openSelect"
        label="基础选择器"
        placeholder="请选择水果"
        :options="fruits"
        multiple
      />

      <!-- 不同尺寸 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          不同尺寸
        </h3>
        <div class="flex items-start gap-4">
          <QHSelect
            v-model="selectValue2"
            label="小尺寸"
            size="sm"
            :options="simpleFruits"
          />
          <QHSelect
            v-model="selectValue3"
            label="中等尺寸"
            size="md"
            :options="simpleFruits"
          />
          <QHSelect
            v-model="selectValue4"
            label="大尺寸"
            size="lg"
            :options="simpleFruits"
          />
        </div>
      </div>

      <!-- 不同变体 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          不同变体
        </h3>
        <div class="flex items-start gap-4">
          <QHSelect
            v-model="selectValue"
            label="主要样式"
            variant="primary"
            :options="simpleFruits"
          />
          <QHSelect
            v-model="selectValue2"
            label="次要样式"
            variant="secondary"
            :options="simpleFruits"
          />
        </div>
      </div>

      <!-- 分组选项 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          分组选项
        </h3>
        <div class="space-y-4">
          <!-- 基础分组 -->
          <QHSelect
            v-model="selectValue5"
            label="基础分组选择器"
            placeholder="请选择食物"
            :options="fruits"
          />

          <!-- 热带水果分组 -->
          <QHSelect
            v-model="selectValue2"
            label="热带水果选择器"
            label-orientation="horizontal"
            placeholder="请选择水果"
            :options="tropicalFruits"
          />

          <!-- 浆果分组 -->
          <QHSelect
            v-model="selectValue3"
            label="浆果选择器"
            placeholder="请选择浆果"
            :options="berries"
          />
        </div>
      </div>

      <!-- 禁用状态 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          禁用状态
        </h3>
        <QHSelect
          v-model="selectValue"
          label="禁用选择器"
          disabled
          :options="simpleFruits"
        />
      </div>

      <!-- 自定义样式 -->
      <div class="space-y-2">
        <h3 class="text-lg font-semibold">
          自定义样式
        </h3>
        <QHSelect
          v-model="selectValue6"
          label="自定义样式选择器"
          :options="simpleFruits"
          label-class="text-blue-600 font-medium"
          trigger-class="border-blue-300"
        />
      </div>
    </div>
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
