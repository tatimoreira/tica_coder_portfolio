import { motion } from "framer-motion";

function Li({ text }) {
  return (
    <>
      <li className="text-inverse mb-5">
        {" "}
        <span className="text-inverse-soft text-s sm:text-lg ">{text}</span>
      </li>
    </>
  );
}

export default Li;
