import Layout from "../components/Layout";
import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import ScrollObserver from "../components/ScrollObserver";

function MyApp({ Component, pageProps }) {
  return (
    <ScrollObserver>
      <MantineProvider
        theme={{
          colorScheme: "dark",
          dark: [
            "#d5d7e0",
            "#acaebf",
            "#8c8fa3",
            "#666980",
            "#4d4f66",
            "#34354a",
            "#2b2c3d",
            "#1d1e30",
            "#0c0d21",
            "#01010a",
          ],
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ScrollObserver>
  );
}

export default MyApp;
