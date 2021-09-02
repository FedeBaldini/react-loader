import { CSSProperties, FC } from "react";

import "./Loader.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Loader: FC<Props> = ({ className, style }) => (
  <div
    className={`loader ${className}`}
    style={style}
    data-testid="Loader"
  />
);