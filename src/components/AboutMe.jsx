import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center p-5 scroll-mt-20 mt-20">
      <h2 className="text-4xl font-bold mb-5 font-title">About Me</h2>

      <div className="flex gap-10 my-10">
        <section className="bg-yellow-300 flex items-center">
          <p className="text-xl">
            어쩌구 저쩌구 어쩌구 저쩌구 <br />
            어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 <br />
            정민지입니다!
          </p>
        </section>

        <section className="bg-yellow-200 flex flex-col gap-5">
          <div className="flex justify-center gap-10">
            <Link
              href="https://github.com/jungminji0215"
              target="_blank"
              className="flex flex-col gap-1 items-center"
            >
              <Image
                src={"/images/github.svg"}
                width={50}
                height={50}
                alt="깃허브"
              />
              <p className="text-sm font-bold">깃허브</p>
            </Link>
            <Link
              href="https://jungminji0215.tistory.com/"
              target="_blank"
              className="flex flex-col gap-1 items-center"
            >
              <Image
                src={"/images/github.svg"}
                width={50}
                height={50}
                alt="블로그"
              />
              <p className="text-sm font-bold">블로그</p>
            </Link>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col items-center gap-1">
              <Image
                src={"/images/github.svg"}
                width={50}
                height={50}
                alt="학교"
              />
              <p className="text-sm">OO대학교</p>
              <p className="text-sm">IT융합공학부</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src={"/images/github.svg"}
                width={50}
                height={50}
                alt="자격증"
              />
              <p className="text-sm">정보처리기사</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
