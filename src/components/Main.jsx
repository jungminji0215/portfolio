import React from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import Hero from './Hero';
import Introduction from './Introduction';
import HeroActions from './HeroActions';

export default function Main() {
  return (
    <section id="home" className="wrapper mt-5">
      <div className="mx-auto mt-20 flex w-11/12 max-w-3xl scroll-mt-20 flex-col items-center gap-10 py-5">
        <Hero />
        <Introduction />
        <HeroActions />
        <a href="#about-me" className="animate-bounce cursor-pointer text-5xl">
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </section>
  );
}
