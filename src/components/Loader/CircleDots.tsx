import { FC } from "react";

import { LoaderProps } from "./types";
import "./styles/CircleDots.css";

export const CircleDots: FC<LoaderProps> = ({ className, style }) => (
  <div
    className={`circle-dot-container ${className ?? ""}`}
    style={style}
    data-testid="loader"
  >
    <div className="circle-dot"></div>
    <div className="circle-dot"></div>
    <div className="circle-dot"></div>
    <div className="circle-dot"></div>
    <div className="circle-dot"></div>
    <div className="circle-dot"></div>
  </div>
);
