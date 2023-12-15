import { CSSProperties, useMemo } from "react";

import { CircleDots } from "./CircleDots";
import { Dots } from "./Dots";
import { Variant } from "./types";

export interface Props {
  variant?: Variant;
  inline?: boolean;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  loaderClassName?: string;
  loaderStyle?: CSSProperties;
}

export function Loader({
  variant = Variant.Dots,
  inline = false,
  containerClassName,
  containerStyle,
  loaderClassName,
  loaderStyle
}: Props) {
  const loader = useMemo(() => {
    switch (variant) {
      case Variant.Dots:
        return (
          <Dots
            className={`loader-container-inline ${loaderClassName}`}
            style={loaderStyle}
          />
        );
      case Variant.CircleDots:
        return (
          <CircleDots
            className={`loader-container-inline ${loaderClassName}`}
            style={loaderStyle}
          />
        );
      default:
        return (
          <Dots
            className={`loader-container-inline ${loaderClassName}`}
            style={loaderStyle}
          />
        );
    }
  }, [variant]);

  return inline ? (
    loader
  ) : (
    <div
      className={`loader-container ${containerClassName ?? ""}`}
      style={containerStyle}
      data-testid="loader-container"
    >
      {loader}
    </div>
  );
}
