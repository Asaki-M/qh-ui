# Testing Documentation

This document describes the testing setup for the qh-ui component library.

## Testing Framework

We use **Vitest** as our testing framework, which provides:
- Fast test execution with Vite's build pipeline
- Vue Test Utils integration for component testing
- TypeScript support out of the box
- Built-in code coverage reporting

## Test Structure

### Test Files Location
All test files are located in `src/test/` directory with the naming convention:
- `ComponentName.test.ts` for each component

### Current Test Coverage
The following components have comprehensive unit tests:

- ✅ **Avatar** (`Avatar.test.ts`) - 9 tests
- ✅ **Button** (`Button.test.ts`) - 14 tests
- ✅ **Checkbox** (`Checkbox.test.ts`) - 13 tests
- ✅ **ComboBox** (`ComboBox.test.ts`) - 14 tests
- ✅ **Icon** (`Icon.test.ts`) - 12 tests
- ✅ **Input** (`Input.test.ts`) - 18 tests
- ✅ **NumberField** (`NumberField.test.ts`) - 16 tests
- ✅ **PinInput** (`PinInput.test.ts`) - 17 tests
- ✅ **RadioGroup** (`RadioGroup.test.ts`) - 18 tests
- ✅ **Select** (`Select.test.ts`) - 21 tests
- ✅ **Slider** (`Slider.test.ts`) - 18 tests
- ✅ **Switch** (`Switch.test.ts`) - 17 tests

**Total: 187 tests across 12 components**

## Running Tests

### Available Scripts

```bash
# Run tests in watch mode
pnpm test

# Run tests with UI interface
pnpm test:ui

# Run tests once (CI mode)
pnpm test:run

# Run tests with coverage report
pnpm test:coverage
```

### Test Environment

- **Test Environment**: `happy-dom` (lightweight DOM simulation)
- **Test Setup**: Vue Test Utils with component mocking
- **Coverage Provider**: `v8` (Node.js built-in coverage)

## Test Configuration

### Vitest Config (`vitest.config.ts`)
```typescript
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        'dist/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
```

### Test Setup (`src/test/setup.ts`)
The setup file includes:
- Mock implementations for `@iconify/vue` icons
- Mock implementations for all `reka-ui` components
- Global component registration for mocks
- Mock reset before each test

## Testing Patterns

### Component Testing Approach
Each component test follows this pattern:

1. **Basic Rendering**: Verify component renders without errors
2. **Props Testing**: Test all prop variations and their effects
3. **Event Handling**: Test user interactions and event emissions
4. **State Management**: Test internal state changes
5. **Conditional Rendering**: Test different rendering paths
6. **Styling**: Test CSS class applications
7. **Accessibility**: Test ARIA attributes and keyboard navigation

### Example Test Structure
```typescript
describe('ComponentName', () => {
  it('renders properly', () => {
    // Basic rendering test
  })

  it('renders with custom props', () => {
    // Props testing
  })

  it('handles user interactions', () => {
    // Event testing
  })

  it('applies custom classes', () => {
    // Styling tests
  })
})
```

### Mock Strategy
- **External Dependencies**: All external libraries (reka-ui, @iconify/vue) are mocked
- **Component Isolation**: Each component is tested in isolation
- **Predictable Behavior**: Mocks provide consistent, testable behavior

## Code Coverage

Current coverage statistics:
- **Statements**: 96.64%
- **Branches**: 96.25%
- **Functions**: 22.22%
- **Lines**: 96.64%

### Coverage Reports
Coverage reports are generated in multiple formats:
- **Text**: Console output during test runs
- **JSON**: `coverage/coverage-final.json`
- **HTML**: `coverage/index.html` (detailed interactive report)

## Best Practices

### Writing Tests
1. **Descriptive Test Names**: Use clear, descriptive test names
2. **Single Responsibility**: Each test should test one specific behavior
3. **Arrange-Act-Assert**: Structure tests with clear setup, action, and assertion phases
4. **Component Props**: Always test default and custom prop values
5. **User Interactions**: Test from user perspective (clicks, inputs, etc.)

### Maintaining Tests
1. **Update Tests with Components**: When modifying components, update corresponding tests
2. **Add Tests for New Features**: Every new feature should include tests
3. **Remove Obsolete Tests**: Clean up tests for removed functionality
4. **Mock Dependencies**: Keep external dependencies mocked for reliable testing

## Future Improvements

1. **Integration Tests**: Add tests for component interactions
2. **Visual Regression**: Consider adding visual regression testing
3. **Performance Tests**: Add performance benchmarks
4. **E2E Testing**: Consider adding end-to-end tests for critical user flows
5. **Test Utilities**: Create shared test utilities for common testing patterns

## Troubleshooting

### Common Issues

**Mock not working**:
- Ensure mocks are defined in `setup.ts`
- Check mock component names match imports

**Coverage issues**:
- Verify files are not excluded in vitest config
- Check coverage provider is properly configured

**Test timeouts**:
- Increase timeout in vitest config if needed
- Check for infinite loops or unresolved promises

### Debugging Tests
```bash
# Run specific test file
pnpm test Button.test.ts

# Run with debug output
pnpm test --reporter=verbose

# Run single test
pnpm test -t "specific test name"
```
