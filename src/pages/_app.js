import "@/styles/globals.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-P3M7S24DQ");

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
