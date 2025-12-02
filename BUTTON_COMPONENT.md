# Button Component

A reusable, customizable button component with support for multiple variants and color schemes, including Palestine flag colors.

## Import

```tsx
import Button from "./components/Button";
import { colors } from "./components/Button"; // For accessing color values
```

## Color Palette

The Button component comes with a predefined color palette inspired by the Palestinian flag:

```tsx
const colors = {
  palestine: "#00732F", // Green from Palestinian flag
  palestineRed: "#CE1126", // Red from Palestinian flag
  palestineBlack: "#000000", // Black from Palestinian flag
  palestineWhite: "#FFFFFF", // White from Palestinian flag
  green: "#00732F",
  red: "#CE1126",
  blue: "#007BFF",
  gray: "#6C757D",
  dark: "#343A40",
  light: "#F8F9FA",
};
```

## Props

| Prop        | Type                                                    | Default       | Description                               |
| ----------- | ------------------------------------------------------- | ------------- | ----------------------------------------- |
| `variant`   | `"primary"` \| `"secondary"` \| `"outline"` \| `"text"` | `"primary"`   | Button style variant                      |
| `color`     | `ButtonColor`                                           | `"palestine"` | Color from the palette                    |
| `size`      | `"small"` \| `"medium"` \| `"large"`                    | `"medium"`    | Button size                               |
| `fullWidth` | `boolean`                                               | `false`       | Makes button take full width of container |
| `children`  | `React.ReactNode`                                       | required      | Button content                            |
| `style`     | `React.CSSProperties`                                   | -             | Additional inline styles                  |
| ...props    | `ButtonHTMLAttributes`                                  | -             | All standard button attributes            |

## Variants

### Primary

Solid background with white text

```tsx
<Button variant="primary" color="palestine">
  Click me
</Button>
```

### Secondary

Transparent background with colored border and text

```tsx
<Button variant="secondary" color="palestineRed">
  Click me
</Button>
```

### Outline

White background with colored border and text

```tsx
<Button variant="outline" color="blue">
  Click me
</Button>
```

### Text

Transparent background, no border, colored text

```tsx
<Button variant="text" color="dark">
  Click me
</Button>
```

## Usage Examples

### Basic Usage

```tsx
<Button>Default Button</Button>
```

### With Different Colors

```tsx
<Button color="palestine">Palestine Green</Button>
<Button color="palestineRed">Palestine Red</Button>
<Button color="palestineBlack">Palestine Black</Button>
<Button color="blue">Blue</Button>
```

### With Different Sizes

```tsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```

### With Different Variants

```tsx
<Button variant="primary" color="palestine">Primary</Button>
<Button variant="secondary" color="palestine">Secondary</Button>
<Button variant="outline" color="palestine">Outline</Button>
<Button variant="text" color="palestine">Text</Button>
```

### Full Width Button

```tsx
<Button fullWidth>Full Width Button</Button>
```

### With Custom Styles

```tsx
<Button style={{ marginTop: "1rem", fontWeight: "bold" }}>Custom Style</Button>
```

### With onClick Handler

```tsx
<Button color="palestineRed" onClick={() => alert("Button clicked!")}>
  Click Me
</Button>
```

### Disabled Button

```tsx
<Button disabled>Disabled Button</Button>
```

### As Submit Button

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" color="palestine">
    Submit Form
  </Button>
</form>
```

## Real-World Examples

### Navigation Button

```tsx
<Button variant="primary" color="palestine">
  {t("navbar.howToHelp")}
</Button>
```

### Call-to-Action Button

```tsx
<Button
  variant="primary"
  color="palestine"
  size="large"
  style={{ alignSelf: "flex-start" }}
>
  {t("landing.learnMore")}
</Button>
```

### Language Switcher

```tsx
<Button
  variant={isActive ? "primary" : "outline"}
  color="palestine"
  size="small"
  onClick={() => changeLanguage("en")}
>
  EN
</Button>
```

## Customization

You can extend the color palette by modifying the `colors` object in `Button.tsx`:

```tsx
export const colors = {
  // ... existing colors
  custom: "#YOUR_COLOR",
} as const;
```

Then use it:

```tsx
<Button color="custom">Custom Color Button</Button>
```

## Accessibility

The Button component:

- Maintains proper focus states
- Supports all standard button attributes
- Works with keyboard navigation
- Supports `aria-*` attributes

Example with accessibility:

```tsx
<Button aria-label="Help button" aria-pressed={isPressed} role="button">
  Help
</Button>
```
