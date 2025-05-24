import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoaderProvider } from "react-loader-ts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoaderProvider>
      <Component {...pageProps} />
    </LoaderProvider>
  );
}
