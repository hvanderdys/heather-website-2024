import { useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import ReactGA from "react-ga4";
ReactGA.initialize("G-P3M7S24DQ");
// import WOW from "wowjs";

export default function Document() {
  // useEffect(() => {
  //   console.log("started");
  //   const WOW = require("wowjs");
  //   const wow = new WOW.WOW();
  //   wow.init();
  //   console.log("wowd");
  // }, []);

  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
