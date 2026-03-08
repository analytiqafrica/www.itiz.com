import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itiz.com"),
  title: "Appilo - Responsive HTML 5 template",
  description: "Awesome App for Your Modern Lifestyle.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Appilo - Responsive HTML 5 template",
    description: "Awesome App for Your Modern Lifestyle.",
    url: "https://www.itiz.com",
    siteName: "ITIZ",
    type: "website",
    images: [
      {
        url: "/img/slider-moc-2.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/img/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <link rel="stylesheet" href="/plugins/fontawesome-5/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/plugins/flaticons/flaticon.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/css/hover-min.css" />
        <link rel="stylesheet" href="/css/jquery.bootstrap-touchspin.css" />
        <link rel="stylesheet" href="/css/jquery.bxslider.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/nouislider.css" />
        <link rel="stylesheet" href="/css/nouislider.pips.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/swiper.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        {children}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap-select.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.validate.min.js" strategy="beforeInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/js/isotope.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/js/waypoints.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="beforeInteractive" />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.easing.min.js" strategy="beforeInteractive" />
        <Script src="/js/swiper.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.bxslider.min.js" strategy="beforeInteractive" />
        <Script src="/js/custom.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}


