import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "../common/components/Layout";
import { useEffect } from "react";
import { getCurrentUser } from "../common/api/profile";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    (async () => {
      try {
        const res = await getCurrentUser();
        console.log("response: ", res);
      } catch (err) {
        console.log("get profile err: ", err);
      }
    })();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  );
}
