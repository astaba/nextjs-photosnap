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
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
        className="pt-20 md:pt-24"
      >
        {children}
      </motion.main>
      <div className="h-[2000px] bg-green-300 border-4 border-solid border-red-700" />
    </>
  );
};

export default Template;
