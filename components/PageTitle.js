import { motion } from "framer-motion";

function PageTitle({ text }) {
  return (
    <motion.div initial={{ y: -250 }} animate={{ y: -10 }}>
      <h1 className=" font-bold text-xl text-secondary  inline ">
        <span>{text}</span>
      </h1>
    </motion.div>
  );
}

export default PageTitle;
