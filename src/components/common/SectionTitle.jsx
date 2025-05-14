import React from 'react';
import * as motion from 'motion/react-client';

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="font-title text-4xl font-bold"
    >
      {children}
    </motion.h2>
  );
}
