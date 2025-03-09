import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center p-5 scroll-mt-20">
      <h2 className="text-4xl font-bold font-title">Contact</h2>
      <ContactForm />
    </div>
  );
}
