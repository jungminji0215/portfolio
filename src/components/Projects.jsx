import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import * as motion from 'motion/react-client';
import { projectData } from '@/assets/assets';

export default function Project() {
  return (
    <section id="projects" className="wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto mt-20 flex w-full max-w-3xl scroll-mt-20 flex-col items-center p-5"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-title text-4xl font-bold"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="my-5 text-xs"
        >
          제가 만든 프로젝트입니다.
        </motion.p>

        <ul className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
          {projectData.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="hover:bg-lightHover cursor-pointer rounded-lg border border-gray-400 px-8 py-10 duration-500 hover:-translate-y-1"
            >
              <div>🌼</div>
              <h3 className="font-subtitle my-4 text-lg text-gray-700">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <Link
                href={item.url}
                target="_blank"
                className="mt-5 flex items-center gap-2 text-sm"
              >
                구경하기
                <FaExternalLinkAlt className="h-4 w-4" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
