import "@/styles/globals.css";
import ScrollObserver from "@/lib/scroll-observer";
import { AppProps } from "next/app";
import "prism-themes/themes/prism-night-owl.css";
import Navbar from "@/components/navbar";
// import PlausibleProvider from 'next-plausible';
import { fontSans } from "@/lib/fonts";
import { DefaultSeo } from "next-seo";
import { SEO } from "../../next-seo.config";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isRootPage = router.pathname === "/";

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
    <ScrollObserver>
      <ThemeProvider
        attribute="class"
        forcedTheme={isRootPage ? "light" : "dark"}
      >
        <main className={fontSans.className}>
          <DefaultSeo {...SEO} />
          {!isRootPage && <Navbar />}
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ScrollObserver>
  );
}
