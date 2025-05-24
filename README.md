# React Loader TS

[![npm](https://img.shields.io/npm/v/react-loader-ts)](https://www.npmjs.com/package/react-loader-ts)

[react-loader-ts](https://www.npmjs.com/package/react-loader-ts) is a `TypeScript/React` library that offers a customizable `Loader` component, a `LoaderContext` to manage global loader state, and other helpful utilities.

Now fully updated for **React 19**, with modernized theming via CSS variables, native dark mode support, and optimized CSS build!

## Installation

### Using yarn

```bash
yarn add react-loader-ts
```

### Using npm

```bash
npm install react-loader-ts
```

## Features (v2.0.2)

- ✅ React 19 compatible
- 🎨 Native CSS custom properties for loader customization
- 🌙 Native dark mode support with `light-dark()`
- 🧼 Cleaned-up API: removed inline styles in favor of CSS class customization
- 🧩 Strict type safety using `Variant` union type
- 🚀 Optimized CSS build via PostCSS (autoprefixer + cssnano)
- 🪶 Lightweight and dependency-free

## Usage

_To enable the loader context, wrap your app with `LoaderProvider`:_

```tsx
import { LoaderProvider } from "react-loader-ts";
import "react-loader-ts/styles/global.css";

export default function Application() {
  return (
    <LoaderProvider>
      <YourApp />
    </LoaderProvider>
  );
}
```

```tsx
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

### Importing the global CSS

Be sure to import the generated global CSS from:

```css
import "react-loader-ts/styles/global.css";
```

This file is built via PostCSS (autoprefixer + cssnano) and published under `dist/styles/global.css`.

## Customization via CSS Variables

You can override these variables globally or within a scope:

```css
:root {
  --loader-light--color: #1799e7;
  --loader-dark--color: #66ccff;
  --loader-light--background-color: rgba(255, 255, 255, 0.5);
  --loader-dark--background-color: rgba(0, 0, 0, 0.5);

  --loader--color: light-dark(
    var(--loader-light--color),
    var(--loader-dark--color)
  );
  --loader--background-color: light-dark(
    var(--loader-light--background-color),
    var(--loader-dark--background-color)
  );

  --loader--spacing: 0.5rem;

  --loader--width: 1.25rem;
  --loader--height: 1.25rem;
  --loader--circle-width: 3.75rem;
  --loader--circle-height: 3.75rem;
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

## CSS Build and Publishing

- **PostCSS Build**: Styles located in `src/styles/global.css` are processed with PostCSS using Autoprefixer and cssnano, producing an optimized `dist/styles/global.css`.
- **Exports**: The CSS file is exposed under the subpath `"react-loader-ts/styles/global.css"` in `package.json`'s `exports`.
- **Usage**: Consumers should import the CSS directly:

  ```js
  import "react-loader-ts/styles/global.css";
  ```

## License

MIT
