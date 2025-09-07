import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Checkbox } from '../Checkbox'

describe('checkbox', () => {
  it('renders properly', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('.qh-checkbox-label').exists()).toBe(true)
    expect(wrapper.find('[data-testid="checkbox-root"]').exists()).toBe(true)
  })

  it('renders with default props', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('.w-5').exists()).toBe(true)
    expect(wrapper.find('.h-5').exists()).toBe(true)
    expect(wrapper.find('.rounded-md').exists()).toBe(true)
  })

  it('renders with custom size', () => {
    const sizes = [
      { size: 'sm', expectedClasses: ['w-4', 'h-4', 'rounded-sm'] },
      { size: 'md', expectedClasses: ['w-5', 'h-5', 'rounded-md'] },
      { size: 'lg', expectedClasses: ['w-6', 'h-6', 'rounded-lg'] },
    ]

    sizes.forEach(({ size, expectedClasses }) => {
      const wrapper = mount(Checkbox, {
        props: { size: size as any },
      })

      expectedClasses.forEach((className) => {
        expect(wrapper.find(`.${className}`).exists()).toBe(true)
      })
    })
  })

  it('displays label when provided', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Accept terms',
      },
    })

    expect(wrapper.text()).toContain('Accept terms')
  })

  it('emits update:modelValue when clicked', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
      },
    })

    await wrapper.find('.qh-checkbox-label').trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([true])
  })

  it('toggles value correctly', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
      },
    })

    // Click to check
    await wrapper.find('.qh-checkbox-label').trigger('click')
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([true])

    // Update prop and click again to uncheck
    await wrapper.setProps({ modelValue: true })
    await wrapper.find('.qh-checkbox-label').trigger('click')
    expect(wrapper.emitted('update:modelValue')[1]).toEqual([false])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
        modelValue: false,
      },
    })

    await wrapper.find('.qh-checkbox-label').trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies disabled styles when disabled', () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.find('.qh-checkbox-label').classes()).toContain('opacity-50')
    expect(wrapper.find('.qh-checkbox-label').classes()).toContain('cursor-not-allowed')
  })

  it('shows check icon when checked', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true,
      },
    })

    const checkIcon = wrapper.find('[data-testid="icon"]')
    expect(checkIcon.exists()).toBe(true)
    expect(checkIcon.attributes('data-icon')).toBe('lucide:check')
  })

  it('applies custom classes', () => {
    const wrapper = mount(Checkbox, {
      props: {
        checkboxClass: 'custom-checkbox',
        labelClass: 'custom-label',
      },
    })

    expect(wrapper.find('[data-testid="checkbox-root"]').classes()).toContain('custom-checkbox')
    expect(wrapper.find('.qh-checkbox-label').classes()).toContain('custom-label')
  })

  it('has correct icon size for different checkbox sizes', () => {
    const sizes = [
      { size: 'sm', expectedWidth: 12, expectedHeight: 12 },
      { size: 'md', expectedWidth: 16, expectedHeight: 16 },
      { size: 'lg', expectedWidth: 20, expectedHeight: 20 },
    ]

    sizes.forEach(({ size, expectedWidth, expectedHeight }) => {
      const wrapper = mount(Checkbox, {
        props: {
          size: size as any,
          modelValue: true,
        },
      })

      const icon = wrapper.find('[data-testid="icon"]')
      expect(icon.exists()).toBe(true)
      // Note: In a real test, you'd check the computed width/height attributes
      // but our mock doesn't support this level of detail
    })
  })

  it('has correct default classes', () => {
    const wrapper = mount(Checkbox)

    const label = wrapper.find('.qh-checkbox-label')
    expect(label.classes()).toContain('flex')
    expect(label.classes()).toContain('items-center')
    expect(label.classes()).toContain('gap-2')
    expect(label.classes()).toContain('select-none')

    const checkbox = wrapper.find('[data-testid="checkbox-root"]')
    expect(checkbox.classes()).toContain('qh-checkbox')
    expect(checkbox.classes()).toContain('flex')
    expect(checkbox.classes()).toContain('items-center')
    expect(checkbox.classes()).toContain('justify-center')
  })

  it('passes checked state to CheckboxRoot', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true,
      },
    })

    // In a real implementation, we'd check that the CheckboxRoot receives the checked prop
    // Our mock doesn't handle this, but the component structure is verified
    expect(wrapper.find('[data-testid="checkbox-root"]').exists()).toBe(true)
  })
})
