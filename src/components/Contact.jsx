import React from 'react';
import * as motion from 'motion/react-client';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto mt-20 flex w-full max-w-3xl scroll-mt-20 flex-col items-center p-5"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-title text-4xl font-bold"
        >
          Contact
        </motion.h2>
        <ContactForm />
      </motion.div>
    </section>
  );
}
