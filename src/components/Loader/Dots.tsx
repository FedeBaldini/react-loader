import classNames from "classnames";

import { WithClassname } from "../../types";

export function Dots({ className }: WithClassname) {
  return (
    <div
      className={classNames("dot-container", className)}
      data-testid="loader"
    >
      <div className="first-dot"></div>
      <div className="second-dot"></div>
      <div className="third-dot"></div>
    </div>
  );
}
