export const SEO = {
  titleTemplate: "%s | Vishnu",
  defaultTitle: "Vishnu | Software Developer & Design Enthusiast",
  description:
    "Hey, I'm Vishnu a new-grad from IIT Madras, self-taught developer, and design enthusiast. I build web, desktop, and mobile apps.",
  canonical: "https://vishnuu.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishnuu.com",
    siteName: "Vishnu",
    images: [
      {
        url: "https://vishnuu.com/me.png",
        width: 800,
        height: 600,
        alt: "Vishnu",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  themeColor: "black",
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "application-name",
      content: "Vishnu",
    },
  ],

  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "any",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      href: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
  ],
};
