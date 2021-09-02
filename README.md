# React Loader TS

`react-loader-ts` provides a customizable Loader component and a LoaderContext to handle the loader state for the whole application.

https://www.npmjs.com/package/react-loader-ts

## Installation

### Using yarn

```yarn add react-loader-ts```

### Using npm
```npm install --save react-loader-ts```

## Uasage

Here is a quick example on how to use the **react-loader-ts** library:

*index.tsx*

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

*App.tsx*

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

## Component configuration

### Loader

| Property  | Type | Optional | Default | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| variant  | Variant | true  | Variant.Dots  | use this field to change the loader variant (`CirlceDots - Dots`) |
| containerClassName | string  | true  | undefined  | use this field to add custom class to the loader container |
| containerStyle | CSSProperties  | true  | undefined  | use this field to add custom style on the loader container |
| loaderClassName | string  | true  | undefined  | use this field to add custom class to the loader |
| loaderStyle | string  | true  | undefined  | use this field to add custom style to the loader |

***Example:***

```
import { Loader, Variant } from "react-loader-ts";

<Loader
  variant={Variant.Dots}
  containerClassName="custom-container-class"
  containerStyle={{ backgroundColor: "red" }}
  loaderClassName="custom-loader-class"
  loaderStyle={{ width: "50px }}
 />
```
