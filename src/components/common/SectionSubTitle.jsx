import React from 'react';
import * as motion from 'motion/react-client';

export default function SectionSubTitle({ children }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="my-5 text-center text-xs"
    >
      {children}
    </motion.p>
  );
}
