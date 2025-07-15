import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { light } from "@/scss/MaterialTheme";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";

import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";
import client from "@/apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, Redux, MUI, Apollo Client ...
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}