import { CSSProperties, useMemo } from "react";

import "../../styles/Loader.css";
import { CircleDots } from "./CircleDots";
import { Dots } from "./Dots";
import { Variant } from "./types";

export interface Props {
  variant?: Variant;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  loaderClassName?: string;
  loaderStyle?: CSSProperties;
}

export function Loader({
  variant = Variant.Dots,
  containerClassName,
  containerStyle,
  loaderClassName,
  loaderStyle
}: Props) {
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
}
