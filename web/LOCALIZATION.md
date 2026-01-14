# Localization Setup with i18next

This project uses [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/) for internationalization (i18n) support.

## Features

- 🌍 Multi-language support (English, Spanish, French)
- 🔍 Automatic language detection from browser settings
- 💾 Language preference saved in localStorage and cookies
- 🎯 TypeScript support with type-safe translations
- 🔄 Dynamic language switching without page reload

## File Structure

```
src/
├── i18n.ts                    # i18next configuration
├── i18next.d.ts              # TypeScript type definitions
├── locales/
│   ├── en/
│   │   └── translation.json  # English translations
│   ├── es/
│   │   └── translation.json  # Spanish translations
│   └── fr/
│       └── translation.json  # French translations
└── components/
    └── LanguageSwitcher.tsx  # Reusable language selector component
```

## Usage

### 1. Using translations in components

```tsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
      <p>{t("navbar.howToHelp")}</p>
    </div>
  );
}
```

### 2. Changing language programmatically

```tsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage("es"); // Switch to Spanish
  };

  return <button onClick={handleLanguageChange}>Cambiar a Español</button>;
}
```

### 3. Using the LanguageSwitcher component

```tsx
import LanguageSwitcher from "./components/LanguageSwitcher";

function MyComponent() {
  return (
    <div>
      <LanguageSwitcher />
    </div>
  );
}
```

### 4. Accessing current language

```tsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { i18n } = useTranslation();

  return <div>Current language: {i18n.language}</div>;
}
```

## Adding New Translations

### 1. Add a new language

1. Create a new folder in `src/locales/` (e.g., `de` for German)
2. Create a `translation.json` file with your translations
3. Import and add it to `src/i18n.ts`:

```typescript
import deTranslation from "./locales/de/translation.json";

const resources = {
  // ... existing languages
  de: {
    translation: deTranslation,
  },
};
```

4. Add the language to the LanguageSwitcher component (optional)

### 2. Add new translation keys

Add the same key to all language files:

**en/translation.json**

```json
{
  "myNewKey": "My new translation"
}
```

**es/translation.json**

```json
{
  "myNewKey": "Mi nueva traducción"
}
```

**fr/translation.json**

```json
{
  "myNewKey": "Ma nouvelle traduction"
}
```

### 3. Nested translations

Use dot notation for nested keys:

```json
{
  "navbar": {
    "logo": "LOGO",
    "howToHelp": "How to help?"
  },
  "footer": {
    "copyright": "© 2025 Europe for Palestine"
  }
}
```

Usage: `t("footer.copyright")`

## Advanced Features

### Interpolation

```json
{
  "welcome": "Welcome, {{name}}!"
}
```

```tsx
t("welcome", { name: "John" }); // Output: "Welcome, John!"
```

### Pluralization

```json
{
  "itemCount": "{{count}} item",
  "itemCount_plural": "{{count}} items"
}
```

```tsx
t("itemCount", { count: 1 }); // "1 item"
t("itemCount", { count: 5 }); // "5 items"
```

### Context

```json
{
  "friend": "A friend",
  "friend_male": "A boyfriend",
  "friend_female": "A girlfriend"
}
```

```tsx
t("friend", { context: "male" }); // "A boyfriend"
```

## Configuration

The i18n configuration can be modified in `src/i18n.ts`:

- **fallbackLng**: Default language when detection fails (currently "en")
- **debug**: Enable console logging for development
- **detection**: Configure how the user's language is detected

## TypeScript Support

The project includes type definitions for autocomplete and type checking of translation keys. Update `src/i18next.d.ts` if you modify the translation structure.

## Testing Translations

To test different languages without changing browser settings:

1. Use the LanguageSwitcher component
2. Add `?lng=es` to the URL (e.g., `http://localhost:3000?lng=es`)
3. Open browser console and run: `window.localStorage.setItem('i18nextLng', 'es')`

## Resources

- [i18next Documentation](https://www.i18next.com/)
- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Browser Language Detector](https://github.com/i18next/i18next-browser-languageDetector)
