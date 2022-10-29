import "../styles/globals.css";
import type { AppProps } from "next/app";

import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
