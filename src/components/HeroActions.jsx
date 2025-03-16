"use client";

import React from "react";
import { motion } from "motion/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function HeroActions() {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-10">
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        href="#contact"
        className="bg-yellow-400 px-5 py-3 rounded-full flex items-center gap-2 text-sm font-subtitle"
      >
        Contact
        <FaLongArrowAltRight className="text-white text-xl" />
      </motion.a>
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        href="/resume.pdf"
        target="_blank"
        className="bg-yellow-400 px-5 py-3 rounded-full flex items-center gap-2 text-sm font-subtitle"
      >
        Resume <FiDownload className="text-white text-xl" />
      </motion.a>
    </div>
  );
}
