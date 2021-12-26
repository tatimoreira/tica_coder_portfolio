import React from "react";
import { GlobeIcon } from "../atoms/GlobeIcon";
import LanguageItem from "../molecules/LanguageItem";
import { languages } from "../../constants/types";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useLocalStorage("lang", i18n.language);

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <div className="flex items-center ml-auto md:mr-4 ">
      <GlobeIcon />
      <div className="mr-3 flex">
        {languages.map((language) => (
          <LanguageItem
            key={language.name}
            name={language.name}
            shortName={language.shortName}
            lang={lang}
            onChangeLanguage={onChangeLanguage}
          />
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
