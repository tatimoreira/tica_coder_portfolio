import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

function MobileMenu({ isExpanded, setTheme, onChangeLanguage }) {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      className="dropdown-container"
      initial="close"
      animate={isExpanded ? "open" : "close"}
      variants={slideVerticalAnimation}
    >
      <ul
        className={`${
          isExpanded ? `block` : `hidden`
        }  md:items-center md:justify-center text-sm w-full md:w-auto`}
      >
        {[
          { title: t("aboutMe"), route: "/" },
          { title: t("aboutWork"), route: "/about-work" },
          { title: t("experience"), route: "/experience" },
          { title: t("contact"), route: "/contact" },
        ].map((navigationItem) => (
          <li
            className="flex justify-center h-10 mt-1 text-base font-bold text-primary md:hidden"
            key={navigationItem.title}
          >
            <Link href={navigationItem.route}>
              <a className="block text-primary ">{navigationItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default MobileMenu;
