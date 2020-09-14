import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <ul className="actions">
      <li>
        <button
          className="button special big"
          onClick={() => onChangeLanguage("en")}
        >
          {t("english")}
        </button>
      </li>
      <li>
        <button
          className="button special big"
          onClick={() => onChangeLanguage("es")}
        >
          {t("spanish")}
        </button>
      </li>
      <li>
        <button
          className="button special big"
          onClick={() => onChangeLanguage("zh")}
        >
          {t("chinese")}
        </button>
      </li>
    </ul>
  );
};

LanguageSelector.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default LanguageSelector;
