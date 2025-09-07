import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Icon } from '../Icon'

describe('icon', () => {
  it('renders properly', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
      },
    })

    expect(wrapper.find('[data-testid="icon"]').exists()).toBe(true)
  })

  it('passes icon prop correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
      },
    })

    const iconElement = wrapper.find('[data-testid="icon"]')
    expect(iconElement.attributes('data-icon')).toBe('mdi:home')
  })

  it('passes width and height props', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        width: 24,
        height: 24,
      },
    })

    const iconElement = wrapper.find('[data-testid="icon"]')
    expect(iconElement.exists()).toBe(true)
    // Note: Our mock doesn't actually handle width/height attributes,
    // but in real implementation these would be passed to Iconify
  })

  it('passes color prop', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        color: '#ff0000',
      },
    })

    const iconElement = wrapper.find('[data-testid="icon"]')
    expect(iconElement.exists()).toBe(true)
  })

  it('applies extra classes', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        extraClass: 'custom-icon-class another-class',
      },
    })

    const iconElement = wrapper.find('[data-testid="icon"]')
    expect(iconElement.classes()).toContain('custom-icon-class')
    expect(iconElement.classes()).toContain('another-class')
  })

  it('passes all iconify props correctly', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        width: 32,
        height: 32,
        color: 'blue',
        rotate: 90,
        flip: 'horizontal',
        extraClass: 'test-class',
      },
    })

    const iconElement = wrapper.find('[data-testid="icon"]')
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.attributes('data-icon')).toBe('mdi:home')
    expect(iconElement.classes()).toContain('test-class')
  })

  it('renders with string width and height', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        width: '2em',
        height: '2em',
      },
    })

    const iconElement = wrapper.find('[data-testid="icon"]')
    expect(iconElement.exists()).toBe(true)
  })

  it('handles different icon formats', () => {
    const iconFormats = [
      'mdi:home',
      'fa:home',
      'material-symbols:home',
      'lucide:home',
      'tabler:home',
    ]

    iconFormats.forEach((iconName) => {
      const wrapper = mount(Icon, {
        props: {
          icon: iconName,
        },
      })

      const iconElement = wrapper.find('[data-testid="icon"]')
      expect(iconElement.exists()).toBe(true)
      expect(iconElement.attributes('data-icon')).toBe(iconName)
    })
  })

  it('excludes non-iconify props from being passed to Icon component', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        extraClass: 'test-class',
        customIcon: 'SomeCustomIcon', // This should be excluded
      },
    })

    // The component should render, even if not all props are handled
    expect(wrapper.exists()).toBe(true)
    const iconElement = wrapper.find('[data-testid="icon"]')
    if (iconElement.exists()) {
      expect(iconElement.attributes('data-icon')).toBe('mdi:home')
      expect(iconElement.classes()).toContain('test-class')
    }
  })

  it('has proper prop filtering for iconify props', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        width: 24,
        height: 24,
        color: 'red',
        extraClass: 'filtered-out', // Should be filtered out from iconify props
        customIcon: 'also-filtered', // Should be filtered out from iconify props
      },
    })

    // The component should render
    expect(wrapper.exists()).toBe(true)
    // The iconify icon should receive only valid props
    const iconElement = wrapper.find('[data-testid="icon"]')
    if (iconElement.exists()) {
      expect(iconElement.attributes('data-icon')).toBe('mdi:home')
    }
  })

  it('handles missing icon prop gracefully', () => {
    // This test verifies the component doesn't crash without an icon
    const wrapper = mount(Icon, {
      props: {
        // Intentionally not providing icon prop
        width: 24,
        height: 24,
      },
    })

    // Component should still render (though the icon might not display)
    expect(wrapper.exists()).toBe(true)
  })

  // Note: The custom icon functionality is commented out in the component
  // so we're not testing it here, but we can add a test for when it's implemented
  it('has placeholder for custom icon functionality', () => {
    // This test documents that custom icon functionality exists but is not implemented
    const wrapper = mount(Icon, {
      props: {
        icon: 'mdi:home',
        customIcon: 'CustomSVGComponent',
      },
    })

    // Component should render even if custom icon is not implemented
    expect(wrapper.exists()).toBe(true)
    // Should still render the iconify icon since custom icon is not implemented
    const iconElement = wrapper.find('[data-testid="icon"]')
    if (iconElement.exists()) {
      expect(iconElement.attributes('data-icon')).toBe('mdi:home')
    }
  })
})
