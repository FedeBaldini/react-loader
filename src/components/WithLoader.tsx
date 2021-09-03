import { FC, ReactNode } from "react";

import { useLoader } from "../hooks";
import { Loader, Props as LoaderProps } from "./Loader";

export interface Props extends LoaderProps {
  isLoading?: boolean;
  loader?: ReactNode;
}

export const WithLoader: FC<Props> = ({
  isLoading,
  children,
  loader,
  ...props
}) => {
  const { isLoading: isContextLoading } = useLoader();
  const loaderElement = loader ?? <Loader {...props} />;

  if (typeof isLoading === "boolean") {
    return isLoading ? <>{loaderElement}</> : <>{children}</>;
  } else {
    return isContextLoading ? <>{loaderElement}</> : <>{children}</>;
  }
};
