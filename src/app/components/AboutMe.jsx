import React from "react";

export default function AboutMe() {
  return (
    <div className="bg-red-200 w-full max-w-3xl mx-auto flex flex-col items-center py-5 scroll-mt-20">
      <h2 className="text-3xl">About Me</h2>

      <div className="about-me max-container">
        <section className="about-me__description">
          <p className="about-me__description__message">
            성장과 도전의 가치를 알고 <br />
            배우고 부딪히며 꾸준히 발전하고있는 <br />
            정민지입니다.
          </p>
        </section>

        <section className="about-me__info_items">
          <div className="about-me__item">
            <div className="about-me__item__title">
              <i className="fa-solid fa-user about-me__item__title__icon"></i>
              <p>이름</p>
            </div>
            <p className="about-me__item__content">정민지</p>
          </div>

          <div className="about-me__item">
            <div className="about-me__item__title">
              <i className="fa-regular fa-envelope about-me__item__title__icon"></i>
              <p>이메일</p>
            </div>
            <p className="about-me__item__content">wjdalswl0215@gmail.com</p>
          </div>

          <div className="about-me__item">
            <div className="about-me__item__title">
              <i className="fa-regular fa-file about-me__item__title__icon"></i>
              <p>이력서</p>
            </div>
            <a className="about-me__item__content"> 링크 </a>
          </div>

          <div className="about-me__item">
            <div className="about-me__item__title">
              <i className="fa-brands fa-github about-me__item__title__icon"></i>
              <p>깃허브</p>
            </div>
            <a
              href="https://github.com/jungminji0215"
              target="_blank"
              className="about-me__item__content"
            >
              https://github.com/jungminji0215
            </a>
          </div>

          <div className="about-me__item">
            <div className="about-me__item__title">
              <i className="fa-solid fa-blog about-me__item__title__icon"></i>
              <p>블로그</p>
            </div>
            <a
              href="https://jungminji0215.tistory.com/"
              target="_blank"
              className="about-me__item__content"
            >
              https://jungminji0215.tistory.com/
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
