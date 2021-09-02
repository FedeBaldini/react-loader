import { FC } from "react";

import { LoaderProps } from "./types";
import "./styles/Dots.css";

export const Dots: FC<LoaderProps> = ({ className, style }) => (
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
