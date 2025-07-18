import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html
      className={`scroll-smooth scroll-mt-6 ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
