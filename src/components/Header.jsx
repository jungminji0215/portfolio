"use client";

import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const mobileMenuRef = useRef();

  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log("isDarkMode :>> ", isDarkMode);

  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  const handleOpenMenu = () => {
    mobileMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const handleCloseMenu = () => {
    mobileMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <header className="fixed top-0 w-full flex justify-center z-50">
      <nav className="w-5xl flex justify-between items-center p-5">
        <a href="#">
          <h1 className="text-xl font-bold font-title">Jungminji</h1>
        </a>
        <ul className="hidden md:flex gap-4 items-center text-lg rounded-full px-8 py-3 bg-white shadow-sm font-subtitle">
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
          <button className="cursor-pointer ml-14" onClick={handleDarkMode}>
            <MdOutlineDarkMode className="text-3xl" />
          </button>
          <button className="md:hidden cursor-pointer" onClick={handleOpenMenu}>
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
  );
}
