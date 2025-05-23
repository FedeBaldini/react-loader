import { useContext } from "react";

import { ILoaderContext, LoaderContext } from "../contexts";

/**
 * Custom hook to access the loader context.
 *
 * @returns {ILoaderContext} The current loader context value, including loading state and setter.
 *
 * @example
 * const { isLoading, setLoading } = useLoader();
 */
export function useLoader(): ILoaderContext {
  return useContext<ILoaderContext>(LoaderContext);
}
