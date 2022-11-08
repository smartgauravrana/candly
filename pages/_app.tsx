import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "../common/components/Layout";
import { useEffect } from "react";
import { getCurrentUser } from "../common/api/profile";
import { useUserStore } from "../common/zustand";

const rootElement = document.getElementById("__next");

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { setUserData, data } = useUserStore(({ setUserData, data }) => ({
    setUserData,
    data,
  }));
  console.log("state: ", data);
  useEffect(() => {
    (async () => {
      let state = {
        loading: false,
        data: null,
      };
      try {
        const res = await getCurrentUser();
        state.data = res;
        console.log("response: ", res);
      } catch (err) {
        console.log("get profile err: ", err);
      } finally {
        setUserData(state);
      }
    })();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
