import ContactForm from './ContactForm';
import MotionWrapper from '@/components/motion/MotionWrapper';

export default function Contact() {
  return (
    <section id="contact" className="wrapper">
      <div className="mx-auto mt-20 flex w-full max-w-3xl scroll-mt-20 flex-col items-center p-5">
        <MotionWrapper
          as="h2"
          preset="slideUp"
          delay={0.3}
          className="font-title text-4xl font-bold"
        >
          Contact
        </MotionWrapper>
        <ContactForm />
      </div>
    </section>
  );
}
