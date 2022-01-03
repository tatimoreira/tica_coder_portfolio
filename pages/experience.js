import Layout from "../components/layout";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/Subtitle";
import { Tabs } from "../components/Tabs";
import Paragraph from "../components/Paragraph";
import { Dropdown } from "../components/Dropdown";

function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className="flex flex-col pl-8 pr-8 md:pr-16 md:pl-16 bg-foreground sideBar  w-full">
        <div className="mt-6 overflow-auto">
          <PageTitle text={t("experience")}></PageTitle>
          <Tabs color="colorPop2"></Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default Experience;
