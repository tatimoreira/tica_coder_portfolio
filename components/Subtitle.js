import { motion } from "framer-motion";

function Subtitle({ text }) {
  return (
    <motion.h2 className="pt-2 text-lg font-bold text-primary">
      {text}
    </motion.h2>
  );
}

export default Subtitle;
