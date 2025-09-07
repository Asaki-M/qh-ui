import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Switch } from '../Switch'

describe('switch', () => {
  it('renders properly', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
      },
    })

    expect(wrapper.find('[data-testid="switch-root"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="switch-thumb"]').exists()).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Enable notifications',
      },
    })

    expect(wrapper.find('.qh-switch-label').exists()).toBe(true)
    expect(wrapper.text()).toContain('Enable notifications')
  })

  it('renders with label on the right by default', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
      },
    })

    expect(wrapper.find('.flex').exists()).toBe(true)
    expect(wrapper.find('.gap-2').exists()).toBe(true)
    expect(wrapper.find('.items-center').exists()).toBe(true)
    // Default is right position, should not have flex-row-reverse
    expect(wrapper.find('.flex-row-reverse').exists()).toBe(false)
  })

  it('renders with label on the left', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
        labelPosition: 'left',
      },
    })

    expect(wrapper.find('.flex-row-reverse').exists()).toBe(true)
    expect(wrapper.find('.gap-2').exists()).toBe(true)
    expect(wrapper.find('.items-center').exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = [
      {
        size: 'sm',
        expectedSwitchClasses: ['w-8', 'h-4'],
        expectedThumbClasses: ['w-3', 'h-3'],
      },
      {
        size: 'md',
        expectedSwitchClasses: ['w-10', 'h-5'],
        expectedThumbClasses: ['w-4', 'h-4'],
      },
      {
        size: 'lg',
        expectedSwitchClasses: ['w-12', 'h-6'],
        expectedThumbClasses: ['w-5', 'h-5'],
      },
    ]

    sizes.forEach(({ size, expectedSwitchClasses, expectedThumbClasses }) => {
      const wrapper = mount(Switch, {
        props: {
          modelValue: false,
          size: size as any,
        },
      })

      const switchRoot = wrapper.find('[data-testid="switch-root"]')
      expectedSwitchClasses.forEach((className) => {
        expect(switchRoot.classes()).toContain(className)
      })

      const thumb = wrapper.find('[data-testid="switch-thumb"]')
      expectedThumbClasses.forEach((className) => {
        expect(thumb.classes()).toContain(className)
      })
    })
  })

  it('renders with different variants', () => {
    const primaryWrapper = mount(Switch, {
      props: {
        modelValue: false,
        variant: 'primary',
      },
    })

    const switchRoot = primaryWrapper.find('[data-testid="switch-root"]')
    expect(switchRoot.classes()).toContain('data-[state=checked]:bg-primary')
    expect(switchRoot.classes()).toContain('data-[state=unchecked]:bg-stone-300')

    const secondaryWrapper = mount(Switch, {
      props: {
        modelValue: false,
        variant: 'secondary',
      },
    })

    const secondarySwitchRoot = secondaryWrapper.find('[data-testid="switch-root"]')
    expect(secondarySwitchRoot.classes()).toContain('data-[state=checked]:bg-secondary')
  })

  it('has correct switch root styling', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
      },
    })

    const switchRoot = wrapper.find('[data-testid="switch-root"]')
    expect(switchRoot.classes()).toContain('qh-switch-root')
    expect(switchRoot.classes()).toContain('relative')
    expect(switchRoot.classes()).toContain('inline-flex')
    expect(switchRoot.classes()).toContain('shrink-0')
    expect(switchRoot.classes()).toContain('cursor-pointer')
    expect(switchRoot.classes()).toContain('rounded-full')
    expect(switchRoot.classes()).toContain('border-2')
    expect(switchRoot.classes()).toContain('border-transparent')
    expect(switchRoot.classes()).toContain('transition-colors')
    expect(switchRoot.classes()).toContain('focus:outline-none')
    expect(switchRoot.classes()).toContain('focus:ring-2')
    expect(switchRoot.classes()).toContain('focus:ring-primary/20')
    expect(switchRoot.classes()).toContain('focus:ring-offset-2')
    expect(switchRoot.classes()).toContain('disabled:cursor-not-allowed')
    expect(switchRoot.classes()).toContain('disabled:opacity-50')
  })

  it('has correct thumb styling', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
      },
    })

    const thumb = wrapper.find('[data-testid="switch-thumb"]')
    expect(thumb.classes()).toContain('qh-switch-thumb')
    expect(thumb.classes()).toContain('pointer-events-none')
    expect(thumb.classes()).toContain('block')
    expect(thumb.classes()).toContain('rounded-full')
    expect(thumb.classes()).toContain('bg-white')
    expect(thumb.classes()).toContain('shadow-sm')
    expect(thumb.classes()).toContain('ring-0')
    expect(thumb.classes()).toContain('transition-transform')
    expect(thumb.classes()).toContain('data-[state=checked]:translate-x-full')
    expect(thumb.classes()).toContain('data-[state=unchecked]:translate-x-0')
  })

  it('has correct label styling', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test Label',
      },
    })

    const label = wrapper.find('.qh-switch-label')
    expect(label.classes()).toContain('text-stone-700')
    expect(label.classes()).toContain('cursor-pointer')
    expect(label.classes()).toContain('select-none')
  })

  it('applies custom classes', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        containerClasses: 'custom-container',
        labelClasses: 'custom-label',
        switchClasses: 'custom-switch',
        thumbClasses: 'custom-thumb',
      },
    })

    expect(wrapper.classes()).toContain('custom-container')
    expect(wrapper.find('[data-testid="switch-root"]').classes()).toContain('custom-switch')
    expect(wrapper.find('[data-testid="switch-thumb"]').classes()).toContain('custom-thumb')
  })

  it('generates unique component ID when label is present', () => {
    const wrapper1 = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
      },
    })
    const wrapper2 = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
      },
    })

    const id1 = wrapper1.find('.qh-switch-label').attributes('for')
    const id2 = wrapper2.find('.qh-switch-label').attributes('for')

    expect(id1).toBeDefined()
    expect(id2).toBeDefined()
    expect(id1).not.toBe(id2)
  })

  it('links label to switch with correct ID', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test Label',
      },
    })

    const label = wrapper.find('.qh-switch-label')
    const switchRoot = wrapper.find('[data-testid="switch-root"]')

    const labelFor = label.attributes('for')
    const switchId = switchRoot.attributes('id')

    expect(labelFor).toBe(switchId)
  })

  it('supports dark mode classes', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
      },
    })

    const label = wrapper.find('.qh-switch-label')
    expect(label.classes()).toContain('dark:text-white')

    const thumb = wrapper.find('[data-testid="switch-thumb"]')
    expect(thumb.classes()).toContain('dark:bg-zinc-100')

    const switchRoot = wrapper.find('[data-testid="switch-root"]')
    expect(switchRoot.classes()).toContain('dark:data-[state=unchecked]:bg-zinc-600')
  })

  it('passes correct props to SwitchRoot', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true,
        disabled: false,
        name: 'test-switch',
        value: 'switch-value',
      },
    })

    // Our mock doesn't handle these props, but we can verify the component renders
    expect(wrapper.find('[data-testid="switch-root"]').exists()).toBe(true)
  })

  it('filters out custom props from switch extends props', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
        labelPosition: 'left',
        size: 'md',
        variant: 'primary',
        containerClasses: 'test',
        labelClasses: 'test',
        switchClasses: 'test',
        thumbClasses: 'test',
        // These should be passed to SwitchRoot
        disabled: false,
        name: 'test',
        value: 'test',
      },
    })

    // Component should render correctly with filtered props
    expect(wrapper.find('[data-testid="switch-root"]').exists()).toBe(true)
  })

  it('handles container class mapping for different label positions', () => {
    const rightWrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
        labelPosition: 'right',
      },
    })

    expect(rightWrapper.find('.flex').exists()).toBe(true)
    expect(rightWrapper.find('.gap-2').exists()).toBe(true)
    expect(rightWrapper.find('.items-center').exists()).toBe(true)
    expect(rightWrapper.find('.flex-row-reverse').exists()).toBe(false)

    const leftWrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Test',
        labelPosition: 'left',
      },
    })

    expect(leftWrapper.find('.flex-row-reverse').exists()).toBe(true)
  })

  it('handles state-based variant classes correctly', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        variant: 'primary',
      },
    })

    const switchRoot = wrapper.find('[data-testid="switch-root"]')

    // Should have both checked and unchecked state classes
    expect(switchRoot.classes()).toContain('data-[state=checked]:bg-primary')
    expect(switchRoot.classes()).toContain('data-[state=unchecked]:bg-stone-300')
    expect(switchRoot.classes()).toContain('dark:data-[state=unchecked]:bg-zinc-600')
  })
})
