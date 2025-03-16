"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSchool } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

export default function AboutMe() {
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
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xs my-5"
      >
        저를 소개합니다.
      </motion.p>

      <div className="flex flex-col md:flex-row gap-10 my-10">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="rounded-xl shadow-md  flex items-center max-w-96  p-5"
        >
          <p>
            도전과 성장을 즐기는 개발자 정민지입니다. <br />
            <br />
            백엔드 개발자로 일하며 스스로 문제를 발견하고 정의하여 해결하는
            능동적인 역량을 쌓았습니다. <br />
            <br />
            프론트엔드 개발자로서 사용자와 가장 가까운 곳에서 더 나은 서비스
            경험을 만들어가는 개발자가 되고자 합니다.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="rounded-xl shadow-md gap-5 p-5 grid grid-cols-2"
        >
          <Link
            href="https://github.com/jungminji0215"
            target="_blank"
            className="flex flex-col gap-1 items-center hover:-translate-y-1 duration-500"
          >
            <FaGithub className="w-12 h-12" />
            <p className="text-sm font-bold font-subtitle">깃허브</p>
          </Link>

          <Link
            href="https://www.jungminji.com/"
            target="_blank"
            className="flex flex-col gap-1 items-center hover:-translate-y-1 duration-500"
          >
            <Image src={"/jungminji.png"} width={50} height={50} alt="블로그" />
            <p className="text-sm font-bold font-subtitle">블로그</p>
          </Link>

          <div className="flex flex-col items-center gap-1">
            <IoSchool className="w-12 h-12" />
            <p className="text-sm font-subtitle">한성대학교</p>
            <p className="text-xs">IT융합공학부</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <PiCertificateBold className="w-12 h-12" />

            <p className="text-sm font-subtitle">정보처리기사</p>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
