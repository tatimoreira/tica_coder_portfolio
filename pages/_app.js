import React from "react";
import App from "next/app";
import { appWithTranslation } from "../utils/i18n";
import "../css/index.css";
//import { ThemeProvider } from "../context/ThemeContext";
import { ThemeProvider } from 'next-themes';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp);
