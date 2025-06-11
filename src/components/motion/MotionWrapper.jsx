import React from 'react';
import * as motion from 'motion/react-client';
import { PRESETS } from '@/motion/presets';

/**
 * 범용 모션 래퍼 컴포넌트
 * 모든 HTML 요소(div, p, section, li 등)에 프리셋 기반 애니메이션을 적용합니다.
 *
 * Props:
 * - as: 어떤 태그로 렌더링할지 (기본 'div')
 * - preset: PRESETS 키 값 (기본 'slideUp')
 * - delay: 애니메이션 시작 전 지연 시간(초)
 * - children: 렌더링할 자식 요소
 * - className, ...rest: 추가 HTML/CSS props
 */
export default function MotionWrapper({
  as = 'div', // 렌더링할 HTML 태그
  preset = 'slideUp', // 사용할 프리셋 키
  delay = 0, // 애니메이션 딜레이 (초)
  children,
  className,
  ...rest // aria-*, style, onViewportEnter 등
}) {
  // motion.react-client가 제공하는 motion.div, motion.span 등
  const Tag = motion[as] || motion.div;

  // 문자열 키에 대응하는 설정 객체 추출
  const { initial, animate, transition } = PRESETS[preset] || PRESETS.slideUp;

  return (
    <Tag
      initial={initial} // 시작 상태
      whileInView={animate} // 뷰포트 진입 시 목표 상태
      transition={{ ...transition, delay }} // 기본 transition + delay
      viewport={{ once: true }} // 한 번만 애니메이션
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
