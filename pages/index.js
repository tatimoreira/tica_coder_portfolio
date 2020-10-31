import { useEffect, useContext } from "react";
import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

function IndexPage() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className='flex flex-col pl-16 md:border-t-2 md:border-b-2 md:border-r-2 md:border-solid bg-foreground sideBar md:border-secondary'>
        <div className='pt-8'>
          <PageTitle text={t("welcome")}></PageTitle>

          <p className='max-w-6xl text-2xl text-inverse-soft'>
            {" "}
            {t("description")}
          </p>
          <h2 className='pt-2 text-2xl font-bold text-primary'>
            {t("hobbiesTitle")}
          </h2>
          <p className='max-w-6xl text-2xl text-inverse-soft'>
            {" "}
            {t("hobbies")}
          </p>
          <h2 className='pt-2 text-2xl font-bold text-primary'>
            {t("standForTitle")}
          </h2>
          <p className='max-w-6xl text-2xl text-inverse-soft'>
            {" "}
            {t("standFor")}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
