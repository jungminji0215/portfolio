import MotionWrapper from '@/components/motion/MotionWrapper';

export default function SectionTitle({ children }) {
  return (
    <MotionWrapper
      as="h2"
      preset="slideUp"
      delay={0.3}
      className="font-title text-4xl font-bold"
    >
      {children}
    </MotionWrapper>
  );
}
