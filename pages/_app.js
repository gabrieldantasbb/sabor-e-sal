import React from "react";
import Layout from "../components/layout";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient"


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
