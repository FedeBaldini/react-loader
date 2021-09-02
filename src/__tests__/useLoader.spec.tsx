import { FC, ReactNode } from "react";
import { act, renderHook } from "@testing-library/react-hooks";

import { LoaderProvider } from "../contexts";
import { useLoader } from "../hooks/useLoader";

describe("hooks / useLoader", () => {
  const Wrapper: FC<{ children?: ReactNode }> = ({ children }) => {
    return <LoaderProvider>{children}</LoaderProvider>;
  };

  it("toggles loader", () => {
    const { result } = renderHook(() => useLoader(), {
      wrapper: Wrapper,
    });

    expect(result.current.isLoading).toBe(false);

    act(() => {
      result.current.setLoading(true);
    });

    expect(result.current.isLoading).toBe(true);
  });
});