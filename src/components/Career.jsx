import React from "react";

export default function Career() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center p-5 scroll-mt-20 mt-20">
      <h2 className="text-4xl font-bold font-title">Career</h2>
      <p className="text-xs mb-5 my-5">저의 개발 경력입니다.</p>

      <ul className="border-l-2 border-l-yellow-400 my-10">
        <li className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full">
          <div className="text-yellow-500 mb-2 text-sm">2023.05 - 2024.07</div>
          <div className="flex items-center  gap-2 mb-2">
            <h3 className="text-lg font-subtitle">보맵</h3>
            <h2 className="text-xs"> | 백엔드 개발자</h2>
          </div>
          <ul>
            <li> ० 보험 자동 업데이트 배치 오류 개선</li>
            <li> ० 보험 정보 조회 및 청구 시스템 개편</li>
          </ul>
        </li>
        <li className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full">
          <div className="text-yellow-500 mb-2 text-sm">2022.07 - 2022.12</div>
          <div className="flex items-center  gap-2 mb-2">
            <h3 className="text-lg font-subtitle">슈퍼키친</h3>
            <h2 className="text-xs"> | 백엔드 개발자</h2>
          </div>
          <ul>
            <li> ० 리뷰·문의 서비스 마이그레이션 및 신규 개발</li>
            <li> ० 내부 데이터 관리를 위한 사전 시스템 설계 및 구축</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
