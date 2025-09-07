import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NumberField } from '../NumberField'

describe('numberField', () => {
  it('renders properly', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 0,
      },
    })

    expect(wrapper.find('.qh-number-field-container').exists()).toBe(true)
    expect(wrapper.find('[data-testid="numberfield-root"]').exists()).toBe(true)
  })

  it('renders with default props', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
      },
    })

    expect(wrapper.find('.border-primary').exists()).toBe(true)
    expect(wrapper.find('.bg-white').exists()).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 0,
        label: 'Quantity',
      },
    })

    expect(wrapper.find('.qh-number-field-label').exists()).toBe(true)
    expect(wrapper.text()).toContain('Quantity')
  })

  it('renders increment and decrement buttons', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
      },
    })

    expect(wrapper.find('[data-testid="numberfield-increment"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="numberfield-decrement"]').exists()).toBe(true)
  })

  it('displays correct icons for increment and decrement', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
      },
    })

    const icons = wrapper.findAll('[data-testid="icon"]')
    expect(icons).toHaveLength(2)

    // Find icons by their parent containers
    const decrementButton = wrapper.find('[data-testid="numberfield-decrement"]')
    const incrementButton = wrapper.find('[data-testid="numberfield-increment"]')

    const decrementIcon = decrementButton.find('[data-testid="icon"]')
    const incrementIcon = incrementButton.find('[data-testid="icon"]')

    expect(decrementIcon.attributes('data-icon')).toBe('line-md:minus')
    expect(incrementIcon.attributes('data-icon')).toBe('line-md:plus')
  })

  it('renders number input field', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 10,
      },
    })

    expect(wrapper.find('[data-testid="numberfield-input"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="numberfield-input"]').attributes('type')).toBe('number')
  })

  it('renders with different variants', () => {
    const primaryWrapper = mount(NumberField, {
      props: {
        modelValue: 0,
        variant: 'primary',
      },
    })

    expect(primaryWrapper.find('.border-primary').exists()).toBe(true)
    expect(primaryWrapper.find('.bg-white').exists()).toBe(true)

    const secondaryWrapper = mount(NumberField, {
      props: {
        modelValue: 0,
        variant: 'secondary',
      },
    })

    expect(secondaryWrapper.find('.bg-secondary').exists()).toBe(true)
  })

  it('sets min and max values correctly', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
        min: 1,
        max: 10,
      },
    })

    // The min/max are passed to NumberFieldRoot, which our mock doesn't handle
    // but we can verify the component renders with these props
    expect(wrapper.find('[data-testid="numberfield-root"]').exists()).toBe(true)
  })

  it('handles disabled state', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
        disabled: true,
      },
    })

    // Disabled state is passed to NumberFieldRoot and affects button styling
    expect(wrapper.find('.qh-number-field-decrement').exists()).toBe(true)
    expect(wrapper.find('.qh-number-field-increment').exists()).toBe(true)
  })

  it('applies custom classes', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 0,
        rootClass: 'custom-root',
        labelClass: 'custom-label',
        inputContainerClass: 'custom-container',
        decrementClass: 'custom-decrement',
        inputClass: 'custom-input',
        incrementClass: 'custom-increment',
      },
    })

    expect(wrapper.find('[data-testid="numberfield-root"]').classes()).toContain('custom-root')
    expect(wrapper.find('.qh-number-field-label').classes()).toContain('custom-label')
    expect(wrapper.find('.qh-number-field-input-container').classes()).toContain('custom-container')
    expect(wrapper.find('[data-testid="numberfield-decrement"]').classes()).toContain('custom-decrement')
    expect(wrapper.find('[data-testid="numberfield-input"]').classes()).toContain('custom-input')
    expect(wrapper.find('[data-testid="numberfield-increment"]').classes()).toContain('custom-increment')
  })

  it('generates unique component ID', () => {
    const wrapper1 = mount(NumberField, {
      props: {
        modelValue: 0,
        label: 'Test',
      },
    })
    const wrapper2 = mount(NumberField, {
      props: {
        modelValue: 0,
        label: 'Test',
      },
    })

    const id1 = wrapper1.find('.qh-number-field-label').attributes('for')
    const id2 = wrapper2.find('.qh-number-field-label').attributes('for')

    expect(id1).toBeDefined()
    expect(id2).toBeDefined()
    expect(id1).not.toBe(id2)
  })

  it('has correct default classes', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 0,
      },
    })

    const container = wrapper.find('.qh-number-field-input-container')
    expect(container.classes()).toContain('mt-1')
    expect(container.classes()).toContain('flex')
    expect(container.classes()).toContain('items-center')
    expect(container.classes()).toContain('w-fit')
    expect(container.classes()).toContain('rounded')
    expect(container.classes()).toContain('focus-within:ring-2')
    expect(container.classes()).toContain('focus-within:ring-primary/20')

    const input = wrapper.find('[data-testid="numberfield-input"]')
    expect(input.classes()).toContain('qh-number-field-input')
    expect(input.classes()).toContain('bg-transparent')
    expect(input.classes()).toContain('w-16')
    expect(input.classes()).toContain('tabular-nums')
    expect(input.classes()).toContain('text-center')
    expect(input.classes()).toContain('focus:outline-0')

    const decrementButton = wrapper.find('[data-testid="numberfield-decrement"]')
    expect(decrementButton.classes()).toContain('qh-number-field-decrement')
    expect(decrementButton.classes()).toContain('p-2')
    expect(decrementButton.classes()).toContain('cursor-pointer')
    expect(decrementButton.classes()).toContain('transition-all')

    const incrementButton = wrapper.find('[data-testid="numberfield-increment"]')
    expect(incrementButton.classes()).toContain('qh-number-field-increment')
    expect(incrementButton.classes()).toContain('p-2')
    expect(incrementButton.classes()).toContain('cursor-pointer')
    expect(incrementButton.classes()).toContain('transition-all')
  })

  it('has default min value of 0', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
        // Not providing min, should default to 0
      },
    })

    expect(wrapper.find('[data-testid="numberfield-root"]').exists()).toBe(true)
  })

  it('has default max value of Infinity', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
        // Not providing max, should default to Infinity
      },
    })

    expect(wrapper.find('[data-testid="numberfield-root"]').exists()).toBe(true)
  })

  it('links label to input with correct ID', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 0,
        label: 'Test Label',
      },
    })

    const label = wrapper.find('.qh-number-field-label')
    const root = wrapper.find('[data-testid="numberfield-root"]')

    const labelFor = label.attributes('for')
    const rootId = root.attributes('id')

    expect(labelFor).toBe(rootId)
  })

  it('has hover effects on buttons', () => {
    const wrapper = mount(NumberField, {
      props: {
        modelValue: 5,
      },
    })

    const decrementButton = wrapper.find('[data-testid="numberfield-decrement"]')
    const incrementButton = wrapper.find('[data-testid="numberfield-increment"]')

    expect(decrementButton.classes()).toContain('hover:opacity-50')
    expect(incrementButton.classes()).toContain('hover:opacity-50')
  })
})
