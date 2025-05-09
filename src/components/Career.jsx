import React from 'react';
import * as motion from 'motion/react-client';

export default function Career() {
  return (
    <section id="career" className="wrapper">
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
          Career
        </motion.h2>{' '}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="my-5 text-xs"
        >
          경력 사항입니다.
        </motion.p>
        <ul className="my-10 border-l-2 border-l-yellow-400">
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative mb-[1.2rem] pl-[1.6rem] before:absolute before:top-0 before:left-[-0.65rem] before:h-[1.2rem] before:w-[1.2rem] before:rounded-full before:bg-yellow-300 before:content-['']"
          >
            <div className="mb-2 text-sm text-yellow-500">2023.05 - 2024.07</div>
            <div className="mb-2 flex items-center gap-2">
              <h3 className="font-subtitle text-lg">보맵</h3>
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
            className="relative mb-[1.2rem] pl-[1.6rem] before:absolute before:top-0 before:left-[-0.65rem] before:h-[1.2rem] before:w-[1.2rem] before:rounded-full before:bg-yellow-300 before:content-['']"
          >
            <div className="mb-2 text-sm text-yellow-500">2022.07 - 2022.12</div>
            <div className="mb-2 flex items-center gap-2">
              <h3 className="font-subtitle text-lg">슈퍼키친</h3>
              <h2 className="text-xs"> | 백엔드 개발자</h2>
            </div>
            <ul>
              <li> ० 리뷰·문의 서비스 마이그레이션 및 신규 개발</li>
              <li> ० 내부 데이터 관리를 위한 사전 시스템 설계 및 구축</li>
            </ul>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
}
