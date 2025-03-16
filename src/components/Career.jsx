"use client";

import React from "react";
import { motion } from "motion/react";

export default function Career() {
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
        Career
      </motion.h2>{" "}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xs my-5"
      >
        경력 사항입니다.
      </motion.p>
      <ul className="border-l-2 border-l-yellow-400 my-10">
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full"
        >
          <div className="text-yellow-500 mb-2 text-sm">2023.05 - 2024.07</div>
          <div className="flex items-center  gap-2 mb-2">
            <h3 className="text-lg font-subtitle">보맵</h3>
            <h2 className="text-xs"> | 백엔드 개발자</h2>
          </div>
          <ul>
            <li> ० 보험 자동 업데이트 배치 오류 개선</li>
            <li> ० 보험 정보 조회 및 청구 시스템 개편</li>
          </ul>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full"
        >
          <div className="text-yellow-500 mb-2 text-sm">2022.07 - 2022.12</div>
          <div className="flex items-center  gap-2 mb-2">
            <h3 className="text-lg font-subtitle">슈퍼키친</h3>
            <h2 className="text-xs"> | 백엔드 개발자</h2>
          </div>
          <ul>
            <li> ० 리뷰·문의 서비스 마이그레이션 및 신규 개발</li>
            <li> ० 내부 데이터 관리를 위한 사전 시스템 설계 및 구축</li>
          </ul>
        </motion.li>
      </ul>
    </motion.div>
  );
}
