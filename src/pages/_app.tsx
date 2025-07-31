import Navbar from "@/components/navbar";
import ScrollObserver from "@/lib/scroll-observer";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import "prism-themes/themes/prism-night-owl.css";
// import PlausibleProvider from 'next-plausible';
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Lenis from "lenis";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SEO } from "../../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isRootPage = router.pathname === "/";

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
    // <PlausibleProvider
    //   domain='vishnuu.com'
    //   selfHosted={true}
    //   customDomain='https://i-totally-love-easylist.swmg.top'
    //   trackOutboundLinks={true}
    //   taggedEvents={true}
    //   trackFileDownloads={true}
    //   // trackLocalhost={true}
    //   // enabled={true}
    // >
    <ThemeProvider
      attribute="class"
      forcedTheme={!isRootPage ? "dark" : undefined}
      enableSystem={false}
      enableColorScheme={true}
    >
      <ScrollObserver>
        <main
          className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}
        >
          <DefaultSeo {...SEO} />
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ScrollObserver>
    </ThemeProvider>
  );
}
