'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoSchool } from 'react-icons/io5';
import { PiCertificateBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function AboutMe() {
  return (
    <section id="about-me" className="wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto mt-20 flex w-full max-w-3xl scroll-mt-20 flex-col items-center p-5"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-title text-4xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="my-5 text-xs"
        >
          저를 소개합니다.
        </motion.p>

        <div className="my-10 flex flex-col gap-10 md:flex-row">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex max-w-96 items-center rounded-xl p-5 shadow-md"
          >
            <p>
              도전과 성장을 즐기는 개발자 정민지입니다. <br />
              <br />
              백엔드 개발자로 일하며 스스로 문제를 발견하고 정의하여 해결하는 능동적인 역량을
              쌓았습니다. <br />
              <br />
              프론트엔드 개발자로서 사용자와 가장 가까운 곳에서 더 나은 서비스 경험을 만들어가는
              개발자가 되고자 합니다.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-2 gap-5 rounded-xl p-5 shadow-md"
          >
            <Link
              href="https://github.com/jungminji0215"
              target="_blank"
              className="flex flex-col items-center gap-1 duration-500 hover:-translate-y-1"
            >
              <FaGithub className="h-12 w-12" />
              <p className="font-subtitle text-sm font-bold">깃허브</p>
            </Link>

            <Link
              href="https://www.jungminji.com/"
              target="_blank"
              className="flex flex-col items-center gap-1 duration-500 hover:-translate-y-1"
            >
              <Image src={'/jungminji.png'} width={50} height={50} alt="블로그" />
              <p className="font-subtitle text-sm font-bold">블로그</p>
            </Link>

            <div className="flex flex-col items-center gap-1">
              <IoSchool className="h-12 w-12" />
              <p className="font-subtitle text-sm">한성대학교</p>
              <p className="text-xs">IT융합공학부</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <PiCertificateBold className="h-12 w-12" />

              <p className="font-subtitle text-sm">정보처리기사</p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </section>
  );
}
