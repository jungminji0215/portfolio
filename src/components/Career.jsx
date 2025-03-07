import React from "react";

export default function Career() {
  return (
    <div className="bg-red-200 w-full max-w-3xl mx-auto flex flex-col items-center py-5 scroll-mt-20">
      <h2 className="text-5xl font-bold">Career</h2>
      <p className="text-sm mb-5">저의 개발 경력입니다.</p>

      <ul className="border-l-2 border-l-yellow-300 my-10">
        <li className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full">
          <div className="text-yellow-300 mb-2">2020 - 2021</div>
          <h3 className="text-lg mb-4">보맵ㄴ</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil</p>
        </li>

        <li className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full">
          <div className="text-yellow-300 mb-2">2020 - 2021</div>
          <h3 className="text-lg mb-4">보맵</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil</p>
        </li>
        <li className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full">
          <div className="text-yellow-300 mb-2">2020 - 2021</div>
          <h3 className="text-lg mb-4">보맵</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil</p>
        </li>
        <li className="relative pl-[1.6rem] mb-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-[-0.65rem] before:w-[1.2rem] before:h-[1.2rem] before:bg-yellow-300 before:rounded-full">
          <div className="text-yellow-300 mb-2">2020 - 2021</div>
          <h3 className="text-lg mb-4">보맵</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil</p>
        </li>
      </ul>
    </div>
  );
}
