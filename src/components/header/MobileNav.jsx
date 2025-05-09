'use client';

import { useRef } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/16/solid';

export default function MobileNav({ menuItems }) {
  const mobileMenuRef = useRef();

  const handleOpenMenu = () => {
    mobileMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const handleCloseMenu = () => {
    mobileMenuRef.current.style.transform = 'translateX(16rem)';
  };

  return (
    <>
      <div className="flex items-center gap-5">
        {/*스크린 리더는 "메뉴 열기"만 읽고, 아이콘 자체는 무시*/}
        <button
          className="cursor-pointer md:hidden"
          aria-label="메뉴 열기"
          onClick={handleOpenMenu}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <ul
        ref={mobileMenuRef}
        className="fixed top-0 -right-64 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-yellow-400 px-10 py-20 text-lg transition duration-500 md:hidden"
      >
        {/* TODO ul 밖으로 빼기 */}
        <button
          className="absolute top-6 right-6 cursor-pointer"
          aria-label="메뉴 닫기"
          onClick={handleCloseMenu}
        >
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {menuItems.map(({ label, href }) => (
          <li key={href}>
            <a onClick={handleCloseMenu} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
