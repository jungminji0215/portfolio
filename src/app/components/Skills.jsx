import React from "react";

export default function Skills() {
  return (
    <div className="bg-red-200 w-full max-w-3xl mx-auto flex flex-col items-center py-5 scroll-mt-20">
      <h2 className="text-5xl font-bold">Skills</h2>
      <p className="text-sm mb-5">아래의 기술을 사용해봤습니다.</p>
      <ul className="flex flex-col gap-10 my-10">
        <li className="p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4">Frontend</h3>
          <div className="flex gap-2">
            <img
              src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"
              className="my-4 rounded-sm"
            />
            <img
              src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=next.js&logoColor=white"
              className="my-4 rounded-sm"
            />
          </div>
        </li>
        <li className="p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4">Backend</h3>
          <div className="flex gap-2">
            <img
              src="https://img.shields.io/badge/Spring-3DDC84?style=flat-square&logo=Spring&logoColor=white"
              className="my-4 rounded-sm"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
