"use client";

import { motion } from "motion/react";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const mobileMenuRef = useRef();

  const [isDarkMode, setIsDarkMode] = useState(null);

  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   setIsDarkMode(theme === "dark");
  // }, []);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [isDarkMode]);

  const handleOpenMenu = () => {
    mobileMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const handleCloseMenu = () => {
    mobileMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src="/images/header-bg-color.png" alt="" className="w-full" />
      </div>

      <header className="fixed top-0 w-full flex justify-center z-50">
        {/* 투명 배경 */}

        <nav className="w-5xl flex justify-between items-center p-5">
          <a href="#">
            <h1 className="text-xl font-bold font-title">Jungminji</h1>
          </a>

          <ul className="hidden md:flex gap-4 items-center text-lg rounded-full px-8 py-3 bg-white shadow-sm bg-opacity-50 font-subtitle mr-28">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            {/* <button className="cursor-pointer ml-14" onClick={handleDarkMode}>
            <MdOutlineDarkMode className="text-3xl" />
          </button> */}
            <button
              className="md:hidden cursor-pointer"
              onClick={handleOpenMenu}
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>

          {/* ----- mobile nav ----- */}
          <ul
            ref={mobileMenuRef}
            className="bg-yellow-400 text-lg flex flex-col gap-4 md:hidden py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen -right-64 transition duration-500"
          >
            <button
              className="absolute right-6 top-6 cursor-pointer"
              onClick={handleCloseMenu}
            >
              <Image
                src="/images/close-black.png"
                alt="닫기 버튼"
                className="w-5"
                width={50}
                height={50}
              />
            </button>

            <li>
              <a onClick={handleCloseMenu} href="#">
                Home
              </a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#about-me">
                About Me
              </a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#career">
                Career
              </a>
            </li>
            <li>
              <a onClick={handleCloseMenu} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
