import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "정민지 포트폴리오 사이트",
  description: "개발자 정민지의 포트폴리오 사이트",

  openGraph: {
    type: "website",
    title: "정민지 포트폴리오 사이트",
    description: "웹 개발자 정민지의 정민지 포트폴리오 사이트",
    url: "https://jungminji.vercel.app/",
    siteName: "정민지 포트폴리오 사이트",
    images: [
      {
        url: "/jungminji.png",
        width: 1200,
        height: 630,
        alt: "jungminji image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || "light";
                document.documentElement.classList.add('dark');               
              })();`,
          }}
        />
      </head>
      <body className="font-content ">
        {/* <body className="font-content dark:bg-darkTheme dark:text-white"> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
