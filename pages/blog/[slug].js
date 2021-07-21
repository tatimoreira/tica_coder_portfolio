import { useEffect, useContext } from "react";
import Layout from "../components/layout";
import { useTranslation, Trans} from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";


function BlogPage({title, date, description}) {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <main className='flex-1 overflow-x-auto md:mr-12 md:ml-12 bg-foreground'>
            <h2>{title}</h2>
        </main>
    </div>
  );
} 

export default IndexPage;
