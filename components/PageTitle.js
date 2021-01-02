import { motion } from "framer-motion";

function PageTitle({ text }) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          scale: 0.5,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 5,
          transition: {
            delay: 0.6,
          },
        },
      }}
    >
      <h1 className='text-4xl font-bold md:text-6xl text-secondary'>
        <span>{text}</span>
      </h1>
    </motion.div>
  );
}

export default PageTitle;
