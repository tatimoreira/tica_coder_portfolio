import { useEffect, useContext } from "react";
import Layout from "../components/layout";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import ThemeContext from "../context/ThemeContext";
import { useTheme, localStorage} from "next-themes";

function IndexPage() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
 

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { toggleTheme } = useContext(ThemeContext);


  return (
    <Layout>
      <div className="bg-foreground flex flex-col items-center justify-center ">
        <div className="max-w-4xl">
          <h1 className="p-3  text-6xl font-bold text-secondary ">
            <span>{t("welcome")}</span>
          </h1>
          <p className="text-comment text-2xl max-w-lg"> {t("description")}</p>
          <button onClick={theme === 'dark' ? () => setTheme('light'): () => setTheme('dark')}> Swap</button>
        </div>
      </div>
    
    </Layout>
  );
}

export default IndexPage;
