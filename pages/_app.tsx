import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
import { darkTheme } from "themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
