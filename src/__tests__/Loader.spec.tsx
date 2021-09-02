import { render, screen } from "@testing-library/react";

import { Loader } from "../components";

describe("Loader", () => {
  it("provides additional className", () => {
    render(<Loader className="additional-class" />);
    expect(screen.getByTestId("Loader")).toHaveClass("additional-class");
  });

  it("provides additional style", () => {
    render(<Loader style={{ color: "red" }} />);
    expect(screen.getByTestId("Loader")).toHaveStyle({ color: "red" });
  });
});