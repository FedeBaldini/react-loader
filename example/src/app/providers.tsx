"use client";

import { ReactNode } from "react";

import { LoaderProvider } from "react-loader-ts";

export function Providers({ children }: { children: ReactNode }) {
  return <LoaderProvider>{children}</LoaderProvider>;
}
