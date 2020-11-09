import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { useTranslation } from "react-i18next";

import Header from "./header";
import Footer from "./footer";
import ThemeContext from "../context/ThemeContext";
import { useTheme } from "next-themes";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Layout({ children, mainClasses = "", isLight = false }) {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useLocalStorage("lang", i18n.language);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div
      className={`${
        theme === "dark" ? "dark" : "light"
      } flex flex-col min-h-screen bg-background `}
    >
      <Head>
        <title>TICACODER</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />

      <main className='flex-1 overflow-x-auto md:mr-12 md:ml-12 bg-foreground'>
        <aside className='hidden float-left w-1/5 border-2 border-solid sideBar bg-background md:block border-secondary'>
          <ul className='p-10'>
            {[
              { title: t("aboutMe"), route: "/" },
              { title: t("aboutWork"), route: "/about-work" },
            ].map((navigationItem) => (
              <li
                className='pb-5 mt-3 text-lg font-bold'
                key={navigationItem.title}
              >
                <div className='flex items-center text-secondary '>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>

                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                    ></path>
                  </svg>
                  <Link href={navigationItem.route}>
                    <a className='block p-1 text-primary'>
                      {navigationItem.title}
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
