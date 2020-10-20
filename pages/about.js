import Layout from "../components/layout";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <div className='bg-foreground flex flex-col pl-16 pr-16 justify-center'>
        <div className=''>
          <h1 className='text-6xl font-bold text-secondary '>
            <span>{t("aboutWork")}</span>
          </h1>
          <h2 className='text-primary text-2xl font-bold'>
            {t("missionTitle")}
          </h2>
          <p className='text-inverse-soft text-2xl '> {t("mission")}</p>
          <h2 className='text-primary text-2xl font-bold'>{t("techStack")}</h2>
          <p className='text-inverse-soft text-2xl '> {t("techStackText")}</p>
          <h2 className='text-primary text-2xl font-bold'>
            {t("hireInfoTitle")}
          </h2>
          <p className='text-inverse-soft text-2xl '>
            {" "}
            {t("hireInfoPriority")}
          </p>
          <h2 className='text-primary text-2xl font-bold'>
            {t("hireInfoConditionsTitle")}
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
