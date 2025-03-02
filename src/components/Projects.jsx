import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Project() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center py-5 bg-amber-400">
      <h2 className="text-5xl font-bold">Projects</h2>
      <p className="text-sm mb-5">제가 만든 프로젝트입니다.</p>

      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 my-10 bg-amber-200">
        {/* 면접 타운 */}
        <div className=" hover:bg-lightHover border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500">
          <div>🌼</div>
          <h3 className="text-lg my-4 text-gray-700">면접 타운</h3>
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
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500">
          <div>🌼</div>
          <h3 className="text-lg my-4 text-gray-700">개인 블로그</h3>
          <p className="text-sm text-gray-600">
            개인 블로그를 만들어서 운영하고있습니다.
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
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500">
          <div>🌼</div>
          <h3 className="text-lg my-4 text-gray-700">포트폴리오</h3>
          <p className="text-sm text-gray-600">저의 포트폴리오 사이트입니다.</p>
          <Link href={"/"} className="flex items-center gap-2 text-sm mt-5">
            더보기
            <Image
              src={"images/right-arrow.svg"}
              width={25}
              height={25}
              alt="right-arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
