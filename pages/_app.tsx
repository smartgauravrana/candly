import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  );
}
