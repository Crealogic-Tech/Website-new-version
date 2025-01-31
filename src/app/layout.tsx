import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import ClientWrapper from "./Components/layout/ClientWrapper";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import Header from "@/Components/layout/Header";
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin, SplitText);

export const metadata = {
  title: "Web & Mobile App Development Company in India | Crealogic",
  description:
    "As a leading Web & Mobile App Development Company in India, We offer scalable and custom software development services globally. Get a free quote now!",
  keywords: ""
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Google Analytics script with next/script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0E3Y42YF3P"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0E3Y42YF3P');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}