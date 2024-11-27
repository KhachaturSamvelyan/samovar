import HeadProvider from "providers/HeadProvider/HeadProvider";
import "../app/assets/styles/globals.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeadProvider>
      <Component {...pageProps} />
    </HeadProvider>
  );
}

export default MyApp;
