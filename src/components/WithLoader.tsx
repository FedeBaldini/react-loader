import {  ReactNode } from "react";

import { useLoader } from "../hooks";
import { WithChildren } from "../types";
import { Loader, Props as LoaderProps } from "./Loader";

export interface Props extends LoaderProps, WithChildren {
  isLoading?: boolean;
  loader?: ReactNode;
}

export function WithLoader({
  isLoading,
  children,
  loader,
  ...props
}: Props) {
  const { isLoading: isContextLoading } = useLoader();
  const loaderElement = loader ?? <Loader {...props} />;

  if (typeof isLoading === "boolean") {
    return isLoading ? <>{loaderElement}</> : <>{children}</>;
  } else {
    return isContextLoading ? <>{loaderElement}</> : <>{children}</>;
  }
};
