import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-red-200 w-full max-w-3xl mx-auto flex flex-col items-center py-5 scroll-mt-20">
      <h2 className="text-5xl font-bold">Contact</h2>
      <p className="text-sm mb-5">이메일로 연락 가능합니다.</p>
      <ContactForm />
    </div>
  );
}
