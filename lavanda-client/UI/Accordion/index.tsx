"use client";

import React, { useState } from "react";
import css from "./Accordion.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

interface AccordionI {
  children: React.ReactNode;
  label: string;
}

const Accordion: React.FC<AccordionI> = ({ label, children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={css.container}>
      <div className={css.controls} onClick={() => setIsOpened(!isOpened)}>
        <h3 className={css.label}>{label}</h3>
      </div>
      <div className={classNames(css.children, { [css.active]: isOpened })}>
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{
                transform: "translateY(-200px)",
                opacity: 0,
                height: 0,
              }}
              animate={{
                transform: "translateY(0)",
                opacity: 1,
                height: "auto",
              }}
              exit={{ transform: "translateY(-200px)", opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
