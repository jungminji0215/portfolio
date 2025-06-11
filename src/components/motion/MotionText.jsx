import * as motion from 'motion/react-client';
import { PRESETS } from '@/motion/presets';

/**
 * 텍스트 분할
 * 'char' | 'word' | 'line' 단위로 분할
 * 단어 간 공백은 non-breaking space
 */
function splitText(text = '', type = 'none') {
  if (type === 'char') {
    return text.split('').map((t, i) => ({ t, key: i }));
  }
  if (type === 'word') {
    const words = text.split(' ');
    return words.map((w, i) => ({
      // 단어 뒤에 일반 공백 대신 non-breaking space 추가
      t: w + (i < words.length - 1 ? '\u00A0' : ''),
      key: i,
    }));
  }
  if (type === 'line') {
    return text.split('\n').map((l, i) => ({ t: l + '\n', key: i }));
  }
  return [{ t: text, key: 0 }];
}

/**
 * 텍스트 전용 모션 컴포넌트
 * - character, word, line 단위 애니메이션 지원
 * - 기본 Fade/SlideUp 프리셋 적용 가능
 */
export default function MotionText({
  as = 'span',
  preset = 'slideUp',
  split = 'word', // 'none' | 'char' | 'word' | 'line'
  delay = 0,
  children,
  className,
  ...rest
}) {
  const Tag = motion[as] || motion.span;
  const config = PRESETS[preset] || PRESETS.slideUp;
  const { initial, animate, transition } = config;

  // 문자열이 아니거나 split='none'인 경우 일반 요소처럼 처리
  if (typeof children !== 'string' || split === 'none') {
    return (
      <Tag
        initial={initial}
        whileInView={animate}
        transition={{ ...transition, delay }}
        viewport={{ once: true }}
        className={className}
        {...rest}
      >
        {children}
      </Tag>
    );
  }

  const segments = splitText(children, split);

  return (
    <Tag className={className} {...rest}>
      {segments.map(({ t, key }, i) => (
        <motion.span
          key={key}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          initial={initial}
          whileInView={animate}
          transition={{
            ...transition,
            delay: delay + i * (split === 'char' ? 0.03 : 0.1),
          }}
          viewport={{ once: true }}
        >
          {t}
        </motion.span>
      ))}
    </Tag>
  );
}
