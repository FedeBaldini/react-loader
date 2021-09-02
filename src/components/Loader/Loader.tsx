import { CSSProperties, FC, useMemo } from "react";

import { Variant } from "./types";
import { CircleDots } from "./CircleDots";
import { Dots } from "./Dots";

import "./styles/Loader.css";

export interface Props {
  variant?: Variant;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  loaderClassName?: string;
  loaderStyle?: CSSProperties;
}

export const Loader: FC<Props> = ({
  variant = Variant.Dots,
  containerClassName,
  containerStyle,
  loaderClassName,
  loaderStyle,
}) => {
  const loader = useMemo(() => {
    switch (variant) {
      case Variant.Dots:
        return <Dots className={loaderClassName} style={loaderStyle} />;
      case Variant.CircleDots:
        return <CircleDots className={loaderClassName} style={loaderStyle} />;
      default:
        return <Dots className={loaderClassName} style={loaderStyle} />;
    }
  }, [variant]);

  return (
    <div
      className={`loader-container ${containerClassName ?? ""}`}
      style={containerStyle}
      data-testid="loader-container"
    >
      {loader}
    </div>
  );
};
