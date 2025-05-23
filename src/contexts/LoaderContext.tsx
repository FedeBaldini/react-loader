import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState
} from "react";

/**
 * Interface for the Loader context.
 *
 * @property {boolean} isLoading - Current loading state.
 * @property {Dispatch<SetStateAction<boolean>>} setLoading - Function to update the loading state.
 */
export interface ILoaderContext {
  setLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

const DEFAULT_CONTEXT_VALUE: ILoaderContext = {
  setLoading: () => {},
  isLoading: false
};

/**
 * React context used to share loader state across the application.
 */
export const LoaderContext = createContext(DEFAULT_CONTEXT_VALUE);

/**
 * Exported context provider component to be used in component trees.
 */
export const LoaderContextProvider = LoaderContext.Provider;

/**
 * Context provider for managing loading state across the application.
 *
 * @param {PropsWithChildren} props - React props containing children elements.
 */
export function LoaderProvider({ children }: PropsWithChildren) {
  const [isLoading, setLoading] = useState(false);

  const value = useMemo(
    () => ({
      ...DEFAULT_CONTEXT_VALUE,
      isLoading,
      setLoading
    }),
    [isLoading]
  );

  return (
    <LoaderContextProvider value={value}>{children}</LoaderContextProvider>
  );
}
