import { useContext } from "react";

import { ILoaderContext, LoaderContext } from "../contexts";

export function useLoader() {
  return useContext<ILoaderContext>(LoaderContext);
}
