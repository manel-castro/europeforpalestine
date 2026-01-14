# UI Components

Reusable UI components organized in the `src/components/ui` folder.

## Card Component

A flexible card component with customizable background colors and styling.

### Import

```tsx
import Card from "./components/ui/Card";
import { cardColors } from "./components/ui/Card";
// Or use the barrel export:
import { Card, cardColors } from "./components/ui";
```

### Color Palette

```tsx
const cardColors = {
  dark: "#252525", // Dark gray - for cards on dark backgrounds
  darker: "#1a1a1a", // Darker gray - matches LandingApps background
  black: "#000000", // Pure black
  light: "#f5f5f5", // Light gray
  white: "#ffffff", // Pure white
  transparent: "transparent", // No background
};
```

### Props

| Prop           | Type                  | Default  | Description                   |
| -------------- | --------------------- | -------- | ----------------------------- |
| `children`     | `React.ReactNode`     | required | Card content                  |
| `color`        | `CardColor`           | `"dark"` | Background color from palette |
| `padding`      | `string`              | `"2rem"` | Card padding                  |
| `borderRadius` | `string`              | `"12px"` | Card border radius            |
| `style`        | `React.CSSProperties` | -        | Additional inline styles      |
| `className`    | `string`              | -        | CSS class name                |

### Usage Examples

#### Basic Card

```tsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

#### Card with Different Colors

```tsx
{
  /* Dark card - default */
}
<Card color="dark">
  <p>Dark background (#252525)</p>
</Card>;

{
  /* Darker card - matches section background */
}
<Card color="darker">
  <p>Darker background (#1a1a1a)</p>
</Card>;

{
  /* Light card */
}
<Card color="light">
  <p>Light background (#f5f5f5)</p>
</Card>;

{
  /* Transparent card */
}
<Card color="transparent">
  <p>No background</p>
</Card>;
```

#### Custom Padding and Border Radius

```tsx
<Card padding="1rem" borderRadius="8px">
  <p>Smaller padding and radius</p>
</Card>

<Card padding="3rem" borderRadius="24px">
  <p>Larger padding and radius</p>
</Card>
```

#### Card with Custom Styles

```tsx
<Card
  color="dark"
  style={{
    flex: "1",
    minWidth: "300px",
    maxWidth: "500px",
    border: "1px solid #333",
  }}
>
  <p>Card with additional styles</p>
</Card>
```

#### Real-World Example: App Card

```tsx
<Card
  color="darker"
  style={{
    flex: "1",
    minWidth: "300px",
    maxWidth: "500px",
  }}
>
  <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
    {t("apps.appName")}
  </h3>
  <p style={{ color: "#cccccc", marginBottom: "2rem" }}>
    {t("apps.appDescription")}
  </p>
  <div style={{ display: "flex", gap: "1rem" }}>
    <AppStoreBadge />
    <PlayStoreBadge />
  </div>
</Card>
```

#### Card Grid Layout

```tsx
<div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
  <Card color="darker" style={{ flex: "1", minWidth: "300px" }}>
    <h3>Card 1</h3>
    <p>Content...</p>
  </Card>

  <Card color="darker" style={{ flex: "1", minWidth: "300px" }}>
    <h3>Card 2</h3>
    <p>Content...</p>
  </Card>

  <Card color="darker" style={{ flex: "1", minWidth: "300px" }}>
    <h3>Card 3</h3>
    <p>Content...</p>
  </Card>
</div>
```

### Color Matching Guidelines

When using cards within sections, match or slightly differentiate the card background from the section:

- **On dark backgrounds (#1a1a1a)**: Use `color="darker"` (#1a1a1a) for seamless look or `color="dark"` (#252525) for subtle elevation
- **On white/light backgrounds**: Use `color="white"` or `color="light"`
- **On black backgrounds**: Use `color="dark"` or `color="darker"` for subtle contrast

### Combining with Other UI Components

```tsx
<Card color="darker">
  <h3>Product Card</h3>
  <p>Product description...</p>
  <Button variant="primary" color="palestine">
    Learn More
  </Button>
</Card>
```

## Button Component

See [BUTTON_COMPONENT.md](../../BUTTON_COMPONENT.md) for full Button component documentation.

### Quick Button Example

```tsx
import { Button, Card } from "./components/ui";

<Card color="darker">
  <h3>Call to Action</h3>
  <Button variant="primary" color="palestine">
    Get Started
  </Button>
</Card>;
```
