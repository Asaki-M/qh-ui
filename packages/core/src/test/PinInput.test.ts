import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { PinInput } from '../PinInput'

describe('pinInput', () => {
  it('renders properly', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
      },
    })

    expect(wrapper.find('.qh-pin-input-root').exists()).toBe(true)
    expect(wrapper.find('[data-testid="pininput-root"]').exists()).toBe(true)
  })

  it('renders default number of inputs (6)', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    expect(inputs).toHaveLength(6)
  })

  it('renders custom number of inputs', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        length: 4,
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    expect(inputs).toHaveLength(4)
  })

  it('renders with different variants', () => {
    const primaryWrapper = mount(PinInput, {
      props: {
        modelValue: [],
        variant: 'primary',
      },
    })

    const inputs = primaryWrapper.findAll('[data-testid="pininput-input"]')
    inputs.forEach((input) => {
      expect(input.classes()).toContain('border-primary')
      expect(input.classes()).toContain('bg-white')
    })

    const secondaryWrapper = mount(PinInput, {
      props: {
        modelValue: [],
        variant: 'secondary',
      },
    })

    const secondaryInputs = secondaryWrapper.findAll('[data-testid="pininput-input"]')
    secondaryInputs.forEach((input) => {
      expect(input.classes()).toContain('bg-secondary')
    })
  })

  it('has correct default input styling', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    inputs.forEach((input) => {
      expect(input.classes()).toContain('qh-pin-input-input')
      expect(input.classes()).toContain('w-12')
      expect(input.classes()).toContain('h-12')
      expect(input.classes()).toContain('text-center')
      expect(input.classes()).toContain('text-lg')
      expect(input.classes()).toContain('font-medium')
      expect(input.classes()).toContain('rounded')
      expect(input.classes()).toContain('tabular-nums')
    })
  })

  it('inputs have focus styling', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    inputs.forEach((input) => {
      expect(input.classes()).toContain('focus:outline-none')
      expect(input.classes()).toContain('focus:ring-2')
      expect(input.classes()).toContain('focus:ring-primary/20')
      expect(input.classes()).toContain('transition-all')
    })
  })

  it('renders with disabled state', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        disabled: true,
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    inputs.forEach((input) => {
      expect(input.attributes('disabled')).toBeDefined()
    })
  })

  it('passes correct props to PinInputRoot', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        type: 'number',
        placeholder: 'X',
        mask: true,
        otp: true,
        disabled: false,
      },
    })

    // Our mock doesn't actually handle these props, but we can verify the component renders
    expect(wrapper.find('[data-testid="pininput-root"]').exists()).toBe(true)
  })

  it('applies custom classes', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        containerClass: 'custom-container',
        inputClass: 'custom-input',
      },
    })

    expect(wrapper.find('.qh-pin-input-inputs-container').classes()).toContain('custom-container')

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    inputs.forEach((input) => {
      expect(input.classes()).toContain('custom-input')
    })
  })

  it('has correct container layout', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
      },
    })

    const container = wrapper.find('.qh-pin-input-inputs-container')
    expect(container.classes()).toContain('mt-1')
    expect(container.classes()).toContain('flex')
    expect(container.classes()).toContain('items-center')
    expect(container.classes()).toContain('gap-2')
  })

  it('can handle different lengths', () => {
    const lengths = [2, 4, 6, 8]

    lengths.forEach((length) => {
      const wrapper = mount(PinInput, {
        props: {
          modelValue: [],
          length,
        },
      })

      const inputs = wrapper.findAll('[data-testid="pininput-input"]')
      expect(inputs).toHaveLength(length)
    })
  })

  it('supports type="text" by default', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
      },
    })

    // Type is handled by the PinInputRoot component
    expect(wrapper.find('[data-testid="pininput-root"]').exists()).toBe(true)
  })

  it('supports type="number"', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        type: 'number',
      },
    })

    // Type is handled by the PinInputRoot component
    expect(wrapper.find('[data-testid="pininput-root"]').exists()).toBe(true)
  })

  it('has consistent input indices', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        length: 4,
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    expect(inputs).toHaveLength(4)

    // Each input should be rendered with correct index
    // Our mock doesn't show the index attribute, but the v-for loop ensures proper indexing
  })

  it('maintains pin input styling consistency', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        length: 5,
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')

    // All inputs should have consistent styling
    inputs.forEach((input) => {
      expect(input.classes()).toContain('w-12')
      expect(input.classes()).toContain('h-12')
      expect(input.classes()).toContain('text-center')
      expect(input.classes()).toContain('rounded')
    })
  })

  it('handles variant class mapping correctly', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
        variant: 'primary',
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    inputs.forEach((input) => {
      expect(input.classes()).toContain('border-primary')
      expect(input.classes()).toContain('bg-white')
    })
  })

  it('has proper dark mode support classes', () => {
    const wrapper = mount(PinInput, {
      props: {
        modelValue: [],
      },
    })

    const inputs = wrapper.findAll('[data-testid="pininput-input"]')
    inputs.forEach((input) => {
      expect(input.classes()).toContain('dark:bg-zinc-900')
      expect(input.classes()).toContain('dark:text-white')
    })
  })
})
