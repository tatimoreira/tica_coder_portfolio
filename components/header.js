import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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

import LanguageSelector from "./LanguageSelector";

function Header() {
  const { t, i18n } = useTranslation();
  const [isExpanded, toggleExpansion] = useState(false);

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className='bg-background relative'>
      <div className='flex flex-wrap items-center justify-between p-4 mx-auto md:flex-no-wrap '>
        <div className='flex items-center'>
          <Link href='/'>
            <a className='text-xl font-bold text-secondary md:ml-8'>
              TicaCoder
            </a>
          </Link>
          <div className='hidden md:flex '>
            {languages.map((language, key) => (
              <button
                className='p-1 m-1 border-2 text-s text-primary rounded-sm font-bold rounded border-primary'
                onClick={() => onChangeLanguage(language.shortName)}
              >
                {t(language.name)}
              </button>
            ))}
          </div>
        </div>

        <button
          className='flex items-center block px-3 py-2 border-2 border-secondary rounded  md:hidden'
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

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          <li className='md:hidden bg-inverse mt-1 flex justify-center h-10'>
            {languages.map((language, key) => (
              <button
                className='p-1 m-1 border-2 text-s text-primary rounded-sm font-bold rounded border-primary'
                onClick={() => onChangeLanguage(language.shortName)}
              >
                {t(language.name)}
              </button>
            ))}
          </li>
          <li className='dropdown flex justify-center text-primary w-full mt-1 mr-3 bg-inverse h-10'>
            <svg
              class='w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
              ></path>
            </svg>
            <LanguageSelector />
          </li>
          {[
            { title: t("aboutMe"), route: "/" },
            { title: t("aboutWork"), route: "/about" },
          ].map((navigationItem) => (
            <li
              className='mt-1 flex justify-center font-bold text-primary text-lg bg-inverse h-10 md:hidden'
              key={navigationItem.title}
            >
              <Link href={navigationItem.route}>
                <a className='block text-white'>{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
