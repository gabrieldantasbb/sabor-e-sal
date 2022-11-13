import React from "react";
import Layout from "../components/layout";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";


function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
