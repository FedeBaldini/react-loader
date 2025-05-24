import { HTMLAttributes } from "react";

export function Dots(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} data-testid="loader">
      <div />
      <div />
      <div />
    </div>
  );
}
