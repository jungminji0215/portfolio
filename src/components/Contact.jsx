"use client";

import React from "react";
import { motion } from "motion/react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full max-w-3xl mx-auto flex flex-col items-center p-5 scroll-mt-20 mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl font-bold font-title"
      >
        Contact
      </motion.h2>
      <ContactForm />
    </motion.div>
  );
}
