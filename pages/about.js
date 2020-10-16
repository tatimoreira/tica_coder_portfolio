import Layout from "../components/layout";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t, i18n } = useTranslation();
  return (
    <Layout>
      <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
        <div className='space-y-6 md:w-1/2'>
          <div>
            <h1 className='mb-3 text-xl font-bold'>{t("aboutWork")}</h1>
            <h2>{t("techStack")}</h2>
            <ul>
              <li>ReactJS</li>
              <li>Graphql</li>
              <li>Golang</li>
            </ul>
          </div>
        </div>

        <div className='md:w-1/2'>
          <img
            alt='A one-eyed alien holding a broken cable connected between a server and a desktop computer'
            className='w-full'
            src='critter.svg'
          />
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
