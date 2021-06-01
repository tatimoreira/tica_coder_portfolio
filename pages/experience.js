import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/Subtitle";
import Paragraph from "../components/Paragraph";

function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className='flex flex-col pl-8 pr-8 md:pr-16 md:pl-16 bg-foreground sideBar  w-full'>
        <div className='pt-12 pb-8 overflow-auto'>
          <PageTitle text={t("experience")}></PageTitle>
          <p>In progress... </p>
          
        </div>
      </div>
    </Layout>
  );
}

export default Experience;
