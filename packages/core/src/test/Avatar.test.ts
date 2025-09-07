import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Avatar } from '../Avatar'

describe('avatar', () => {
  it('renders properly', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.find('[data-testid="avatar-root"]').exists()).toBe(true)
  })

  it('renders with custom size', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 'lg',
      },
    })
    expect(wrapper.find('.w-9').exists()).toBe(true)
    expect(wrapper.find('.h-9').exists()).toBe(true)
  })

  it('renders with custom radius', () => {
    const wrapper = mount(Avatar, {
      props: {
        radius: 'full',
      },
    })
    expect(wrapper.find('.rounded-full').exists()).toBe(true)
  })

  it('displays image when src is provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        src: 'https://example.com/avatar.jpg',
        alt: 'User Avatar',
      },
    })

    const img = wrapper.find('[data-testid="avatar-image"]')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://example.com/avatar.jpg')
    expect(img.attributes('alt')).toBe('User Avatar')
  })

  it('displays fallback text when provided', () => {
    const wrapper = mount(Avatar, {
      props: {
        fallback: 'JD',
      },
    })

    expect(wrapper.find('[data-testid="avatar-fallback"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('JD')
  })

  it('displays default icon when no src or fallback provided', () => {
    const wrapper = mount(Avatar)

    expect(wrapper.find('[data-testid="avatar-fallback"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="icon"]').attributes('data-icon')).toBe('mdi:account-circle')
  })

  it('applies correct size classes for different sizes', () => {
    const sizes = [
      { size: '3xs', class: 'w-4 h-4' },
      { size: '2xs', class: 'w-5 h-5' },
      { size: 'xs', class: 'w-6 h-6' },
      { size: 'sm', class: 'w-7 h-7' },
      { size: 'md', class: 'w-8 h-8' },
      { size: 'lg', class: 'w-9 h-9' },
      { size: 'xl', class: 'w-10 h-10' },
      { size: '2xl', class: 'w-11 h-11' },
      { size: '3xl', class: 'w-12 h-12' },
    ]

    sizes.forEach(({ size, class: expectedClass }) => {
      const wrapper = mount(Avatar, {
        props: { size: size as any },
      })

      const [widthClass, heightClass] = expectedClass.split(' ')
      expect(wrapper.find(`.${widthClass}`).exists()).toBe(true)
      expect(wrapper.find(`.${heightClass}`).exists()).toBe(true)
    })
  })

  it('applies correct radius classes for different radius values', () => {
    const radiusOptions = [
      { radius: 'sm', class: 'rounded-sm' },
      { radius: 'md', class: 'rounded-md' },
      { radius: 'lg', class: 'rounded-lg' },
      { radius: 'full', class: 'rounded-full' },
    ]

    radiusOptions.forEach(({ radius, class: expectedClass }) => {
      const wrapper = mount(Avatar, {
        props: { radius: radius as any },
      })

      expect(wrapper.find(`.${expectedClass}`).exists()).toBe(true)
    })
  })

  it('has correct default classes', () => {
    const wrapper = mount(Avatar)
    const root = wrapper.find('[data-testid="avatar-root"]')

    expect(root.classes()).toContain('qh-avatar-root')
    expect(root.classes()).toContain('inline-flex')
    expect(root.classes()).toContain('items-center')
    expect(root.classes()).toContain('justify-center')
    expect(root.classes()).toContain('overflow-hidden')
  })
})
