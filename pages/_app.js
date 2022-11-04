import React from "react";
import Layout from "../components/layout";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
