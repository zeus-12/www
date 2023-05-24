import Layout from '@/components/Layout';
import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import ScrollObserver from '@/utils/ScrollObserver';
import { AppProps } from 'next/app';
import 'prism-themes/themes/prism-night-owl.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <MantineProvider
        theme={{
          colorScheme: 'dark',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ScrollObserver>
  );
}
