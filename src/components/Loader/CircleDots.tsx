import { CSSProperties, HTMLAttributes } from "react";

export function CircleDots(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} data-testid="loader">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          style={{ "--loader-dot-index": index + 1 } as CSSProperties}
        />
      ))}
    </div>
  );
}
