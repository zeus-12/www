import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import ScrollObserver from '@/lib/ScrollObserver';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-night-owl.css';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import PlausibleProvider from 'next-plausible';
import { fontMono, fontSans } from '@/lib/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <PlausibleProvider
    //   domain='vishnuu.me'
    //   selfHosted={true}
    //   customDomain='https://a.bignutty.xyz'
    // >
    <ScrollObserver>
      <MantineProvider
        theme={{
          colorScheme: 'dark',
        }}
      >
        <main className={fontSans.className}>
          <Seo />
          <Navbar />
          <div className='mt-16'>
            <Component {...pageProps} />
          </div>
        </main>
      </MantineProvider>
    </ScrollObserver>
    // </PlausibleProvider>
  );
}
