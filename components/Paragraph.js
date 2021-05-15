import { motion } from "framer-motion";

function Paragraph({ text }) {
  return (
    <>
      <p className='inline text-inverse-soft text-s sm:text-lg'> {text}</p>
    </>
  );
}

export default Paragraph;
