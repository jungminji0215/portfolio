import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "정민지 포트폴리오",
  description: "개발자 정민지의 포트폴리오 사이트",
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
