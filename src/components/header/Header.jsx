import DesktopNav from '@/components/header/DesktopNav';
import MobileNav from '@/components/header/MobileNav';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'About Me', href: '#about-me' },
  // { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <>
      <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%]">
        <Image
          src="/images/header-bg-color.png"
          alt="헤더 배경"
          width={1920}
          height={200}
          className="w-full"
          priority
        />
      </div>

      <header className="fixed top-0 z-50 flex w-full justify-center">
        <nav className="flex w-5xl items-center justify-between p-5">
          <Link href="/" aria-label="홈으로 이동">
            <h1 className="font-title text-xl font-bold">Jungminji</h1>
          </Link>

          <DesktopNav menuItems={menuItems} />
          <MobileNav menuItems={menuItems} />
        </nav>
      </header>
    </>
  );
}
