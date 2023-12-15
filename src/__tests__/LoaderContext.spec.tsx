import { fireEvent, render, screen } from "@testing-library/react";

import { LoaderProvider } from "../contexts";
import { useLoader } from "../hooks";

function MockApp() {
  const { isLoading, setLoading } = useLoader();

  return (
    <>
      <button type="button" onClick={() => setLoading(true)}>
        Set Loading
      </button>
      <button type="button" onClick={() => setLoading(false)}>
        Stop Loading
      </button>
      {isLoading && <span>Is Loading</span>}
    </>
  );
}

describe("LoaderProvider", () => {
  it("toggles the loader", () => {
    render(
      <LoaderProvider>
        <MockApp />
      </LoaderProvider>
    );

    expect(screen.queryByText(/is loading/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /set loading/i }));
    expect(screen.getByText(/is loading/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /stop loading/i }));
    expect(screen.queryByText(/is loading/i)).not.toBeInTheDocument();
  });
});
