import Navbar from "@/components/navbar";
import ScrollObserver from "@/lib/scroll-observer";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import "prism-themes/themes/prism-night-owl.css";
// import PlausibleProvider from 'next-plausible';
import { fontSans } from "@/lib/fonts";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { SEO } from "../../next-seo.config";

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
        enableColorScheme={true}
      >
        <main className={fontSans.className}>
          <DefaultSeo {...SEO} />
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ScrollObserver>
  );
}
