import { LoaderProps } from "./types";

export function CircleDots({ className, style }: LoaderProps) {
  return (
    <div
      className={`circle-dot-container ${className ?? ""}`}
      style={style}
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
