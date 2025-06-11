import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import * as motion from 'motion/react-client';
import { projectData } from '@/assets/assets';
import SectionTitle from '@/components/common/SectionTitle';
import SectionSubTitle from '@/components/common/SectionSubTitle';
import MotionWrapper from '@/components/motion/MotionWrapper';

export default function Project() {
  return (
    <section id="projects" className="wrapper">
      <div className="mx-auto mt-20 flex w-full max-w-3xl scroll-mt-20 flex-col items-center p-5">
        <div>
          <SectionTitle>Projects</SectionTitle>
          <SectionSubTitle> 제가 만든 프로젝트입니다.</SectionSubTitle>
        </div>

        <ul className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
          {projectData.map((item) => (
            <MotionWrapper
              as="li"
              key={item.name}
              preset="slideUp" // initial: {opacity:0,y:-20} → animate:{opacity:1,y:0}
              delay={0.7}
              className="hover:bg-lightHover cursor-pointer rounded-lg border border-gray-400 px-8 py-10 duration-500 hover:-translate-y-1"
            >
              <div>🌼</div>
              <h3 className="font-subtitle my-4 text-lg text-gray-700">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <Link
                href={item.url}
                target="_blank"
                className="mt-5 flex items-center gap-2 text-sm"
              >
                구경하기
                <FaExternalLinkAlt className="h-4 w-4" />
              </Link>
            </MotionWrapper>
          ))}
        </ul>
      </div>
    </section>
  );
}
