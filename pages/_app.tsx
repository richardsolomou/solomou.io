import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';

import { Layout } from '../components/Layout';
import createEmotionCache from '../lib/createEmotionCache';
import '../styles/global.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache: EmotionCache;
};

/**
 * React app
 * @param Component
 * @param pageProps
 * @param emotionCache
 */
const MyApp: React.FC<MyAppProps> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="title" content="Richard Solomou" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
};

export default MyApp;
