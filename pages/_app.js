import Layout from "../components/Layout";
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ScrollObserver from "../components/ScrollObserver";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
          color: "white",
        },
      }),
    },
  });

  return (
    <ScrollObserver>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ScrollObserver>
  );
}

export default MyApp;
