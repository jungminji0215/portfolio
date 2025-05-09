import './globals.css';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://jungminji.vercel.app'),
  title: '프론트엔드 개발자 정민지',
  description: '프론트엔드 개발자 정민지의 포트폴리오 사이트',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: '프론트엔드 개발자 정민지',
    description: '프론트엔드 개발자 정민지의 포트폴리오 사이트',
    url: 'https://jungminji.vercel.app',
    siteName: '정민지 포트폴리오 사이트',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: '정민지 이미지',
      },
    ],
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
