import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import ScrollObserver from '@/utils/ScrollObserver';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-night-owl.css';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <MantineProvider
        theme={{
          colorScheme: 'dark',
        }}
      >
        <main>
          <Navbar />
          <div className='mt-16'>
            <Component {...pageProps} />
          </div>
        </main>
      </MantineProvider>
    </ScrollObserver>
  );
}
