import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import ScrollObserver from '@/lib/ScrollObserver';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-night-owl.css';
import Navbar from '@/components/Navbar';
// import PlausibleProvider from 'next-plausible';
import { fontSans } from '@/lib/fonts';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <PlausibleProvider
    //   domain='vishnuu.me'
    //   selfHosted={true}
    //   customDomain='https://i-totally-love-easylist.swmg.top'
    //   trackOutboundLinks={true}
    //   taggedEvents={true}
    //   trackFileDownloads={true}
    //   // trackLocalhost={true}
    //   // enabled={true}
    // >
    <ScrollObserver>
      <MantineProvider
        theme={{
          colorScheme: 'dark',
        }}
      >
        <main className={fontSans.className}>
          <DefaultSeo {...SEO} />
          <Navbar />
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </ScrollObserver>
    // </PlausibleProvider>
  );
}
