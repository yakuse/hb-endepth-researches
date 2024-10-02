import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '@/templates/Layout';
import '@/src/assets/css/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo title="Endepth: researches" description="A short description goes here." />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
