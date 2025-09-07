import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { RadioGroup } from '../RadioGroup'

const mockOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3', disabled: true },
]

describe('radioGroup', () => {
  it('renders properly', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    expect(wrapper.find('.qh-radio-group-container').exists()).toBe(true)
    expect(wrapper.find('[data-testid="radiogroup-root"]').exists()).toBe(true)
  })

  it('renders all options', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const items = wrapper.findAll('.qh-radio-group-item')
    expect(items).toHaveLength(3)

    const radioItems = wrapper.findAll('[data-testid="radiogroup-item"]')
    expect(radioItems).toHaveLength(3)

    const labels = wrapper.findAll('.qh-radio-group-item-label')
    expect(labels).toHaveLength(3)
  })

  it('displays correct labels', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    expect(wrapper.text()).toContain('Option 1')
    expect(wrapper.text()).toContain('Option 2')
    expect(wrapper.text()).toContain('Option 3')
  })

  it('renders with vertical orientation by default', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    expect(wrapper.find('.flex-col').exists()).toBe(true)
    expect(wrapper.find('.gap-2').exists()).toBe(true)
  })

  it('renders with horizontal orientation', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
        orientation: 'horizontal',
      },
    })

    expect(wrapper.find('.flex-row').exists()).toBe(true)
    expect(wrapper.find('.gap-4').exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = [
      { size: 'sm', expectedClasses: ['w-4', 'h-4'] },
      { size: 'md', expectedClasses: ['w-5', 'h-5'] },
      { size: 'lg', expectedClasses: ['w-6', 'h-6'] },
    ]

    sizes.forEach(({ size, expectedClasses }) => {
      const wrapper = mount(RadioGroup, {
        props: {
          options: mockOptions,
          size: size as any,
        },
      })

      const radioItems = wrapper.findAll('[data-testid="radiogroup-item"]')
      radioItems.forEach((item) => {
        expectedClasses.forEach((className) => {
          expect(item.classes()).toContain(className)
        })
      })
    })
  })

  it('handles disabled state for individual options', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const items = wrapper.findAll('.qh-radio-group-item')

    // First two options should not be disabled
    expect(items[0].classes()).not.toContain('opacity-50')
    expect(items[0].classes()).not.toContain('pointer-events-none')
    expect(items[1].classes()).not.toContain('opacity-50')
    expect(items[1].classes()).not.toContain('pointer-events-none')

    // Third option should be disabled
    expect(items[2].classes()).toContain('opacity-50')
    expect(items[2].classes()).toContain('pointer-events-none')
  })

  it('handles disabled state for entire group', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
        disabled: true,
      },
    })

    const items = wrapper.findAll('.qh-radio-group-item')
    items.forEach((item) => {
      expect(item.classes()).toContain('opacity-50')
      expect(item.classes()).toContain('pointer-events-none')
    })
  })

  it('renders radio indicators', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const indicators = wrapper.findAll('[data-testid="radiogroup-indicator"]')
    expect(indicators).toHaveLength(3)

    indicators.forEach((indicator) => {
      expect(indicator.classes()).toContain('qh-radio-group-item-indicator')
      expect(indicator.classes()).toContain('flex')
      expect(indicator.classes()).toContain('items-center')
      expect(indicator.classes()).toContain('justify-center')
    })
  })

  it('has correct radio item styling', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const radioItems = wrapper.findAll('[data-testid="radiogroup-item"]')
    radioItems.forEach((item) => {
      expect(item.classes()).toContain('qh-radio-group-item-container')
      expect(item.classes()).toContain('bg-white')
      expect(item.classes()).toContain('rounded-full')
      expect(item.classes()).toContain('border-primary')
      expect(item.classes()).toContain('shadow-sm')
      expect(item.classes()).toContain('outline-none')
      expect(item.classes()).toContain('transition-all')
    })
  })

  it('has cursor pointer for enabled options', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const radioItems = wrapper.findAll('[data-testid="radiogroup-item"]')

    // First two items should have cursor-pointer
    expect(radioItems[0].classes()).toContain('cursor-pointer')
    expect(radioItems[1].classes()).toContain('cursor-pointer')

    // Third item is disabled, should have cursor-not-allowed
    expect(radioItems[2].classes()).toContain('cursor-not-allowed')
    expect(radioItems[2].classes()).toContain('opacity-50')
  })

  it('has correct label styling', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const labels = wrapper.findAll('.qh-radio-group-item-label')
    labels.forEach((label) => {
      expect(label.classes()).toContain('text-stone-700')
      expect(label.classes()).toContain('text-sm')
      expect(label.classes()).toContain('leading-none')
      expect(label.classes()).toContain('transition-all')
    })
  })

  it('links labels to radio inputs correctly', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const radioItems = wrapper.findAll('[data-testid="radiogroup-item"]')
    const labels = wrapper.findAll('.qh-radio-group-item-label')

    expect(radioItems).toHaveLength(labels.length)

    // Each radio should have an ID that matches its label's 'for' attribute
    radioItems.forEach((radio, index) => {
      const radioId = radio.attributes('id')
      const labelFor = labels[index].attributes('for')
      expect(radioId).toBe(labelFor)
    })
  })

  it('has correct layout classes for orientation', () => {
    const verticalWrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
        orientation: 'vertical',
      },
    })

    expect(verticalWrapper.find('.flex-col').exists()).toBe(true)
    expect(verticalWrapper.find('.gap-2').exists()).toBe(true)

    const horizontalWrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
        orientation: 'horizontal',
      },
    })

    expect(horizontalWrapper.find('.flex-row').exists()).toBe(true)
    expect(horizontalWrapper.find('.gap-4').exists()).toBe(true)
  })

  it('has correct container classes', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const container = wrapper.find('[data-testid="radiogroup-root"]')
    expect(container.classes()).toContain('qh-radio-group-container')
  })

  it('handles dark mode classes', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const radioItems = wrapper.findAll('[data-testid="radiogroup-item"]')
    radioItems.forEach((item) => {
      expect(item.classes()).toContain('dark:bg-zinc-900')
    })

    const labels = wrapper.findAll('.qh-radio-group-item-label')
    labels.forEach((label) => {
      expect(label.classes()).toContain('dark:text-white')
    })
  })

  it('supports empty options array', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: [],
      },
    })

    expect(wrapper.find('[data-testid="radiogroup-root"]').exists()).toBe(true)
    expect(wrapper.findAll('.qh-radio-group-item')).toHaveLength(0)
  })

  it('handles option values correctly', () => {
    const wrapper = mount(RadioGroup, {
      props: {
        options: mockOptions,
      },
    })

    const radioItems = wrapper.findAll('[data-testid="radiogroup-item"]')

    // Each radio item should have the correct value attribute
    expect(radioItems[0].attributes('value')).toBe('option1')
    expect(radioItems[1].attributes('value')).toBe('option2')
    expect(radioItems[2].attributes('value')).toBe('option3')
  })
})
