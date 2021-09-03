# React Loader TS

https://www.npmjs.com/package/react-loader-ts

`react-loader-ts` provides a customizable Loader component, a LoaderContext to handle the loader state for the whole application and other usefull components.

## Installation

### Using yarn

`yarn add react-loader-ts`

### Using npm

`npm install --save react-loader-ts`

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/55654811/131927627-3678fcd6-34d4-4bc3-9504-325235a0a531.gif)

## Uasage

_To make the library works you need to wrap your app with the `LoaderProvider`._

Here is a quick example on how to use the **react-loader-ts** library:

_index.tsx_

```
import React from "react";
import ReactDOM from "react-dom";
import { LoaderProvider } from "react-loader-ts";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

_App.tsx_

```
import { useLoader, Loader } from "react-loader-ts";

function App() {
  const { isLoading, setLoading } = useLoader();

  return (
    <>
      <button onClick={() => setLoading(!isLoading)}>Toggle loading</button>
      {isLoading && <Loader />}
    </>
  );
}

export default App;
```

## Components

### Loader

| Property           | Type          | Optional | Default      | Description                                                       |
| ------------------ | ------------- | -------- | ------------ | ----------------------------------------------------------------- |
| variant            | Variant       | true     | Variant.Dots | use this field to change the loader variant (`CirlceDots - Dots`) |
| containerClassName | string        | true     | undefined    | use this field to add custom class to the loader container        |
| containerStyle     | CSSProperties | true     | undefined    | use this field to add custom style on the loader container        |
| loaderClassName    | string        | true     | undefined    | use this field to add custom class to the loader                  |
| loaderStyle        | string        | true     | undefined    | use this field to add custom style to the loader                  |

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

By default the component uses the values from `LoaderContext` but if needed is possible to override that behaviour by using the `isLoading` prop.

| Property           | Type          | Optional | Default      | Description                                                                         |
| ------------------ | ------------- | -------- | ------------ | ----------------------------------------------------------------------------------- |
| isLoading          | boolean       | true     | undefined    | use this field to override the default logic and don't use the LoaderContext values |
| loader             | ReactNode     | true     | undefined    | use this field to override the default Loader component and provide a custom one    |
| variant            | Variant       | true     | Variant.Dots | use this field to change the loader variant (`CirlceDots - Dots`)                   |
| containerClassName | string        | true     | undefined    | use this field to add custom class to the loader container                          |
| containerStyle     | CSSProperties | true     | undefined    | use this field to add custom style on the loader container                          |
| loaderClassName    | string        | true     | undefined    | use this field to add custom class to the loader                                    |
| loaderStyle        | string        | true     | undefined    | use this field to add custom style to the loader                                    |

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
