import Image from 'next/image';
import MotionWrapper from '@/components/motion/MotionWrapper';

export default function Hero() {
  return (
    <MotionWrapper as="div" preset="scaleIn">
      <Image
        src="/hero.png"
        alt="프로필 사진"
        width={200}
        height={200}
        priority
        className="rounded-full"
      />
    </MotionWrapper>
  );
}
