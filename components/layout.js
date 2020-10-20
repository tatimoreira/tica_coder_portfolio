import React, { useContext } from "react";
import Link from "next/link";

import { useTranslation } from "react-i18next";

import Header from "./header";
import Footer from "./footer";

import ThemeContext from "../context/ThemeContext";
import { useTheme } from "next-themes";

function Layout({ children, mainClasses = "", isLight = false }) {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "dark" : "light"
      } flex flex-col min-h-screen bg-background `}
    >
      <Header />

      <main className='flex-1 overflow-x-auto md:mr-12 md:ml-12 bg-foreground'>
        <aside className='sideBar bg-secondary w-1/5 float-left'>
          <ul className='p-10'>
            {[
              { title: t("aboutMe"), route: "/" },
              { title: t("aboutWork"), route: "/about" },
            ].map((navigationItem) => (
              <div className='flex items-center text-secondary '>
                <div className='-mt-2'>
                  <svg
                    class='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </div>
                <li
                  className='mt-3 pb-5 font-bold text-primary text-lg'
                  key={navigationItem.title}
                >
                  <Link href={navigationItem.route}>
                    <a className='block text-white'>{navigationItem.title}</a>
                  </Link>
                </li>
              </div>
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
