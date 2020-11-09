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
      <div className='flex flex-col pl-8 pr-8 md:pr-16 md:pl-16 md:border-t-2 md:border-b-2 md:border-r-2 md:border-solid bg-foreground sideBar md:border-secondary'>
        <div className='pt-8 pb-8 overflow-auto'>
          <PageTitle text={t("aboutWork")}></PageTitle>
          <SubTitle text={t("missionTitle")} />
          <Paragraph text={t("mission")} />
          <SubTitle text={t("techStack")} />

          <Paragraph text={t("myStack")} />
          <div className='pt-1 pb-2 md:flex'>
            {[t("react"), t("nodejs"), t("graphql"), t("golang")].map(
              (item, key) => (
                <span
                  key={item}
                  className='p-1 m-1 font-bold border-2 rounded text-s text-inverse '
                >
                  {t(item)}
                </span>
              )
            )}
          </div>
          <Paragraph text={t("myLearningStack")} />
          <div className='pt-1 pb-1 md:flex'>
            {[t("rust"), t("eos"), t("webAssembly")].map((item, key) => (
              <span
                key={item}
                className='p-1 m-1 font-bold border-2 rounded-sm rounded text-s text-inverse '
              >
                {t(item)}
              </span>
            ))}
          </div>

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
          <p className='pb-3 text-2xl text-inverse-soft'>
            {" "}
            {t("hireInfoConditions")}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
