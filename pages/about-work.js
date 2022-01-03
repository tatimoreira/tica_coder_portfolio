import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/Subtitle";
import Paragraph from "../components/Paragraph";

function AboutPage() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div className='flex flex-col pl-8 pr-8 md:pr-16 md:pl-16 bg-foreground sideBar '>
        <div className='pt-6 pb-8 overflow-auto'>
          <PageTitle text={t("aboutWork")}></PageTitle>
          <SubTitle text={t("missionTitle")} />
          <Paragraph text={t("mission")} />
          <SubTitle text={t("techStack")} />
          <div className='pt-1  md:flex'>
            {[t("react"), t("nodejs"), t("graphql"), t("golang")].map(
              (item, key) => (
                <span
                  key={item}
                  className='mr-5 font-bold text-s text-default'
                >
                  {t(item)}
                </span>
              )
            )}
          </div>
          <SubTitle text={t("hireInfoTitle")} />
          <Paragraph text={t("hireInfoPriority")} />
          <SubTitle text={t("hireInfoConditionsTitle")} />
          <Paragraph text={t("hireInfoConditions")} />
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
