import type { AppProps } from "next/app";
import DefaultLayout from "../layout/defaultLayout";
import "../styles/globals.css";
import "../styles/tailwindcss.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
