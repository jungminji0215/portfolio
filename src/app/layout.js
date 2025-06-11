import './globals.css';

import Footer from '../components/Footer';
import Header from '../components/header/Header';

export const metadata = {
  metadataBase: new URL('https://jungminji.vercel.app'),
  title: '프론트엔드 개발자 정민지',
  description: '프론트엔드 개발자 정민지의 포트폴리오 사이트',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
