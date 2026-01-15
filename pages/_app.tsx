import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';
import '@/styles/themes.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return (
    <Layout>
      <Head title={`Aidan CRISTINI | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
