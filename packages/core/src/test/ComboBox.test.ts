import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ComboBox } from '../Combobox'

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

describe('comboBox', () => {
  it('renders properly', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    expect(wrapper.find('.qh-combobox-container').exists()).toBe(true)
    expect(wrapper.find('[data-testid="combobox-root"]').exists()).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(ComboBox, {
      props: {
        label: 'Select an option',
        options: mockOptions,
      },
    })

    expect(wrapper.find('.qh-combobox-label').exists()).toBe(true)
    expect(wrapper.text()).toContain('Select an option')
  })

  it('renders with correct label orientation', () => {
    const horizontalWrapper = mount(ComboBox, {
      props: {
        label: 'Test',
        labelOrientation: 'horizontal',
        options: mockOptions,
      },
    })

    expect(horizontalWrapper.find('.flex-row').exists()).toBe(true)
    expect(horizontalWrapper.find('.items-center').exists()).toBe(true)

    const verticalWrapper = mount(ComboBox, {
      props: {
        label: 'Test',
        labelOrientation: 'vertical',
        options: mockOptions,
      },
    })

    expect(verticalWrapper.find('.flex-col').exists()).toBe(true)
  })

  it('renders with different variants', () => {
    const primaryWrapper = mount(ComboBox, {
      props: {
        variant: 'primary',
        options: mockOptions,
      },
    })

    expect(primaryWrapper.find('.border-primary').exists()).toBe(true)

    const secondaryWrapper = mount(ComboBox, {
      props: {
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
      const wrapper = mount(ComboBox, {
        props: {
          size: size as any,
          options: mockOptions,
        },
      })

      expectedClasses.forEach((className) => {
        expect(wrapper.find(`.${className}`).exists()).toBe(true)
      })
    })
  })

  it('displays combobox input', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    expect(wrapper.find('[data-testid="combobox-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="combobox-trigger"]').exists()).toBe(true)
  })

  it('renders chevron down icon', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    const chevronIcon = wrapper.find('[data-testid="icon"]')
    expect(chevronIcon.exists()).toBe(true)
    expect(chevronIcon.attributes('data-icon')).toBe('line-md:chevron-down')
  })

  it('displays content structure', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    expect(wrapper.find('[data-testid="combobox-content"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="combobox-viewport"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="combobox-empty"]').exists()).toBe(true)
  })

  it('renders options groups and items', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    // Check for groups
    expect(wrapper.findAll('[data-testid="combobox-group"]')).toHaveLength(2)
    expect(wrapper.findAll('[data-testid="combobox-label"]')).toHaveLength(2)

    // Check for items
    expect(wrapper.findAll('[data-testid="combobox-item"]')).toHaveLength(5)
    expect(wrapper.findAll('[data-testid="combobox-item-indicator"]')).toHaveLength(5)
  })

  it('displays separators between groups', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    // Should have 1 separator between 2 groups
    expect(wrapper.findAll('[data-testid="combobox-separator"]')).toHaveLength(1)
  })

  it('applies custom classes', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
        rootClass: 'custom-root',
        labelClass: 'custom-label',
        comboboxClass: 'custom-combobox',
        anchorClass: 'custom-anchor',
        inputClass: 'custom-input',
        triggerClass: 'custom-trigger',
        contentClass: 'custom-content',
        contentEmptyClass: 'custom-empty',
        itemClass: 'custom-item',
      },
    })

    expect(wrapper.find('.qh-combobox-container').classes()).toContain('custom-root')
    expect(wrapper.find('.qh-combobox-label').classes()).toContain('custom-label')
    expect(wrapper.find('[data-testid="combobox-root"]').classes()).toContain('custom-combobox')
    expect(wrapper.find('[data-testid="combobox-anchor"]').classes()).toContain('custom-anchor')
    expect(wrapper.find('[data-testid="combobox-input"]').classes()).toContain('custom-input')
    expect(wrapper.find('[data-testid="combobox-trigger"]').classes()).toContain('custom-trigger')
    expect(wrapper.find('[data-testid="combobox-content"]').classes()).toContain('custom-content')
    expect(wrapper.find('[data-testid="combobox-empty"]').classes()).toContain('custom-empty')

    const items = wrapper.findAll('[data-testid="combobox-item"]')
    items.forEach((item) => {
      expect(item.classes()).toContain('custom-item')
    })
  })

  it('has correct default classes', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    const anchor = wrapper.find('[data-testid="combobox-anchor"]')
    expect(anchor.classes()).toContain('qh-combobox-anchor')
    expect(anchor.classes()).toContain('min-w-[160px]')
    expect(anchor.classes()).toContain('inline-flex')
    expect(anchor.classes()).toContain('items-center')
    expect(anchor.classes()).toContain('justify-between')

    const input = wrapper.find('[data-testid="combobox-input"]')
    expect(input.classes()).toContain('qh-combobox-input')

    const content = wrapper.find('[data-testid="combobox-content"]')
    expect(content.classes()).toContain('qh-combobox-content')
    expect(content.classes()).toContain('absolute')
    expect(content.classes()).toContain('z-50')
  })

  it('shows confirm icon in item indicators', () => {
    const wrapper = mount(ComboBox, {
      props: {
        options: mockOptions,
      },
    })

    const indicators = wrapper.findAll('[data-testid="combobox-item-indicator"]')
    indicators.forEach((indicator) => {
      const icon = indicator.find('[data-testid="icon"]')
      expect(icon.exists()).toBe(true)
      expect(icon.attributes('data-icon')).toBe('line-md:confirm')
    })
  })

  it('generates unique component ID', () => {
    const wrapper1 = mount(ComboBox, { props: { options: mockOptions } })
    const wrapper2 = mount(ComboBox, { props: { options: mockOptions } })

    const id1 = wrapper1.find('.qh-combobox-label').attributes('for')
    const id2 = wrapper2.find('.qh-combobox-label').attributes('for')

    expect(id1).toBeDefined()
    expect(id2).toBeDefined()
    expect(id1).not.toBe(id2)
  })
})
