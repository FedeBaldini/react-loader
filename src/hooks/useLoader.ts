import { useContext } from "react";

import { LoaderContext, ILoaderContext } from "../contexts/LoaderContext";

export function useLoader() {
  return useContext<ILoaderContext>(LoaderContext);
}
