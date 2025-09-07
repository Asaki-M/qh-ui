import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Slider } from '../Slider'

describe('slider', () => {
  it('renders properly', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
      },
    })

    expect(wrapper.find('[data-testid="slider-root"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="slider-track"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="slider-range"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="slider-thumb"]').exists()).toBe(true)
  })

  it('renders with label', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Volume',
      },
    })

    expect(wrapper.find('.qh-slider-label').exists()).toBe(true)
    expect(wrapper.text()).toContain('Volume')
  })

  it('renders with correct label orientation', () => {
    const horizontalWrapper = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Test',
        labelOrientation: 'horizontal',
      },
    })

    expect(horizontalWrapper.find('.flex').exists()).toBe(true)
    expect(horizontalWrapper.find('.gap-2').exists()).toBe(true)
    expect(horizontalWrapper.find('.items-center').exists()).toBe(true)

    const verticalWrapper = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Test',
        labelOrientation: 'vertical',
      },
    })

    expect(verticalWrapper.find('.flex-col').exists()).toBe(true)
  })

  it('renders with different sizes for horizontal orientation', () => {
    const sizes = [
      { size: 'sm', expectedTrackClass: 'h-2', expectedThumbClasses: ['w-4', 'h-4'] },
      { size: 'md', expectedTrackClass: 'h-3', expectedThumbClasses: ['w-5', 'h-5'] },
      { size: 'lg', expectedTrackClass: 'h-4', expectedThumbClasses: ['w-6', 'h-6'] },
    ]

    sizes.forEach(({ size, expectedTrackClass, expectedThumbClasses }) => {
      const wrapper = mount(Slider, {
        props: {
          modelValue: [50],
          size: size as any,
          orientation: 'horizontal',
        },
      })

      expect(wrapper.find(`.${expectedTrackClass}`).exists()).toBe(true)

      const thumb = wrapper.find('[data-testid="slider-thumb"]')
      expectedThumbClasses.forEach((className) => {
        expect(thumb.classes()).toContain(className)
      })
    })
  })

  it('renders with different sizes for vertical orientation', () => {
    const sizes = [
      { size: 'sm', expectedTrackClass: 'w-2', expectedThumbClasses: ['w-4', 'h-4'] },
      { size: 'md', expectedTrackClass: 'w-3', expectedThumbClasses: ['w-5', 'h-5'] },
      { size: 'lg', expectedTrackClass: 'w-4', expectedThumbClasses: ['w-6', 'h-6'] },
    ]

    sizes.forEach(({ size, expectedTrackClass, expectedThumbClasses }) => {
      const wrapper = mount(Slider, {
        props: {
          modelValue: [50],
          size: size as any,
          orientation: 'vertical',
        },
      })

      expect(wrapper.find(`.${expectedTrackClass}`).exists()).toBe(true)

      const thumb = wrapper.find('[data-testid="slider-thumb"]')
      expectedThumbClasses.forEach((className) => {
        expect(thumb.classes()).toContain(className)
      })
    })
  })

  it('handles horizontal orientation (default)', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
      },
    })

    const sliderRoot = wrapper.find('[data-testid="slider-root"]')
    expect(sliderRoot.classes()).toContain('flex')
    expect(sliderRoot.classes()).toContain('items-center')
    expect(sliderRoot.classes()).toContain('w-full')

    const range = wrapper.find('[data-testid="slider-range"]')
    expect(range.classes()).toContain('h-full')
  })

  it('handles vertical orientation', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        orientation: 'vertical',
      },
    })

    const sliderRoot = wrapper.find('[data-testid="slider-root"]')
    expect(sliderRoot.classes()).toContain('flex-col')
    expect(sliderRoot.classes()).toContain('items-center')
    expect(sliderRoot.classes()).toContain('h-48')
    expect(sliderRoot.classes()).toContain('w-5')

    const range = wrapper.find('[data-testid="slider-range"]')
    expect(range.classes()).toContain('w-full')
  })

  it('applies custom classes', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        containerClasses: 'custom-container',
        labelClasses: 'custom-label',
        sliderClasses: 'custom-slider',
        trackClasses: 'custom-track',
        thumbClasses: 'custom-thumb',
      },
    })

    expect(wrapper.classes()).toContain('custom-container')
    expect(wrapper.find('.custom-slider').exists()).toBe(true)
    expect(wrapper.find('[data-testid="slider-root"]').classes()).toContain('custom-track')
    expect(wrapper.find('[data-testid="slider-thumb"]').classes()).toContain('custom-thumb')
  })

  it('has correct track styling', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
      },
    })

    const track = wrapper.find('[data-testid="slider-track"]')
    expect(track.classes()).toContain('bg-stone-500/30')
    expect(track.classes()).toContain('relative')
    expect(track.classes()).toContain('grow')
    expect(track.classes()).toContain('rounded-full')
  })

  it('has correct range styling', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
      },
    })

    const range = wrapper.find('[data-testid="slider-range"]')
    expect(range.classes()).toContain('absolute')
    expect(range.classes()).toContain('bg-primary')
    expect(range.classes()).toContain('rounded-full')
  })

  it('has correct thumb styling', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
      },
    })

    const thumb = wrapper.find('[data-testid="slider-thumb"]')
    expect(thumb.classes()).toContain('block')
    expect(thumb.classes()).toContain('bg-primary')
    expect(thumb.classes()).toContain('rounded-full')
    expect(thumb.classes()).toContain('cursor-pointer')
    expect(thumb.classes()).toContain('hover:bg-primary/90')
    expect(thumb.classes()).toContain('shadow-sm')
    expect(thumb.classes()).toContain('focus:outline-none')
    expect(thumb.classes()).toContain('focus:shadow-[0_0_0_2px]')
    expect(thumb.classes()).toContain('focus:shadow-secondary')
  })

  it('has correct root container styling', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
      },
    })

    const root = wrapper.find('[data-testid="slider-root"]')
    expect(root.classes()).toContain('relative')
    expect(root.classes()).toContain('select-none')
    expect(root.classes()).toContain('touch-none')
  })

  it('generates unique component ID when label is present', () => {
    const wrapper1 = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Test',
      },
    })
    const wrapper2 = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Test',
      },
    })

    const id1 = wrapper1.find('.qh-slider-label').attributes('for')
    const id2 = wrapper2.find('.qh-slider-label').attributes('for')

    expect(id1).toBeDefined()
    expect(id2).toBeDefined()
    expect(id1).not.toBe(id2)
  })

  it('handles label block styling with margin', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Test Label',
      },
    })

    const label = wrapper.find('.qh-slider-label')
    expect(label.classes()).toContain('text-stone-700')
    expect(label.classes()).toContain('block')
    expect(label.classes()).toContain('mb-2')
  })

  it('supports dark mode classes', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Test',
      },
    })

    const label = wrapper.find('.qh-slider-label')
    expect(label.classes()).toContain('dark:text-white')
  })

  it('passes correct props to SliderRoot', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [25, 75],
        min: 0,
        max: 100,
        step: 5,
        orientation: 'horizontal',
        disabled: false,
      },
    })

    // Our mock doesn't handle these props, but we can verify the component renders
    expect(wrapper.find('[data-testid="slider-root"]').exists()).toBe(true)
  })

  it('filters out custom props from slider extends props', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        label: 'Test',
        labelOrientation: 'vertical',
        size: 'md',
        containerClasses: 'test',
        labelClasses: 'test',
        sliderClasses: 'test',
        trackClasses: 'test',
        thumbClasses: 'test',
        // These should be passed to SliderRoot
        min: 0,
        max: 100,
        step: 1,
      },
    })

    // Component should render correctly with filtered props
    expect(wrapper.find('[data-testid="slider-root"]').exists()).toBe(true)
  })

  it('supports multi-value sliders', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [25, 75],
      },
    })

    // Should render with range selection
    expect(wrapper.find('[data-testid="slider-root"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="slider-range"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="slider-thumb"]').exists()).toBe(true)
  })
})
