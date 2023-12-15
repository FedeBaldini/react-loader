# React Loader TS

https://www.npmjs.com/package/react-loader-ts

[react-loader-ts](https://www.npmjs.com/package/react-loader-ts) is a `TypeScript/React` library that offers a customizable `Loader` component, a `LoaderContext` to manage the loader state for the entire application, and other useful components.

## Installation

### Using yarn

`yarn add react-loader-ts`

### Using npm

`npm install --save react-loader-ts`

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/55654811/131927627-3678fcd6-34d4-4bc3-9504-325235a0a531.gif)

## Uasage

_To enable the library, wrap your application with the `LoaderProvider`._

Here's a quick example:

_app.tsx_

```
...otherImports;
import { TestLoading } from "./TestLoading";
import { LoaderProvider } from "react-loader-ts";

export default function Application() {
  return (
    <LoaderProvider>
      <TestLoading />
    </LoaderProvider>
  );
}
```

_TestLoading.tsx_

```
import { useLoader, Loader } from "react-loader-ts";

export function TestLoading() {
  const { isLoading, setLoading } = useLoader();

  return (
    <>
      <button onClick={() => setLoading(!isLoading)}>Toggle loading</button>
      {isLoading && <Loader />}
    </>
  );
}
```

## Components

### Loader

| Property           | Type          | Optional | Default      | Description                                         |
| ------------------ | ------------- | -------- | ------------ | --------------------------------------------------- |
| variant            | Variant       | true     | Variant.Dots | Change the loader variant (`CircleDots` or `Dots`). |
| containerClassName | string        | true     | undefined    | Add a custom class to the loader container.         |
| containerStyle     | CSSProperties | true     | undefined    | Add custom styles to the loader container.          |
| loaderClassName    | string        | true     | undefined    | Add a custom class to the loader.                   |
| loaderStyle        | string        | true     | undefined    | Add custom styles to the loader.                    |

**_Example:_**

```
import { Loader, Variant } from "react-loader-ts";

<Loader
  variant={Variant.Dots}
  containerClassName="custom-container-class"
  containerStyle={{ backgroundColor: "red" }}
  loaderClassName="custom-loader-class"
  loaderStyle={{ width: "50px" }}
 />
```

### WithLoader

This component automatically renders the loader when it's loading and it renders the children when it isn't.

By default the component uses the values from `LoaderContext` but you can override that behavior using the `isLoading` prop.

| Property           | Type          | Optional | Default      | Description                                                           |
| ------------------ | ------------- | -------- | ------------ | --------------------------------------------------------------------- |
| isLoading          | boolean       | true     | undefined    | Override the default logic and don't use the `LoaderContext` values.  |
| loader             | ReactNode     | true     | undefined    | Override the default Loader component and provide a custom one.       |
| variant            | Variant       | true     | Variant.Dots | Change the loader variant (`CircleDots` or `Dots`).                   |
| containerClassName | string        | true     | undefined    | Add a custom class to the loader container.                           |
| containerStyle     | CSSProperties | true     | undefined    | Add custom styles to the loader container.                            |
| loaderClassName    | string        | true     | undefined    | Add a custom class to the loader.                                     |
| loaderStyle        | string        | true     | undefined    | Add custom styles to the loader.                                      |

**_Example:_**

```
import { WithLoader } from "react-loader-ts";

// It uses the default isLoading value from LoaderContext
<WithLoader>children</WithLoader>

// It uses the provided isLoading value
<WithLoader isLoading>children</WithLoader>

// It uses the provided loader component
<WithLoader loader={<>custom loader component</>}>children</WithLoader>
```
