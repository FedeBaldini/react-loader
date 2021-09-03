import { render, screen } from "@testing-library/react";

import { WithLoader } from "../components";
import { LoaderContextProvider } from "../contexts";
import { Props } from "../components/WithLoader";

describe("WithLoader", () => {
  function renderComponent({
    isContextLoading,
    ...props
  }: Props & { isContextLoading?: boolean }) {
    return render(
      <LoaderContextProvider
        value={{ isLoading: isContextLoading ?? false, setLoading: jest.fn() }}
      >
        <WithLoader {...props}>children</WithLoader>
      </LoaderContextProvider>
    );
  }

  it("doesn't render children when it's loading", () => {
    renderComponent({ isContextLoading: true });

    expect(screen.queryByText(/children/)).not.toBeInTheDocument();
    expect(screen.getByTestId("loader-container")).toBeInTheDocument();
  });

  it("renders children when it's not loading", () => {
    renderComponent({ isContextLoading: false });

    expect(screen.getByText(/children/)).toBeInTheDocument();
    expect(screen.queryByTestId("loader-container")).not.toBeInTheDocument();
  });

  it("provides additional class name", () => {
    renderComponent({
      containerClassName: "additional-class",
      isContextLoading: true,
    });

    expect(screen.getByTestId("loader-container")).toHaveClass(
      "additional-class"
    );
  });

  it("provides a custom loading handler", () => {
    renderComponent({
      containerClassName: "additional-class",
      isLoading: true,
      isContextLoading: false,
    });

    expect(screen.getByTestId("loader-container")).toBeInTheDocument();
  });

  it("provides a custom loader component", () => {
    renderComponent({
      loader: <>custom loader</>,
      isLoading: true,
    });

    expect(screen.getByText(/custom loader/i)).toBeInTheDocument();
  });
});
