import React from "react";
import App from "next/app";
import { appWithTranslation } from "../utils/i18n";
import "../css/index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(MyApp);
