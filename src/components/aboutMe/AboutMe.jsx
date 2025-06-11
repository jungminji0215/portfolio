import Image from 'next/image';
import { IoSchool } from 'react-icons/io5';
import { PiCertificateBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import SectionTitle from '@/components/common/SectionTitle';
import SectionSubTitle from '@/components/common/SectionSubTitle';
import ExternalLink from '@/components/common/ExternalLink';
import { skillBackendData, skillFrontendData } from '@/assets/assets';
import MotionWrapper from '@/components/motion/MotionWrapper';

export default function AboutMe() {
  return (
    <section id="about-me" className="wrapper">
      <div className="mx-auto mt-20 flex max-w-4xl scroll-mt-20 flex-col items-center p-5">
        <div>
          <SectionTitle>About Me</SectionTitle>
          <SectionSubTitle>저를 소개합니다.</SectionSubTitle>
        </div>

        {/* 카드 레이아웃: 왼쪽 텍스트 + 오른쪽 링크/자격증 */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* 왼쪽 텍스트 카드: 왼쪽에서 슬라이드 인 */}
          <MotionWrapper
            as="section"
            preset="slideLeft"
            delay={0.7}
            className="card flex items-center"
          >
            <p>
              저는 오랫동안 유지 가능한 코드와 구조 설계를 중요하게 생각합니다.{' '}
              <br />
              클린 코드와 Best Practice에 관심이 많으며, <br />
              이해하기 쉽고 협업하기 좋은 코드 작성을 지향합니다. <br />
              <br />
              최근에는 AI 도구를 적극적으로 활용하며 효율과 생산성을 높이고
              있습니다. <br />
              빠르게 변화하는 기술 속에서 적극적으로 배우고 성장하여, <br />
              안정적이고 사용자 경험이 뛰어난 서비스를 만드는 개발자가 되고자
              합니다.
            </p>
          </MotionWrapper>

          {/* 오른쪽 카드 그룹 */}
          <div className="flex flex-col gap-5">
            {/* GitHub & 블로그 링크 카드: 오른쪽에서 슬라이드 인 */}
            <MotionWrapper
              as="section"
              preset="slideRight"
              delay={0.9}
              className="card flex items-center justify-center gap-10"
            >
              <ExternalLink
                href="https://github.com/jungminji0215"
                className="flex flex-col items-center gap-1 duration-500 hover:-translate-y-1"
              >
                <FaGithub className="h-12 w-12" />
                <span className="font-subtitle text-sm font-bold">
                  🔗 깃허브
                </span>
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
                  alt="블로그 썸네일"
                />
                <span className="font-subtitle text-sm font-bold">
                  🔗 블로그
                </span>
              </ExternalLink>
            </MotionWrapper>

            {/* 학력·자격증 카드: 오른쪽에서 슬라이드 인 */}
            <MotionWrapper
              as="section"
              preset="slideRight"
              delay={1.1}
              className="card flex items-center justify-center gap-5"
            >
              <div className="flex flex-col items-center gap-1">
                <IoSchool className="h-12 w-12" />
                <span className="font-subtitle text-sm">한성대학교</span>
                <span className="text-xs">IT융합공학부 졸업</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <PiCertificateBold className="h-12 w-12" />
                <span className="font-subtitle text-sm">정보처리기사</span>
                <span className="text-xs">취득</span>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* 기술 스택 카드: 아래에서 슬라이드 인 */}
        <MotionWrapper
          as="div"
          preset="slideUp"
          delay={1.3}
          className="card mt-4 flex w-full flex-col gap-5"
        >
          <div>
            <h3>Frontend</h3>
            <ul className="flex flex-wrap gap-1">
              {skillFrontendData.map((skill, idx) => (
                <li key={idx}>
                  <img
                    src={skill.skillImage}
                    alt={skill.name}
                    className="rounded-sm"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Backend</h3>
            <ul className="flex flex-wrap gap-1">
              {skillBackendData.map((skill, idx) => (
                <li key={idx}>
                  <img
                    src={skill.skillImage}
                    alt={skill.name}
                    className="rounded-sm"
                  />
                </li>
              ))}
            </ul>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
