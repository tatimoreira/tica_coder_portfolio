import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const LanguageSelector = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div class="dropdown-menu absolute hidden h-auto flex pt-2 shadow-xl z-10 bg-primary">
      <ul class="block w-full bg-white shadow px-4 py-4">
        <li>
          <button
            className="button special big whitespace-no-wrap"
            onClick={() => onChangeLanguage("en")}
          >
            {t("english")}
          </button>
        </li>
        <li>
          <button
            className="button special big whitespace-no-wrap"
            onClick={() => onChangeLanguage("es")}
          >
            {t("spanish")}
          </button>
        </li>
        <li>
          <button
            className="button special big whitespace-no-wrap"
            onClick={() => onChangeLanguage("zh")}
          >
            {t("chinese")}
          </button>
        </li>
      </ul>
    </div>
  );
};

LanguageSelector.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default LanguageSelector;
