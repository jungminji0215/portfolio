"use client";

import React from "react";
import { motion } from "motion/react";

export default function Skills() {
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
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xs my-5"
      >
        아래의 기술을 사용해봤습니다.
      </motion.p>

      <ul className="flex flex-col gap-10 my-10">
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="p-8 rounded-xl shadow-md hover:-translate-y-1 duration-500"
        >
          <h3 className="text-xl font-bold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <img
              src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=next.js&logoColor=white"
              className="my-4 rounded-sm"
            />
          </div>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="p-8 rounded-xl shadow-md hover:-translate-y-1 duration-500"
        >
          <h3 className="text-xl font-bold mb-4">Backend</h3>
          <div className="flex gap-2">
            <img
              src="https://img.shields.io/badge/Spring-3DDC84?style=flat-square&logo=Spring&logoColor=white"
              className="my-4 rounded-sm"
            />
          </div>
        </motion.li>
      </ul>
    </motion.div>
  );
}
