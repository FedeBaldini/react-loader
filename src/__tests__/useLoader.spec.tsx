import { PropsWithChildren } from "react";

import { act, renderHook } from "@testing-library/react";

import { LoaderProvider } from "../contexts";
import { useLoader } from "../hooks/useLoader";

describe("hooks / useLoader", () => {
  function Wrapper({ children }: PropsWithChildren) {
    return <LoaderProvider>{children}</LoaderProvider>;
  }

  it("toggles loader", () => {
    const { result } = renderHook(() => useLoader(), {
      wrapper: Wrapper
    });

    expect(result.current.isLoading).toBe(false);

    act(() => {
      result.current.setLoading(true);
    });

    expect(result.current.isLoading).toBe(true);
  });
});
