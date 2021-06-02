import React, { useContext, useEffect, useState } from "react";
//import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

import { useTranslation } from "react-i18next";
import { faFemale, faLaptop, faSmile, faCode, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {  faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from "./header";
import UpperHeader from "./UpperHeader";
import { Head } from "./Head";

import Footer from "./footer";
import NavBarItem from "./NavBarItem";
import ThemeContext from "../context/ThemeContext";
import { useTheme } from "next-themes";
import { useLocalStorage } from "../hooks/useLocalStorage";



function Layout({ children, mainClasses = "", isLight = false }) {

  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useLocalStorage("lang", i18n.language);

  const navBarItems =
    [
      { title: t("aboutMe"), route: "/", color: "#1763aa", icon: <FontAwesomeIcon icon={faSmile} /> },
      { title: t("aboutWork"), route: "/about-work", color: "#7e7e7e", icon: <FontAwesomeIcon icon={faLaptop} /> },
      { title: t("experience"), route: "/experience", color: "#7e7e7e", icon: <FontAwesomeIcon icon={faCode} /> },
      { title: t("contact"), route: "/contact", color: "#7e7e7e", icon: <FontAwesomeIcon icon={faAddressCard} /> },
    ];

    const ContactItems =
    [
      { title: t("aboutMe"), route: "/", color: "#1763aa", icon: <FontAwesomeIcon icon={faSmile} /> },
      { title: t("aboutWork"), route: "/about-work", color: "#7e7e7e", icon: <FontAwesomeIcon icon={faLaptop} /> },
      { title: t("experience"), route: "/experience", color: "#7e7e7e", icon: <FontAwesomeIcon icon={faCode} /> },
      { title: t("contact"), route: "/contact", color: "#7e7e7e", icon: <FontAwesomeIcon icon={faAddressCard} /> },
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
      <Head title="TatiMoreira" link="/static/imgs/favicon.ico">
      </Head>
      <UpperHeader />
      <Header />
      <main className='flex-1 overflow-x-auto md:mr-12 md:ml-12  font-custom flex h-5/6' >
        <aside className='hidden float-left sideBar bg-explorer md:block '>
          <AnimateSharedLayout>
            <ul className='p-10'>
              {navBarItems.map((navigationItem) => {
                return (
                  <NavBarItem
                    key={navigationItem.route}
                    title={navigationItem.title}
                    route={navigationItem.route}
                    color={navigationItem.color}
                    icon={navigationItem.icon}
                    onClick={() => setSelected(navigationItem)}></NavBarItem>
                )
              })}
            </ul>
          </AnimateSharedLayout>
        </aside>
        {children}
      </main>

      {/*<main className='flex-1 overflow-x-auto md:mr-12 md:ml-12 bg-foreground font-custom' >
        <aside className='hidden float-left w-1/5 border-2 border-solid sideBar bg-background md:block border-secondary'>
          <AnimateSharedLayout>
            <ul className='p-10'>
              {navBarItems.map((navigationItem) => {
                return (
                  <NavBarItem
                    key={navigationItem.route}
                    title={navigationItem.title}
                    route={navigationItem.route}
                    color={navigationItem.color}
                    onClick={() => setSelected(navigationItem)}></NavBarItem>
                )
              })}
            </ul>
          </AnimateSharedLayout>
        </aside>
        {children}
            </main>*/}
      <Footer />
    </div>
  );
}

export default Layout;
