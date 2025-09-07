import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Button } from '../Button'

describe('button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.classes()).toContain('qh-button')
  })

  it('renders with default props', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('bg-primary')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('px-2')
    expect(wrapper.classes()).toContain('py-1')
    expect(wrapper.classes()).toContain('h-10')
  })

  it('renders with custom variant', () => {
    const variants = [
      { variant: 'primary', expectedClasses: ['bg-primary', 'text-white'] },
      { variant: 'secondary', expectedClasses: ['bg-secondary'] },
      { variant: 'outline', expectedClasses: ['bg-transparent', 'border', 'border-primary', 'text-primary'] },
      { variant: 'ghost', expectedClasses: ['bg-transparent', 'text-primary'] },
      { variant: 'link', expectedClasses: ['bg-transparent', 'text-primary'] },
    ]

    variants.forEach(({ variant, expectedClasses }) => {
      const wrapper = mount(Button, {
        props: { variant: variant as any },
      })

      expectedClasses.forEach((className) => {
        expect(wrapper.classes()).toContain(className)
      })
    })
  })

  it('renders with custom size', () => {
    const sizes = [
      { size: 'sm', expectedClasses: ['p-1', 'text-sm', 'h-8'] },
      { size: 'md', expectedClasses: ['px-2', 'py-1', 'text-base', 'h-10'] },
      { size: 'lg', expectedClasses: ['px-4', 'py-2', 'text-lg', 'h-12'] },
    ]

    sizes.forEach(({ size, expectedClasses }) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      })

      expectedClasses.forEach((className) => {
        expect(wrapper.classes()).toContain(className)
      })
    })
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button)

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('shows loading icon when loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })

    const loadingIcon = wrapper.find('[data-testid="icon"]')
    expect(loadingIcon.exists()).toBe(true)
    expect(loadingIcon.attributes('data-icon')).toBe('line-md:loading-twotone-loop')
    expect(loadingIcon.classes()).toContain('qh-button-loading')
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('disabled:opacity-50')
    expect(wrapper.classes()).toContain('disabled:cursor-not-allowed')
  })

  it('is disabled when loading prop is true', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    })

    expect(wrapper.text()).toContain('Click me')
  })

  it('renders prefix and suffix slots', () => {
    const wrapper = mount(Button, {
      slots: {
        prefix: '<span data-testid="prefix">prefix</span>',
        default: 'Button',
        suffix: '<span data-testid="suffix">suffix</span>',
      },
    })

    expect(wrapper.find('[data-testid="prefix"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="suffix"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Button')
  })

  it('applies extra classes', () => {
    const wrapper = mount(Button, {
      props: {
        extraClass: 'custom-class another-class',
      },
    })

    expect(wrapper.classes()).toContain('custom-class')
    expect(wrapper.classes()).toContain('another-class')
  })

  it('has correct default classes', () => {
    const wrapper = mount(Button)

    const expectedClasses = [
      'qh-button',
      'rounded-md',
      'cursor-pointer',
      'transition-all',
      'duration-200',
      'flex',
      'items-center',
      'justify-center',
      'gap-2',
      'w-fit',
    ]

    expectedClasses.forEach((className) => {
      expect(wrapper.classes()).toContain(className)
    })
  })
})
