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
</script>

<template>
  <div class="w-full h-full bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors">
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
