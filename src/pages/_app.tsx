import Navbar from "@/components/navbar";
import ScrollObserver from "@/lib/scroll-observer";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import "prism-themes/themes/prism-night-owl.css";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Lenis from "lenis";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import { SEO } from "../../next-seo.config";
import { serifFont } from "@/lib/utils";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ScrollObserver>
      <main className={`${GeistSans.variable} ${GeistMono.variable} ${serifFont.variable} font-sans`}>
        <DefaultSeo {...SEO} />
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ScrollObserver>
  );
}
