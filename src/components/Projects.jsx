"use client";

import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

export default function Project() {
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
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xs my-5"
      >
        제가 만든 프로젝트입니다.
      </motion.p>

      <div className="grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-5 my-10">
        {/* 면접 타운 */}
        {/* <div className=" hover:bg-lightHover border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500">
          <div>🌼</div>
          <h3 className="text-lg my-4 text-gray-700 font-subtitle">
            면접 타운
          </h3>
          <p className="text-sm text-gray-600">
            기술 면접을 사람들과 함께 연습하는 사이트입니다.
          </p>
          <Link href={"/"} className="flex items-center gap-2 text-sm mt-5">
            더보기
            <Image
              src={"images/right-arrow.svg"}
              width={25}
              height={25}
              alt="right-arrow"
            />
          </Link>
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className=" hover:bg-lightHover border border-gray-400 rounded-lg px-8 py-10 cursor-pointer hover:-translate-y-1 duration-500"
        >
          <div>🌼</div>
          <h3 className="text-lg my-4 text-gray-700 font-subtitle">
            기술 블로그
          </h3>
          <p className="text-sm text-gray-600">
            직접 만든 블로그를 운영하고있습니다.
          </p>
          <Link
            href="https://www.jungminji.com/"
            target="_blank"
            className="flex items-center gap-2 text-sm mt-5"
          >
            구경하기
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className=" hover:bg-lightHover border border-gray-400 rounded-lg px-8 py-10 cursor-pointer hover:-translate-y-1 duration-500"
        >
          <div>🌼</div>
          <h3 className="text-lg my-4 text-gray-700 font-subtitle">
            포트폴리오 사이트
          </h3>
          <p className="text-sm text-gray-600">현재 보고 계신 사이트입니다.</p>
          <Link
            href="https://jungminji.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-sm mt-5"
          >
            구경하기
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
