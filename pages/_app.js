import React from 'react';
import Head from 'next/head';
import { wrapper } from '../store';
import '../styles/styles.scss';
// Global SCSS imports centralized here per Next.js rules
import '../modules/layout/styles/header.scss';
import '../modules/layout/styles/HomeLayout.scss';
import '../modules/content/styles/MovieTag.scss';
import '../modules/content/styles/PlayButton.scss';
import '../modules/content/styles/TrailerSection.scss';
import '../modules/content/styles/TrailersList.scss';
import '../modules/content/styles/VideoElement.scss';
import '../modules/dropdown/styles/Dropdown.scss';
import '../modules/dropdown/styles/ListElement.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BMS assignment App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
