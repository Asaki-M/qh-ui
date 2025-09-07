import { config } from '@vue/test-utils'
import { beforeEach, vi } from 'vitest'

// Mock iconify icons
vi.mock('@iconify/vue', () => ({
  Icon: {
    name: 'Icon',
    props: ['icon', 'width', 'height'],
    template: '<div data-testid="icon" :data-icon="icon"></div>',
  },
}))

// Mock reka-ui components for testing
const rekaUiMocks = {
  AvatarRoot: { name: 'AvatarRoot', template: '<div data-testid="avatar-root"><slot /></div>' },
  AvatarImage: { name: 'AvatarImage', props: ['src', 'alt'], template: '<img data-testid="avatar-image" :src="src" :alt="alt" />' },
  AvatarFallback: { name: 'AvatarFallback', template: '<div data-testid="avatar-fallback"><slot /></div>' },
  CheckboxRoot: { name: 'CheckboxRoot', props: ['checked', 'disabled'], template: '<div data-testid="checkbox-root"><slot /></div>' },
  CheckboxIndicator: { name: 'CheckboxIndicator', template: '<div data-testid="checkbox-indicator"><slot /></div>' },
  ComboboxRoot: { name: 'ComboboxRoot', template: '<div data-testid="combobox-root"><slot /></div>' },
  ComboboxAnchor: { name: 'ComboboxAnchor', template: '<div data-testid="combobox-anchor"><slot /></div>' },
  ComboboxInput: { name: 'ComboboxInput', template: '<input data-testid="combobox-input" />' },
  ComboboxTrigger: { name: 'ComboboxTrigger', template: '<button data-testid="combobox-trigger"><slot /></button>' },
  ComboboxContent: { name: 'ComboboxContent', template: '<div data-testid="combobox-content"><slot /></div>' },
  ComboboxEmpty: { name: 'ComboboxEmpty', template: '<div data-testid="combobox-empty"><slot /></div>' },
  ComboboxGroup: { name: 'ComboboxGroup', template: '<div data-testid="combobox-group"><slot /></div>' },
  ComboboxLabel: { name: 'ComboboxLabel', template: '<div data-testid="combobox-label"><slot /></div>' },
  ComboboxItem: { name: 'ComboboxItem', template: '<div data-testid="combobox-item"><slot /></div>' },
  ComboboxItemIndicator: { name: 'ComboboxItemIndicator', template: '<div data-testid="combobox-item-indicator"><slot /></div>' },
  ComboboxSeparator: { name: 'ComboboxSeparator', template: '<div data-testid="combobox-separator"></div>' },
  ComboboxViewport: { name: 'ComboboxViewport', template: '<div data-testid="combobox-viewport"><slot /></div>' },
  NumberFieldRoot: { name: 'NumberFieldRoot', template: '<div data-testid="numberfield-root"><slot /></div>' },
  NumberFieldInput: { name: 'NumberFieldInput', template: '<input data-testid="numberfield-input" type="number" />' },
  NumberFieldIncrement: { name: 'NumberFieldIncrement', template: '<button data-testid="numberfield-increment"><slot /></button>' },
  NumberFieldDecrement: { name: 'NumberFieldDecrement', template: '<button data-testid="numberfield-decrement"><slot /></button>' },
  PinInputRoot: { name: 'PinInputRoot', template: '<div data-testid="pininput-root"><slot /></div>' },
  PinInputInput: { name: 'PinInputInput', template: '<input data-testid="pininput-input" />' },
  RadioGroupRoot: { name: 'RadioGroupRoot', template: '<div data-testid="radiogroup-root"><slot /></div>' },
  RadioGroupItem: { name: 'RadioGroupItem', template: '<div data-testid="radiogroup-item"><slot /></div>' },
  RadioGroupIndicator: { name: 'RadioGroupIndicator', template: '<div data-testid="radiogroup-indicator"><slot /></div>' },
  SelectRoot: { name: 'SelectRoot', template: '<div data-testid="select-root"><slot /></div>' },
  SelectTrigger: { name: 'SelectTrigger', template: '<button data-testid="select-trigger"><slot /></button>' },
  SelectValue: { name: 'SelectValue', template: '<span data-testid="select-value"><slot /></span>' },
  SelectContent: { name: 'SelectContent', template: '<div data-testid="select-content"><slot /></div>' },
  SelectGroup: { name: 'SelectGroup', template: '<div data-testid="select-group"><slot /></div>' },
  SelectLabel: { name: 'SelectLabel', template: '<div data-testid="select-label"><slot /></div>' },
  SelectItem: { name: 'SelectItem', template: '<div data-testid="select-item"><slot /></div>' },
  SelectItemText: { name: 'SelectItemText', template: '<span data-testid="select-item-text"><slot /></span>' },
  SelectItemIndicator: { name: 'SelectItemIndicator', template: '<div data-testid="select-item-indicator"><slot /></div>' },
  SelectSeparator: { name: 'SelectSeparator', template: '<div data-testid="select-separator"></div>' },
  SelectPortal: { name: 'SelectPortal', template: '<div data-testid="select-portal"><slot /></div>' },
  SelectViewport: { name: 'SelectViewport', template: '<div data-testid="select-viewport"><slot /></div>' },
  SliderRoot: { name: 'SliderRoot', template: '<div data-testid="slider-root"><slot /></div>' },
  SliderTrack: { name: 'SliderTrack', template: '<div data-testid="slider-track"><slot /></div>' },
  SliderRange: { name: 'SliderRange', template: '<div data-testid="slider-range"></div>' },
  SliderThumb: { name: 'SliderThumb', template: '<div data-testid="slider-thumb"></div>' },
  SwitchRoot: { name: 'SwitchRoot', template: '<div data-testid="switch-root"><slot /></div>' },
  SwitchThumb: { name: 'SwitchThumb', template: '<div data-testid="switch-thumb"></div>' },
}

vi.mock('reka-ui', () => rekaUiMocks)

// Global component configuration
config.global.components = {
  ...rekaUiMocks,
}

// Reset mocks before each test
beforeEach(() => {
  vi.clearAllMocks()
})
