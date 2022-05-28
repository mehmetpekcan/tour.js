/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

import '../styles/reset.css';
import '../styles/global.css';

import 'tour.js/dist/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tour.js | Easy onboarding</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
