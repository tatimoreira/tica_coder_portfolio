import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function LanguageItem({ name, shortName, onChangeLanguage, lang }) {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (name.toLowerCase() === lang) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selected, lang]);

  return (
    <>
      <div>
        <button
          className="mr-1 font-bold  text-s text-colorPop2 block "
          onClick={() => onChangeLanguage(shortName)}
        >
          {t(name)}
        </button>
        <motion.div
          className={
            selected ? "border rounded-sm rounded border-primary" : null
          }
          initial={false}
          transition={spring}
        ></motion.div>
      </div>
    </>
  );
}

const spring = {
  type: "spring",
  stiffness: 9000,
  damping: 90,
};

export default LanguageItem;
