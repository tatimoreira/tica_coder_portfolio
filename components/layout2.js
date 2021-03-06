import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

import { useTranslation } from "react-i18next";

import Header from "./header";
import Footer from "./footer";
import NavBarItem from "./NavBarItem";
import ThemeContext from "../context/ThemeContext";
import { useTheme } from "next-themes";
import { useLocalStorage } from "../hooks/useLocalStorage";



function Layout2({ children, mainClasses = "", isLight = false }) {

    const { t, i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [lang, setLang] = useLocalStorage("lang", i18n.language);

    const navBarItems =
        [
            { title: t("aboutMe"), route: "/", color: "#1763aa" },
            { title: t("aboutWork"), route: "/about-work", color: "#1763aa" },
        ];
    const [selected, setSelected] = useState(navBarItems[0]);

    useEffect(() => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
    }, [lang]);

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;


    return (
        <div
            className={`${theme === "dark" ? "dark" : "light"
                } flex flex-col min-h-screen bg-background `}
        >
            <Head>
                <title>TatiMoreira</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Header />

            <main className='flex-1 overflow-x-auto md:mr-12 md:ml-12 bg-foreground'>
                <h2>Tatiana Moreira</h2>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout2;
