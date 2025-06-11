import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import Hero from './Hero';
import Introduction from './Introduction';
import { FaLongArrowAltRight } from 'react-icons/fa';
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import MotionWrapper from '@/components/motion/MotionWrapper';

export default function Main() {
  return (
    <section id="home" className="wrapper mt-5">
      <div className="mx-auto mt-20 flex w-11/12 max-w-3xl scroll-mt-20 flex-col items-center gap-10 py-5">
        <Hero />
        <Introduction />

        <div className="mb-10 flex gap-2">
          <MotionWrapper
            as="a"
            href="#contact"
            preset="slideUp"
            delay={1}
            className="font-subtitle flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm"
          >
            Contact
            <FaLongArrowAltRight className="text-xl text-white" />
          </MotionWrapper>

          <MotionWrapper
            as="a"
            preset="slideUp"
            delay={1}
            href="/resume.pdf"
            target="_blank"
            className="font-subtitle flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm"
          >
            Resume <FiDownload className="text-xl text-white" />
          </MotionWrapper>
        </div>

        <a href="#about-me" className="animate-bounce cursor-pointer text-5xl">
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </section>
  );
}
