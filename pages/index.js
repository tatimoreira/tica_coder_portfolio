import { useEffect, useContext } from "react";
import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";

const config = {
  type: "spring",
  damping: 100,
  stiffness: 100,
};

function IndexPage() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className='flex flex-col pl-8 pr-8 md:pr-16 md:pl-16 md:border-t-2 md:border-b-2 md:border-r-2 md:border-solid bg-foreground sideBar md:border-secondary'>
        <div className='pt-8'>
          <PageTitle text={t("greeting")}></PageTitle>
          <Paragraph text={t("description")}></Paragraph>
          <Subtitle text={t("hobbiesTitle")}></Subtitle>
          <Paragraph text={t("hobbies")}></Paragraph>
          <Subtitle text={t("standForTitle")}></Subtitle>
          <Paragraph text={t("standFor")}></Paragraph>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
