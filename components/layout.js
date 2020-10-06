import Header from "./header";
import Footer from "./footer";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Layout({ children, mainClasses = "", isLight = false }) {
  const { storedTheme } = useContext(ThemeContext);
  debugger;
  return (
    <div
      className={`${
        storedTheme === "dark" ? "dark" : "light"
      } flex flex-col min-h-screen`}
    >
      <Header />
      <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
