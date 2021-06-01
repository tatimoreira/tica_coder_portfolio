import { useEffect, useContext } from "react";
import Layout from "../components/layout";
import { useTranslation, Trans} from "react-i18next";
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
      <div className='flex flex-col pl-8 pr-8 pb-8  md:pr-16 md:pl-16  bg-foreground sideBar  h-5/6  w-full'>
      
          <article className="inner-content flex-row  flex relative">
            <div className="content  pt-12  mt-7">
              <section role="contentinfo" aria-label="Facts about me" className="mb-6">
                <PageTitle text={t("greeting")}></PageTitle>
                <p className='inline text-inverse-soft text-s sm:text-lg'><Trans i18nKey="description" t={t} components={[<a className="text-inverse" href="https://www.parsleyhealth.com/" target="_blank"></a> ]} /></p>
              </section>
              <section role="contentinfo" aria-label="My education">
                <Subtitle text={t("eduTitle")} />
                <Paragraph text={t("eduText")}></Paragraph>              
              </section>   
              <ul className="mt-3">
                <li><Paragraph text={t("edu1")}></Paragraph></li>
                <li><Paragraph text={t("edu2")}></Paragraph></li>
              </ul>
            </div>
          </article>
      </div>
    </Layout>
  );
} 

export default IndexPage;
