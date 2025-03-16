"use client";

import React from "react";
import { motion } from "motion/react";

export default function Introduction() {
  return (
    <motion.h3
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-xl md:text-5xl text-center space-y-5"
    >
      <p> 안녕하세요!</p>
      <p>
        프론트엔드 개발자 <strong> 정민지 </strong>입니다.
      </p>
    </motion.h3>
  );
}
