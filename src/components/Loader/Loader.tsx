import { Variant } from "../../types";
import { CircleDots } from "./CircleDots";
import { Dots } from "./Dots";

/**
 * Props for the `Loader` component.
 *
 * @property {Variant} [variant] - The style of the loader animation. Defaults to `"dots"`.
 * @property {boolean} [inline] - Whether to render the loader inline without a wrapping container. Defaults to `false`.
 * @property {string} [containerClassName] - Optional class name for the loader's container when not inline.
 * @property {string} [loaderClassName] - Optional class name applied directly to the loader animation.
 */
export interface Props {
  variant?: Variant;
  inline?: boolean;
  containerClassName?: string;
  loaderClassName?: string;
}

/**
 * Loader component that displays an animated loading indicator.
 *
 * - Supports multiple visual variants (e.g., "dots", "circle-dots").
 * - Can be rendered inline or wrapped in a container for layout control.
 *
 * @param {Props} props - The props to configure the loader's behavior and style.
 * @returns {JSX.Element} A loader element, optionally wrapped in a container.
 *
 * @example
 * <Loader variant="circle-dots" inline />
 */
export function Loader({
  variant = "dots",
  inline = false,
  containerClassName,
  loaderClassName
}: Props) {
  const loaderProps = {
    "data-loader": variant,
    "aria-live": "polite" as const,
    role: "status",
    "aria-busy": true,
    ...(inline ? { "data-inline": true } : {}),
    className: loaderClassName
  };

  const loader =
    variant === "circle-dots" ? (
      <CircleDots {...loaderProps} />
    ) : (
      <Dots {...loaderProps} />
    );

  return inline ? (
    loader
  ) : (
    <div
      data-loader-container
      className={containerClassName}
      data-testid="loader-container"
    >
      {loader}
    </div>
  );
}
