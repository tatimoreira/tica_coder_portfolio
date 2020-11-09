import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const languages = [
  {
    name: "english",
    shortName: "en",
  },
  {
    name: "spanish",
    shortName: "es",
  },
  {
    name: "chinese",
    shortName: "zh",
  },
];

const LanguageSelector = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='absolute z-10 flex hidden h-auto shadow-xl dropdown-menu bg-secondary '>
      <ul className='block w-full px-4 py-4 bg-white shadow'>
        {languages.map((language, key) => (
          <li className='p-1 font-bold text-primary hover:text-secondary'>
            <button
              className='whitespace-no-wrap button special big'
              onClick={() => onChangeLanguage(language.shortName)}
            >
              {t(language.name)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

LanguageSelector.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default LanguageSelector;
