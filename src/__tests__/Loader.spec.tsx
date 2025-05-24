import { render, screen } from "@testing-library/react";

import { Loader } from "../components";
import { VARIANTS } from "../types";

describe("Loader", () => {
  it("renders a loader by default", () => {
    render(<Loader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders inline", () => {
    const { container } = render(<Loader inline />);
    expect(container.querySelector("[data-inline]")).toBeInTheDocument();
  });

  it.each(VARIANTS)(
    "provides additional classNames for %s loader",
    (variant) => {
      render(
        <Loader
          variant={variant}
          containerClassName="container-additional-class"
          loaderClassName="loader-additional-class"
        />
      );
      expect(screen.getByTestId("loader")).toHaveClass(
        "loader-additional-class"
      );
      expect(screen.getByTestId("loader-container")).toHaveClass(
        "container-additional-class"
      );
    }
  );
});
