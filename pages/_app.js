import React from "react";
import App from "next/app";
import { appWithTranslation } from "../utils/i18n";
import { motion } from "framer-motion";
import "../css/index.css";
//import { ThemeProvider } from "../context/ThemeContext";
import { ThemeProvider } from "next-themes";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    pageProps: {
      namespacesRequired: ["common"]
    }
  }

};

export default appWithTranslation(MyApp);
