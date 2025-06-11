import MotionText from '@/components/motion/MotionText';

export default function Introduction() {
  return (
    <div className="space-y-5">
      <h3 className="text-center text-3xl md:text-5xl">
        <MotionText split="word" preset="slide" delay={0.5}>
          안녕하세요!
        </MotionText>
      </h3>

      <h3 className="text-center text-3xl md:text-5xl">
        <MotionText split="word" preset="slide" delay={1}>
          프론트엔드 개발자 정민지 입니다.
        </MotionText>
      </h3>
    </div>
  );
}
