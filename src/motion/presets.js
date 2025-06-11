/**
 * 모션 프리셋 정의 파일
 */

export const fade = {
  initial: { opacity: 0 }, // 시작: 완전 투명
  animate: { opacity: 1 }, // 종료: 완전 불투명
  transition: { duration: 0.5 }, // 0.5초 동안 실행
};

export const slideUp = {
  initial: { opacity: 0, y: -20 }, // 시작: 위로 20px, 투명
  animate: { opacity: 1, y: 0 }, // 종료: 원위치, 불투명
  transition: { duration: 0.5 }, // 0.5초 동안 실행
};

export const scaleIn = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: { duration: 0.8, type: 'spring', stiffness: 100 },
};

export const slideLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};
export const slideRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

export const PRESETS = {
  fade,
  slideUp,
  scaleIn,
  slideLeft,
  slideRight, // <- 추가
};
