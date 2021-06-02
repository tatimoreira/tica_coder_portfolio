import Layout from "../components/layout";
import { useTranslation, Trans } from "react-i18next";
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
          <PageTitle text={t("contact")}></PageTitle>
          <Paragraph text={t("contactInfo")} />
          <br/>
          <br/>
          <span className="mt-3">{t("emailLabel")}</span>
          <Paragraph text={t("email")} />
          <br/>
          <span>{t("githubLabel")}</span>
          <p className='inline text-inverse-soft text-s sm:text-lg'><Trans i18nKey="githubUser" t={t} components={[<a className="text-inverse" href="https://github.com/tatimoreira" target="_blank"></a> ]} /></p>
          <br/>
          <span>{t("twitterLabel")}</span>
          <p className='inline text-inverse-soft text-s sm:text-lg'><Trans i18nKey="twitterUser" t={t} components={[<a className="text-inverse" href="https://twitter.com/tatimoreiradev" target="_blank"></a> ]} /></p>
          <br/>
          <span>{t("igLabel")}</span>
          <p className='inline text-inverse-soft text-s sm:text-lg'><Trans i18nKey="igUser" t={t} components={[<a className="text-inverse" href="https://www.instagram.com/tatimoreira.dev/" target="_blank"></a> ]} /></p>
        </div>
      </div>
    </Layout>
  );
}

export default Experience;
