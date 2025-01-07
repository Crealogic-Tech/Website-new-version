import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "./Components/layout/Header";
import ClientWrapper from "./Components/layout/ClientWrapper";
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin, SplitText)

export const metadata = {
  title: "Web & Mobile App Development Company in India | Crealogic",
  description:
    "As a leading Web & Mobile App Development Company in India, We offer scalable and custom software development services globally. Get a free quote now!",
  keywords: "",
  icons: {
    icon: "../../favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body >
        <ClientWrapper>
          <Header />
          <main>{children}</main>
        </ClientWrapper>
      </body>
    </html>
  );
}
