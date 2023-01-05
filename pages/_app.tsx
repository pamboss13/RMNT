import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { Fragment, ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ??((page)=>page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
