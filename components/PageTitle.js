import { motion } from "framer-motion";

function PageTitle({ text }) {
  return (
    <div>
      <h1 className=" font-bold text-xl text-secondary  inline ">
        <span>{text}</span>
      </h1>
    </div>
  );
}

export default PageTitle;
