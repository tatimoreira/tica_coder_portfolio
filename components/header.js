import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme, localStorage } from "next-themes";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { motion } from "framer-motion";
import { languages } from "../constants/types";
import MenuButton from "./molecules/MenuButton";
import MobileMenu from "./molecules/MobileMenu";
import MoonIcon from "./atoms/MoonIcon";
import SunIcon from "./atoms/SunIcon";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const { t, i18n } = useTranslation();
  const [isExpanded, toggleExpansion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [themeMode, setThemeMode] = useState(
    theme === "light" ? "dark" : "light"
  );
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

  const switchTheme = (currentTheme) => {
    if (currentTheme === "light") {
      setTheme("dark");
      setThemeMode("light");
    } else {
      setTheme("light");
      setThemeMode("dark");
    }
  };

  return (
    <nav className="relative bg-background">
      <div className="items-center justify-between p-4 mx-auto md:flex-no-wrap text-primary">
        <div className="flex items-center">
          <div className="hidden md:flex ml-16 w-full">
            <button
              className="p-3 mr-1 font-bold border-2 rounded-full  text-s text-inverse  "
              onClick={() => switchTheme(theme)}
            >
              {themeMode === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
            <div className="flex items-center ml-auto">
              <FontAwesomeIcon icon={faGlobe} className="mr-1" />
              <div className="mr-3">
                {languages.map((language, key) => (
                  <button
                    key={key}
                    className="mr-1 font-bold  text-s text-colorPop2 "
                    onClick={() => onChangeLanguage(language.shortName)}
                  >
                    {t(language.name)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*Hamburguer*/}
        <div className="flex md:hidden">
          <MenuButton
            isExpanded={isExpanded}
            toggleExpansion={toggleExpansion}
          />
          <button
            className="p-3 mr-1 ml-2 md:hidden  font-bold rounded-lg  text-s text-inverse  "
            onClick={() => switchTheme(theme)}
          >
            {themeMode === "light" ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="flex items-center ml-auto">
            <FontAwesomeIcon icon={faGlobe} className="mr-1" />
            <div className="mr-3">
              {languages.map((language, key) => (
                <button
                  key={key}
                  className="mr-1 font-bold  text-s text-colorPop2 "
                  onClick={() => onChangeLanguage(language.shortName)}
                >
                  {t(language.name)}
                </button>
              ))}
            </div>
          </div>
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
