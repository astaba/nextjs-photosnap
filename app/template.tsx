"use client";

import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
        className="pt-20 md:pt-24"
      >
        {children}
      </motion.div>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Template;
