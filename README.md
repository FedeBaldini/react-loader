# React Loader TS

[![npm](https://img.shields.io/npm/v/react-loader-ts)](https://www.npmjs.com/package/react-loader-ts)

[react-loader-ts](https://www.npmjs.com/package/react-loader-ts) is a `TypeScript/React` library that offers a customizable `Loader` component, a `LoaderContext` to manage global loader state, and other helpful utilities.

Now fully updated for **React 19**, with modernized theming via CSS variables and native dark mode support!

## Installation

### Using yarn

```bash
yarn add react-loader-ts
```

### Using npm

```bash
npm install react-loader-ts
```

## Features (v2.0.0)

- ✅ React 19 compatible
- 🎨 Native CSS custom properties for loader customization
- 🌙 Native dark mode support with `light-dark()`
- 🧼 Cleaned-up API: removed inline styles in favor of CSS class customization
- 🧩 Strict type safety using `Variant` union type
- 🪶 Lightweight and dependency-free

## Usage

_To enable the loader context, wrap your app with `LoaderProvider`:_

```tsx
// app.tsx
import { LoaderProvider } from "react-loader-ts";
import "react-loader-ts/lib/esm/styles/global.css";

export default function Application() {
  return (
    <LoaderProvider>
      <YourApp />
    </LoaderProvider>
  );
}
```

```tsx
// ExampleComponent.tsx
import { Loader, useLoader } from "react-loader-ts";

export function ExampleComponent() {
  const { isLoading, setLoading } = useLoader();

  return (
    <>
      <button onClick={() => setLoading(!isLoading)}>Toggle loading</button>
      {isLoading && <Loader />}
    </>
  );
}
```

## Customization via CSS Variables

You can override these variables globally or within a scope:

```css
:root {
  --loader-color: light-dark(#1799e7, #9fd8ff);
  --loader-size: 1.25rem;
  --loader-spacing: 0.5rem;
  --loader-background: light-dark(
    rgba(255, 255, 255, 0.5),
    rgba(10, 10, 10, 0.5)
  );
  --loader-circle-size: 3.75rem;
}
```

Make sure to enable dual color scheme support:

```css
:root {
  color-scheme: light dark;
}
```

## Components

### `Loader`

A flexible loading indicator with two variants.

| Property             | Type    | Optional | Default | Description                        |
| -------------------- | ------- | -------- | ------- | ---------------------------------- |
| `variant`            | string  | ✅       | `dots`  | `"dots"` or `"circle-dots"`        |
| `inline`             | boolean | ✅       | `false` | Renders the loader inline          |
| `containerClassName` | string  | ✅       | —       | Custom class for loader container  |
| `loaderClassName`    | string  | ✅       | —       | Custom class for the loader itself |

❌ `containerStyle` and `loaderStyle` have been removed in favor of CSS class usage and variables.

**Example:**

```tsx
<Loader
  variant="circle-dots"
  containerClassName="my-container"
  loaderClassName="my-loader"
/>
```

### `WithLoader`

Conditionally renders a loader or children based on loading state.

| Property             | Type      | Optional | Description                                         |
| -------------------- | --------- | -------- | --------------------------------------------------- |
| `isLoading`          | boolean   | ✅       | Override context and manually control loading state |
| `loader`             | ReactNode | ✅       | Provide a custom loader element                     |
| `variant`            | string    | ✅       | `"dots"` or `"circle-dots"`                         |
| `inline`             | boolean   | ✅       | Render inline                                       |
| `containerClassName` | string    | ✅       | Custom class for container                          |
| `loaderClassName`    | string    | ✅       | Custom class for loader                             |

**Example:**

```tsx
<WithLoader>Loading content here...</WithLoader>

<WithLoader isLoading={true}>Loading override</WithLoader>

<WithLoader loader={<div>Custom Spinner</div>}>Custom loading</WithLoader>
```

## Variants

```ts
export const VARIANTS = ["circle-dots", "dots"] as const;

export type Variant = (typeof VARIANTS)[number];
```

## License

MIT
