'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <Image
        src="/hero.png"
        alt="프로필 사진"
        width={200}
        height={200}
        priority
        className="rounded-full"
      />
    </motion.div>
  );
}
