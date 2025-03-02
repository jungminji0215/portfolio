"use client";

import React, { useState } from "react";
import Banner from "./Banner";
import { sendContactEmail } from "@/service/contact";

const DEFAULT_DATA = {
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(DEFAULT_DATA);

  const [banner, setBanner] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      sendContactEmail(form);
      setBanner({ message: "메일을 성공적으로 보냈습니다!", state: "success" });
      setForm(DEFAULT_DATA);
    } catch (error) {
      setBanner({
        message: "메일 전송에 실패했습니다. 다시 시도해 주세요.",
        state: "error",
      });
    } finally {
      setTimeout(() => setBanner(null), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        className="flex flex-col gap-2 w-full px-5"
        aria-labelledby="contact-form-title"
        onSubmit={handleSubmit}
      >
        <h2 id="contact-form-title" className="sr-only">
          연락하기 폼
        </h2>

        <label htmlFor="email" className="sr-only">
          Your Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          className="border rounded-md p-2"
          placeholder="이메일을 입력해주세요!"
          required
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="message" className="sr-only">
          메시지 입력
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="border rounded-md resize-none p-2"
          placeholder="어떤 내용이든 편하게 보내주세요! 😊"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="rounded-md cursor-pointer p-2 bg-yellow-300 hover:bg-yellow-400"
        >
          이메일 보내기
        </button>
      </form>
    </>
  );
}
