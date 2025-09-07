import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Input } from '../Input'

describe('input', () => {
  it('renders properly', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
      },
    })

    expect(wrapper.find('.qh-input-container').exists()).toBe(true)
    expect(wrapper.find('.qh-input-input').exists()).toBe(true)
  })

  it('renders with default props', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
      },
    })

    const input = wrapper.find('.qh-input-input')
    expect(input.attributes('type')).toBe('text')
    expect(wrapper.find('.border-primary').exists()).toBe(true)
    expect(wrapper.find('.px-3').exists()).toBe(true)
    expect(wrapper.find('.py-2').exists()).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        label: 'Email Address',
      },
    })

    expect(wrapper.find('.qh-input-label').exists()).toBe(true)
    expect(wrapper.text()).toContain('Email Address')
  })

  it('renders with different input types', () => {
    const types = ['text', 'password', 'email', 'tel', 'url', 'search']

    types.forEach((type) => {
      const wrapper = mount(Input, {
        props: {
          modelValue: '',
          type: type as any,
        },
      })

      expect(wrapper.find('.qh-input-input').attributes('type')).toBe(type)
    })
  })

  it('renders with placeholder', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        placeholder: 'Enter your email',
      },
    })

    expect(wrapper.find('.qh-input-input').attributes('placeholder')).toBe('Enter your email')
  })

  it('renders with different variants', () => {
    const primaryWrapper = mount(Input, {
      props: {
        modelValue: '',
        variant: 'primary',
      },
    })

    expect(primaryWrapper.find('.border-primary').exists()).toBe(true)
    expect(primaryWrapper.find('.bg-white').exists()).toBe(true)

    const secondaryWrapper = mount(Input, {
      props: {
        modelValue: '',
        variant: 'secondary',
      },
    })

    expect(secondaryWrapper.find('.bg-secondary').exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = [
      { size: 'sm', expectedClasses: ['px-2', 'py-1', 'text-sm'] },
      { size: 'md', expectedClasses: ['px-3', 'py-2'] },
      { size: 'lg', expectedClasses: ['px-4', 'py-3', 'text-lg'] },
    ]

    sizes.forEach(({ size, expectedClasses }) => {
      const wrapper = mount(Input, {
        props: {
          modelValue: '',
          size: size as any,
        },
      })

      expectedClasses.forEach((className) => {
        expect(wrapper.find(`.${className}`).exists()).toBe(true)
      })
    })
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        disabled: true,
      },
    })

    expect(wrapper.find('.qh-input-input').attributes('disabled')).toBeDefined()
  })

  it('is readonly when readonly prop is true', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        readonly: true,
      },
    })

    expect(wrapper.find('.qh-input-input').attributes('readonly')).toBeDefined()
  })

  it('emits update:modelValue when input value changes', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
      },
    })

    const input = wrapper.find('.qh-input-input')
    await input.setValue('new value')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['new value'])
  })

  it('displays current model value', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'initial value',
      },
    })

    expect(wrapper.find('.qh-input-input').element.value).toBe('initial value')
  })

  it('updates when modelValue prop changes', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'initial',
      },
    })

    await wrapper.setProps({ modelValue: 'updated' })
    expect(wrapper.find('.qh-input-input').element.value).toBe('updated')
  })

  it('renders prefix and suffix slots', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
      },
      slots: {
        prefix: '<span data-testid="prefix">$</span>',
        suffix: '<span data-testid="suffix">.com</span>',
      },
    })

    expect(wrapper.find('[data-testid="prefix"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="suffix"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('$')
    expect(wrapper.text()).toContain('.com')
  })

  it('applies custom classes', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        rootClass: 'custom-root',
        labelClass: 'custom-label',
        inputContainerClass: 'custom-container',
        inputClass: 'custom-input',
      },
    })

    expect(wrapper.find('.qh-input-container').classes()).toContain('custom-root')
    expect(wrapper.find('.qh-input-input-container').classes()).toContain('custom-container')
    expect(wrapper.find('.qh-input-input').classes()).toContain('custom-input')
  })

  it('generates unique component ID', () => {
    const wrapper1 = mount(Input, {
      props: {
        modelValue: '',
        label: 'Test',
      },
    })
    const wrapper2 = mount(Input, {
      props: {
        modelValue: '',
        label: 'Test',
      },
    })

    const id1 = wrapper1.find('.qh-input-label').attributes('for')
    const id2 = wrapper2.find('.qh-input-label').attributes('for')

    expect(id1).toBeDefined()
    expect(id2).toBeDefined()
    expect(id1).not.toBe(id2)
  })

  it('has correct default classes', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
      },
    })

    const container = wrapper.find('.qh-input-input-container')
    expect(container.classes()).toContain('px-2')
    expect(container.classes()).toContain('flex')
    expect(container.classes()).toContain('items-center')
    expect(container.classes()).toContain('w-full')
    expect(container.classes()).toContain('rounded')
    expect(container.classes()).toContain('transition-all')

    const input = wrapper.find('.qh-input-input')
    expect(input.classes()).toContain('bg-transparent')
    expect(input.classes()).toContain('w-full')
    expect(input.classes()).toContain('focus:outline-0')
  })

  it('shows focus ring on focus-within', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
      },
    })

    const container = wrapper.find('.qh-input-input-container')
    expect(container.classes()).toContain('focus-within:ring-2')
    expect(container.classes()).toContain('focus-within:ring-primary/20')
  })

  it('links label to input with correct ID', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        label: 'Test Label',
      },
    })

    const label = wrapper.find('.qh-input-label')
    const input = wrapper.find('.qh-input-input')

    const labelFor = label.attributes('for')
    const inputId = input.attributes('id')

    expect(labelFor).toBe(inputId)
  })
})
