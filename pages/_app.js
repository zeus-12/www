import Layout from "../components/Layout";
import "../styles/globals.css";
import { MantineProvider } from '@mantine/core';
import ScrollObserver from "../components/ScrollObserver";

function MyApp({ Component, pageProps }) {
 
  return (
    
    <ScrollObserver>
      <Layout>
        <Component {...pageProps} />
        </Layout>
    </ScrollObserver>
  );
}

export default MyApp;
