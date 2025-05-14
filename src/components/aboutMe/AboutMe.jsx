import Image from 'next/image';
import { IoSchool } from 'react-icons/io5';
import { PiCertificateBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import * as motion from 'motion/react-client';
import SectionTitle from '@/components/common/SectionTitle';
import SectionSubTitle from '@/components/common/SectionSubTitle';
import ExternalLink from '@/components/common/ExternalLink';
import { skillBackendData, skillFrontendData } from '@/assets/assets';

export default function AboutMe() {
  return (
    <section id="about-me" className="wrapper">
      <div className="mx-auto mt-20 flex max-w-4xl scroll-mt-20 flex-col items-center p-5">
        <div>
          <SectionTitle>About Me</SectionTitle>
          <SectionSubTitle>저를 소개합니다.</SectionSubTitle>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col gap-5 lg:flex-row"
        >
          <section className="card flex items-center">
            <p>
              저는 오랫동안 유지 가능한 코드와 구조 설계를 중요하게 생각합니다. <br />
              클린 코드와 Best Practice 에 관심이 많으며, <br />
              이해하기 쉽고 협업하기 좋은 코드 작성을 지향합니다. <br />
              <br />
              최근에는 AI 도구를 적극적으로 활용하며 효율과 생산성을 높이고 있습니다. <br />
              빠르게 변화하는 기술 속에서 적극적으로 배우고 성장하여, <br /> 안정적이고 사용자
              경험이 뛰어난 서비스를 만드는 개발자가 되고자 합니다.
              <br />
            </p>
          </section>

          <div>
            <section className="card flex items-center justify-center gap-10">
              <ExternalLink
                href="https://github.com/jungminji0215"
                className="flex flex-col items-center gap-1 duration-500 hover:-translate-y-1"
              >
                <FaGithub className="h-12 w-12" />
                <p className="font-subtitle text-sm font-bold">🔗 깃허브</p>
              </ExternalLink>

              <ExternalLink
                href="https://www.jungminji.com"
                className="flex flex-col items-center gap-1 duration-500 hover:-translate-y-1"
              >
                <Image
                  src="/hero.png"
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="블로그 썸네일 이미지"
                />
                <p className="font-subtitle text-sm font-bold">🔗 블로그</p>
              </ExternalLink>
            </section>
            <section className="card flex items-center justify-center gap-5">
              <div className="flex flex-col items-center gap-1">
                <IoSchool className="h-12 w-12" />
                <p className="font-subtitle text-sm">한성대학교</p>
                <p className="text-xs">IT융합공학부 졸업</p>
              </div>

              <div className="flex flex-col items-center gap-1">
                <PiCertificateBold className="h-12 w-12" />

                <p className="font-subtitle text-sm">정보처리기사</p>
                <p className="text-xs">취득</p>
              </div>
            </section>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="card mt-4 flex w-full flex-col gap-5"
        >
          <div>
            <h3>Frontend</h3>
            <ul className="flex flex-wrap gap-1">
              {skillFrontendData.map((skill, index) => (
                <li key={index}>
                  <img src={skill.skillImage} alt="기술 아이콘" className="rounded-sm" />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Backend</h3>
            <ul className="flex flex-wrap gap-1">
              {skillBackendData.map((skill, index) => (
                <li key={index}>
                  <img src={skill.skillImage} alt="기술 아이콘" className="rounded-sm" />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
