import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

function AboutPage() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <div className='flex flex-col pt-8 pr-16 md:pl-16 bg-foreground'>
        <div className=''>
          <PageTitle text={t("aboutWork")}></PageTitle>

          <h2 className='pt-2 text-2xl font-bold text-primary'>
            {t("missionTitle")}
          </h2>
          <p className='text-2xl text-inverse-soft '> {t("mission")}</p>
          <h2 className='pt-2 text-2xl font-bold text-primary'>
            {t("techStack")}
          </h2>
          <p className='text-2xl text-inverse-soft '> {t("techStackText")}</p>
          <h2 className='pt-2 text-2xl font-bold text-primary'>
            {t("hireInfoTitle")}
          </h2>
          <p className='text-2xl text-inverse-soft '>
            {" "}
            {t("hireInfoPriority")}
          </p>
          <h2 className='pt-2 text-2xl font-bold text-primary'>
            {t("hireInfoConditionsTitle")}
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
