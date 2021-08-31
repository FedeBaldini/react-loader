import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useMemo,
  useState,
} from "react";

export interface ILoaderContext {
  setLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

const DEFAULT_CONTEXT_VALUE: ILoaderContext = {
  setLoading: null as unknown as Dispatch<SetStateAction<boolean>>,
  isLoading: false,
};

export const LoaderContext = createContext(DEFAULT_CONTEXT_VALUE);
export const LoaderContextProvider = LoaderContext.Provider;

export const LoaderProvider: FC = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const _file: string;
  const test = () => {};

  const value = useMemo(
    () => ({
      ...DEFAULT_CONTEXT_VALUE,
      isLoading,
      setLoading,
    }),
    [isLoading]
  );

  return (
    <LoaderContextProvider value={value}>{children}</LoaderContextProvider>
  );
};
