import { useContext } from "react";

import { LoaderContext, ILoaderContext } from "../contexts";

export function useLoader() {
  return useContext<ILoaderContext>(LoaderContext);
}