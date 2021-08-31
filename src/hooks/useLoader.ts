import { useContext } from "react";

import { LoaderContext, ILoaderContext } from "../LoaderContext";

export function useLoader() {
  return useContext<ILoaderContext>(LoaderContext);
}
