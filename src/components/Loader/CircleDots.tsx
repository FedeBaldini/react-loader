import classNames from "classnames";

import { WithClassname } from "../../types";

export function CircleDots({ className }: WithClassname) {
  return (
    <div
      className={classNames("circle-dot-container", className)}
      data-testid="loader"
    >
      <div className="circle-dot" />
      <div className="circle-dot" />
      <div className="circle-dot" />
      <div className="circle-dot" />
      <div className="circle-dot" />
      <div className="circle-dot" />
    </div>
  );
}
