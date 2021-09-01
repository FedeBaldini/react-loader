import { CSSProperties, FC } from "react";
import classNames from "classnames";

import "./Loader.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Loader: FC<Props> = ({ className, style }) => (
  <div
    className={classNames("loader", className)}
    style={style}
    data-testid="Loader"
  />
);
