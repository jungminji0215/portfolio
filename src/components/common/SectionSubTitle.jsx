import MotionWrapper from '@/components/motion/MotionWrapper';

export default function SectionSubTitle({ children }) {
  return (
    <MotionWrapper
      as="p"
      preset="slideUp"
      delay={0.5}
      className="my-5 text-center text-xs"
    >
      {children}
    </MotionWrapper>
  );
}
