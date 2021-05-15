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
      <div className="explorer bg-explorer flex-col"></div>
      <div className='flex flex-col pl-8 pr-8 pb-8  md:pr-16 md:pl-16  bg-foreground sideBar  h-5/6 '>
        <div >
          <div className="inner-content flex-row  flex relative">
            <div className="content  pt-12 pr-6 pl-6 mt-7">
              <PageTitle text={t("greeting")}></PageTitle>
              <Paragraph text={t("description")}></Paragraph>
              <PageTitle text={t("factsTitle")}></PageTitle>
              <Paragraph text={t("facts")}></Paragraph>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
