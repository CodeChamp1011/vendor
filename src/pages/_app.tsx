import type { AppProps } from "next/app";
import React from "react";
import "@/assets/scss/common.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
