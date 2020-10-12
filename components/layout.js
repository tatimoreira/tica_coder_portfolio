import Header from "./header";
import Footer from "./footer";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useTheme } from "next-themes";

function Layout({ children, mainClasses = "", isLight = false }) {
  debugger;
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "dark" : "light"
      } flex flex-col min-h-screen bg-background `}
    >
      <Header />
      <div className="sideBar">
          <div className="sideBarContent"></div>
        </div>
      <main className="flex-1  md:mr-12 md:ml-12 bg-foreground">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
