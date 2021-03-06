import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme, localStorage } from "next-themes";
import LanguageSelector from "./LanguageSelector";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { motion } from "framer-motion";

const languages = [
  {
    name: "EN",
    shortName: "en",
  },
  {
    name: "ES",
    shortName: "es",
  },
  {
    name: "ZH",
    shortName: "zh",
  },
];

function Header() {
  const { t, i18n } = useTranslation();
  const [isExpanded, toggleExpansion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useLocalStorage("lang", i18n.language);

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className='relative bg-background'>
      <div className='flex flex-wrap items-center justify-between p-4 mx-auto md:flex-no-wrap '>
        <div className='flex items-center'>
          <div className='hidden md:flex ml-6'>
            {languages.map((language, key) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
              >
                <button
                  key={key}
                  className='p-1 m-1 font-bold rounded-full border-2 text-s text-white bg-colorPop1'
                  onClick={() => onChangeLanguage(language.shortName)}
                >
                  {t(language.name)}
                </button>
              </motion.button>

            ))}
            
          </div>
        </div>

        {/*Hamburguer*/}
        <button
          className='flex items-center block px-3 py-2 border-2 rounded border-secondary md:hidden'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='w-3 h-3 fill-current text-secondary'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        {/* Mobile */}
        <ul
          className={`${isExpanded ? `block` : `hidden`
            }  md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          <li className='flex justify-center h-10 mt-1 md:hidden bg-inverse'>
            {languages.map((language, key) => (
              <button
                key={key}
                className='p-1 m-1 font-bold border-2 rounded-full text-s text-white  bg-colorPop1'
                onClick={() => onChangeLanguage(language.shortName)}
              >
                {t(language.name)}
              </button>
            ))}
          </li>
          <li className='flex justify-center w-full h-10 mt-1 mr-6 bg-inverse md:bg-background'>
            <button
              className='p-1 m-1 font-bold border-2 rounded-full  text-s text-white  bg-colorPop2 '
              onClick={() => setTheme("light")}
            >
              LIGHT
            </button>
            <button
              className='p-1  m-1 font-bold border-2 rounded-full  text-s text-white  bg-colorPop2'
              onClick={() => setTheme("dark")}
            >
              DARK
            </button>
          </li>
          {[
            { title: t("aboutMe"), route: "/" },
            { title: t("aboutWork"), route: "/about-work" },
            { title: t("experience"), route: "/experience" },
            { title: t("contact"), route: "/contact" },
          ].map((navigationItem) => (
            <li
              className='flex justify-center h-10 mt-1 text-base font-bold text-primary bg-inverse md:hidden'
              key={navigationItem.title}
            >
              <Link href={navigationItem.route}>
                <a className='block text-primary '>{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
