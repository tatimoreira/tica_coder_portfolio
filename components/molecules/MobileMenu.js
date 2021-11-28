import React from "react";
import Link from "next/link";
import { languages } from "../../constants/types";
import { useTranslation } from "react-i18next";

function MobileMenu({ isExpanded, setTheme, onChangeLanguage }) {
  const { t, i18n } = useTranslation();
  return (
    <ul
      className={`${
        isExpanded ? `block` : `hidden`
      }  md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
    >
      <li className="flex justify-center h-10 mt-1 md:hidden bg-inverse">
        {languages.map((language, key) => (
          <button
            key={key}
            className="p-1 m-1 font-bold border-2 rounded-full text-s text-white  bg-colorPop1"
            onClick={() => onChangeLanguage(language.shortName)}
          >
            {t(language.name)}
          </button>
        ))}
      </li>
      <li className="flex justify-center w-full h-10 mt-1 mr-6 bg-inverse md:bg-background">
        <button
          className="p-1 m-1 font-bold border-2 rounded-full  text-s text-white  bg-colorPop2 "
          onClick={() => setTheme("light")}
        >
          LIGHT
        </button>
        <button
          className="p-1  m-1 font-bold border-2 rounded-full  text-s text-white  bg-colorPop2"
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
          className="flex justify-center h-10 mt-1 text-base font-bold text-primary bg-inverse md:hidden"
          key={navigationItem.title}
        >
          <Link href={navigationItem.route}>
            <a className="block text-primary ">{navigationItem.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MobileMenu;
