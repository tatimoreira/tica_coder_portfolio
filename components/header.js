import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme, localStorage } from "next-themes";
import LanguageSelector from "./LanguageSelector";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { motion } from "framer-motion";
import { languages } from "../constants/types";
import MenuButton from "./molecules/MenuButton";
import MobileMenu from "./molecules/MobileMenu";
import MoonIcon from "./atoms/MoonIcon";

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
    <nav className="relative bg-background">
      <div className="items-center justify-between p-4 mx-auto md:flex-no-wrap text-primary">
        <div className="flex items-center">
          <div className="hidden md:flex ml-6">
            {languages.map((language, key) => (
              <motion.button whileHover={{ scale: 1.1 }}>
                <button
                  key={key}
                  className="p-1 m-1 font-bold rounded-full border-2 text-s text-white bg-colorPop1"
                  onClick={() => onChangeLanguage(language.shortName)}
                >
                  {t(language.name)}
                </button>
              </motion.button>
            ))}
          </div>
        </div>

        {/*Hamburguer*/}
        <div className="flex">
          <MenuButton
            isExpanded={isExpanded}
            toggleExpansion={toggleExpansion}
          />
        </div>

        <MobileMenu
          languages={languages}
          isExpanded={isExpanded}
          theme={theme}
          setTheme={setTheme}
          onChangeLanguage={onChangeLanguage}
        />
      </div>
    </nav>
  );
}

export default Header;
