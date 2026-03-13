'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Top from "./component/top";
import Bot from "./component/bot";
import { Provider } from "react-redux";
import store from "./store/store";
import AppInit from "./component/appinit";
import { CookiesProvider } from "react-cookie";



export default function RootLayout({ children }) {
  return (
    <CookiesProvider>
    <Provider store={store}>
    <html lang="en">
      <head>
  <meta charSet="UTF-8" />
  <meta name="description" content="Ashion Template" />
  <meta name="keywords" content="Ashion, unica, creative, html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Ashion | Template</title>
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* Css Styles */}
  <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
  <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
  <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
  <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
  <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
  <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>

      <body>
        <AppInit/>
        <Top/>
        {children}
        <Bot/>
      </body>


      <Script async  src="/js/jquery-3.3.1.min.js"></Script>
<Script async src="/js/bootstrap.min.js"></Script>
<Script async src="/js/jquery.magnific-popup.min.js"></Script>
<Script async src="/js/jquery-ui.min.js"></Script>
<Script async src="/js/mixitup.min.js"></Script>
<Script async src="/js/jquery.countdown.min.js"></Script>
<Script async src="/js/jquery.slicknav.js"></Script>
<Script async src="/js/owl.carousel.min.js"></Script>
<Script async src="/js/jquery.nicescroll.min.js"></Script>
<Script async src="/js/main.js"></Script>
    </html>
    </Provider>
    </CookiesProvider>
  );
}
