import { useEffect, useContext } from "react";
import Layout from "../components/layout";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import ThemeContext from "../context/ThemeContext";
import { useTheme, localStorage } from "next-themes";

function IndexPage() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <div className='bg-foreground flex flex-col pl-16 justify-center '>
        <div className=''>
          <h1 className='text-6xl font-bold text-secondary pt-5'>
            <span>{t("welcome")}</span>
          </h1>
          <p className='text-inverse-soft text-2xl max-w-6xl'>
            {" "}
            {t("description")}
          </p>
          <button
            onClick={
              theme === "dark"
                ? () => setTheme("light")
                : () => setTheme("dark")
            }
          >
            {" "}
            Swap
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
