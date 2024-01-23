import "@src/styles/globals.css";
import UrqlProvider from "@src/utils/urql/URQLProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </UrqlProvider>
  );
}
