import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Hero from "./Hero";
import Introduction from "./Introduction";
import HeroActions from "./HeroActions";

export default function Main() {
  return (
    <div className="w-11/12 max-w-3xl mx-auto flex flex-col items-center gap-10 py-5 scroll-mt-20 mt-20">
      <Hero />
      <Introduction />
      <HeroActions />
      <a href="#about-me" className="text-5xl animate-bounce cursor-pointer">
        <MdKeyboardDoubleArrowDown />
      </a>
    </div>
  );
}
