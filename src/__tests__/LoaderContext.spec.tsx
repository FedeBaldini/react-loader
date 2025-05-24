import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

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
  it("toggles the loader", async () => {
    render(
      <LoaderProvider>
        <MockApp />
      </LoaderProvider>
    );

    expect(screen.queryByText(/is loading/i)).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /set loading/i }));
    expect(screen.getByText(/is loading/i)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /stop loading/i }));
    expect(screen.queryByText(/is loading/i)).not.toBeInTheDocument();
  });
});
