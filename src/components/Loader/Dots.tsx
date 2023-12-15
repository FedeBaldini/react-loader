import { LoaderProps } from "./types";

export function Dots({ className, style }: LoaderProps) {
  return (
    <div
      className={`dot-container ${className ?? ""}`}
      style={style}
      data-testid="loader"
    >
      <div className="first-dot"></div>
      <div className="second-dot"></div>
      <div className="third-dot"></div>
    </div>
  );
}
