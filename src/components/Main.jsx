import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Main() {
  return (
    <div className="w-11/12 max-w-3xl mx-auto flex flex-col items-center gap-10 py-5">
      <Image
        src="/jungminji.png"
        alt="프로필 사진"
        width={250}
        height={250}
        priority
        className="rounded-full"
      />
      <h3 className="text-xl md:text-5xl text-center space-y-5">
        <p> 안녕하세요!</p>
        <p>
          프론트엔드 개발자 <strong> 정민지 </strong>입니다.
        </p>
      </h3>
      <div className="flex flex-col md:flex-row gap-2 mb-10">
        <a
          href="#contact"
          className="bg-yellow-400 px-5 py-3 rounded-full flex items-center gap-2 text-sm font-subtitle"
        >
          Contact
          <FaLongArrowAltRight className="text-white text-xl" />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-yellow-400 px-5 py-3 rounded-full flex items-center gap-2 text-sm font-subtitle"
        >
          Resume <FiDownload className="text-white text-xl" />
        </a>
      </div>
      <a href="#about-me" className="text-5xl animate-bounce cursor-pointer">
        <MdKeyboardDoubleArrowDown />
      </a>
    </div>
  );
}
