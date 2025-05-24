import type { AppProps } from "next/app";
import { LoaderProvider } from "react-loader-ts";
import "react-loader-ts/styles/global.css";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <Component {...pageProps} />
    </LoaderProvider>
  );
}
