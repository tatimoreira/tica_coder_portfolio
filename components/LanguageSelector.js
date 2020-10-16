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
    <div class='dropdown-menu absolute hidden h-auto flex shadow-xl z-10 bg-secondary '>
      <ul class='block w-full bg-white shadow px-4 py-4'>
        {languages.map((language, key) => (
          <li className='font-bold text-primary hover:text-secondary p-1'>
            <button
              className='button special big whitespace-no-wrap'
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
