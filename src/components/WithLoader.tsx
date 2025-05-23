import { PropsWithChildren, ReactNode } from "react";

import { useLoader } from "../hooks";
import { Loader, Props as LoaderProps } from "./Loader";

/**
 * Props for the `WithLoader` component.
 *
 * Extends the `Loader` component's props and includes:
 * - `isLoading`: Optional boolean to manually control loading state.
 * - `loader`: Optional custom loader component to render instead of the default.
 */
export type Props = PropsWithChildren<
  LoaderProps & {
    isLoading?: boolean;
    loader?: ReactNode;
  }
>;

/**
 * Higher-order component that conditionally renders a loader or its children based on loading state.
 *
 * - Uses `isLoading` prop if provided.
 * - Falls back to loader context (`useLoader`) if `isLoading` is not set.
 *
 * @param {Props} props - Component props including loading state, loader override, and children.
 * @returns {JSX.Element} The loader or the children based on the current loading state.
 *
 * @example
 * <WithLoader isLoading={true}>
 *   <MyComponent />
 * </WithLoader>
 */
export function WithLoader({ isLoading, children, loader, ...props }: Props) {
  const { isLoading: isContextLoading } = useLoader();
  const loaderElement = loader ?? <Loader {...props} />;

  if (typeof isLoading === "boolean") {
    return isLoading ? <>{loaderElement}</> : <>{children}</>;
  } else {
    return isContextLoading ? <>{loaderElement}</> : <>{children}</>;
  }
}
