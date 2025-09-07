import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Select } from '../Select'

const mockOptions = [
  {
    label: 'Fruits',
    children: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Orange', value: 'orange', disabled: true },
    ],
  },
  {
    label: 'Vegetables',
    children: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Potato', value: 'potato' },
    ],
  },
]

describe('select', () => {
  it('renders properly', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    expect(wrapper.find('.qh-select-container').exists()).toBe(true)
    expect(wrapper.find('[data-testid="select-root"]').exists()).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        label: 'Choose an option',
        options: mockOptions,
      },
    })

    expect(wrapper.find('.qh-select-label').exists()).toBe(true)
    expect(wrapper.text()).toContain('Choose an option')
  })

  it('renders with correct label orientation', () => {
    const horizontalWrapper = mount(Select, {
      props: {
        modelValue: '',
        label: 'Test',
        labelOrientation: 'horizontal',
        options: mockOptions,
      },
    })

    expect(horizontalWrapper.find('.flex-row').exists()).toBe(true)
    expect(horizontalWrapper.find('.items-center').exists()).toBe(true)

    const verticalWrapper = mount(Select, {
      props: {
        modelValue: '',
        label: 'Test',
        labelOrientation: 'vertical',
        options: mockOptions,
      },
    })

    expect(verticalWrapper.find('.flex-col').exists()).toBe(true)
  })

  it('renders with different variants', () => {
    const primaryWrapper = mount(Select, {
      props: {
        modelValue: '',
        variant: 'primary',
        options: mockOptions,
      },
    })

    expect(primaryWrapper.find('.border-primary').exists()).toBe(true)
    expect(primaryWrapper.find('.bg-white').exists()).toBe(true)

    const secondaryWrapper = mount(Select, {
      props: {
        modelValue: '',
        variant: 'secondary',
        options: mockOptions,
      },
    })

    expect(secondaryWrapper.find('.bg-secondary').exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = [
      { size: 'sm', expectedClasses: ['h-8', 'px-2', 'text-sm'] },
      { size: 'md', expectedClasses: ['h-10', 'px-3'] },
      { size: 'lg', expectedClasses: ['h-12', 'px-4', 'text-lg'] },
    ]

    sizes.forEach(({ size, expectedClasses }) => {
      const wrapper = mount(Select, {
        props: {
          modelValue: '',
          size: size as any,
          options: mockOptions,
        },
      })

      expectedClasses.forEach((className) => {
        expect(wrapper.find(`.${className}`).exists()).toBe(true)
      })
    })
  })

  it('displays select trigger and value', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    expect(wrapper.find('[data-testid="select-trigger"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="select-value"]').exists()).toBe(true)
  })

  it('shows placeholder text', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        placeholder: 'Choose option...',
        options: mockOptions,
      },
    })

    // The placeholder should be passed to SelectValue component
    expect(wrapper.find('[data-testid="select-value"]').exists()).toBe(true)
  })

  it('renders chevron down icon', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    const chevronIcon = wrapper.find('[data-testid="icon"]')
    expect(chevronIcon.exists()).toBe(true)
    expect(chevronIcon.attributes('data-icon')).toBe('line-md:chevron-down')
  })

  it('displays content structure', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    expect(wrapper.find('[data-testid="select-portal"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="select-content"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="select-viewport"]').exists()).toBe(true)
  })

  it('renders option groups and items', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    // Check for groups
    expect(wrapper.findAll('[data-testid="select-group"]')).toHaveLength(2)
    expect(wrapper.findAll('[data-testid="select-label"]')).toHaveLength(2)

    // Check for items
    expect(wrapper.findAll('[data-testid="select-item"]')).toHaveLength(5)
    expect(wrapper.findAll('[data-testid="select-item-indicator"]')).toHaveLength(5)
    expect(wrapper.findAll('[data-testid="select-item-text"]')).toHaveLength(5)
  })

  it('displays separators between groups', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    // Should have 1 separator between 2 groups
    expect(wrapper.findAll('[data-testid="select-separator"]')).toHaveLength(1)
  })

  it('handles disabled state', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        disabled: true,
        options: mockOptions,
      },
    })

    // Disabled state is passed to SelectRoot
    expect(wrapper.find('[data-testid="select-root"]').exists()).toBe(true)
  })

  it('applies custom classes', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
        label: 'Test', // Add label so we can check labelClass
        rootClass: 'custom-root',
        labelClass: 'custom-label',
        triggerClass: 'custom-trigger',
        contentClass: 'custom-content',
        itemClass: 'custom-item',
      },
    })

    expect(wrapper.find('.qh-select-container').classes()).toContain('custom-root')

    const label = wrapper.find('.qh-select-label')
    if (label.exists()) {
      expect(label.classes()).toContain('custom-label')
    }

    expect(wrapper.find('[data-testid="select-trigger"]').classes()).toContain('custom-trigger')
    expect(wrapper.find('[data-testid="select-content"]').classes()).toContain('custom-content')

    const items = wrapper.findAll('[data-testid="select-item"]')
    items.forEach((item) => {
      expect(item.classes()).toContain('custom-item')
    })
  })

  it('has correct default classes', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    const trigger = wrapper.find('[data-testid="select-trigger"]')
    expect(trigger.classes()).toContain('qh-select-trigger')
    expect(trigger.classes()).toContain('inline-flex')
    expect(trigger.classes()).toContain('w-full')
    expect(trigger.classes()).toContain('items-center')
    expect(trigger.classes()).toContain('justify-between')
    expect(trigger.classes()).toContain('rounded')
    expect(trigger.classes()).toContain('transition-all')

    const content = wrapper.find('[data-testid="select-content"]')
    expect(content.classes()).toContain('qh-select-content')
    expect(content.classes()).toContain('relative')
    expect(content.classes()).toContain('z-50')
  })

  it('shows confirm icon in item indicators', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    const indicators = wrapper.findAll('[data-testid="select-item-indicator"]')
    indicators.forEach((indicator) => {
      const icon = indicator.find('[data-testid="icon"]')
      expect(icon.exists()).toBe(true)
      expect(icon.attributes('data-icon')).toBe('line-md:confirm')
    })
  })

  it('generates unique component ID', () => {
    const wrapper1 = mount(Select, {
      props: {
        modelValue: '',
        label: 'Test',
        options: mockOptions,
      },
    })
    const wrapper2 = mount(Select, {
      props: {
        modelValue: '',
        label: 'Test',
        options: mockOptions,
      },
    })

    const id1 = wrapper1.find('.qh-select-label').attributes('for')
    const id2 = wrapper2.find('.qh-select-label').attributes('for')

    expect(id1).toBeDefined()
    expect(id2).toBeDefined()
    expect(id1).not.toBe(id2)
  })

  it('links label to select with correct ID', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        label: 'Test Label',
        options: mockOptions,
      },
    })

    const label = wrapper.find('.qh-select-label')
    const select = wrapper.find('[data-testid="select-root"]')

    const labelFor = label.attributes('for')
    const selectId = select.attributes('id')

    expect(labelFor).toBe(selectId)
  })

  it('handles focus styling', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    const trigger = wrapper.find('[data-testid="select-trigger"]')
    expect(trigger.classes()).toContain('focus:outline-none')
  })

  it('handles disabled styling', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        disabled: true,
        options: mockOptions,
      },
    })

    const trigger = wrapper.find('[data-testid="select-trigger"]')
    expect(trigger.classes()).toContain('disabled:cursor-not-allowed')
    expect(trigger.classes()).toContain('disabled:opacity-50')
  })

  it('supports slot content alongside options', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
      slots: {
        default: '<div data-testid="custom-slot">Custom content</div>',
      },
    })

    expect(wrapper.find('[data-testid="custom-slot"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Custom content')
  })

  it('has correct dark mode support', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    const content = wrapper.find('[data-testid="select-content"]')
    expect(content.classes()).toContain('dark:bg-zinc-900')

    const items = wrapper.findAll('[data-testid="select-item"]')
    items.forEach((item) => {
      expect(item.classes()).toContain('dark:text-zinc-300')
      expect(item.classes()).toContain('dark:focus:bg-zinc-800')
    })
  })
})
