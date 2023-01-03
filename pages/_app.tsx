import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Analytics } from '@vercel/analytics/react';
import 'highlight.js/styles/base16/material-palenight.css';
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
        <meta name="title" key="title" content="Richard Solomou" />
        <meta name="keywords" key="keywords" content="Richard Solomou" />
        <meta name="description" key="description" content="Richard Solomou" />

        {/* Facebook */}
        <meta name="og:type" key="og:type" content="website" />
        <meta name="og:url" key="og:url" content="https://solomou.io" />
        <meta name="og:title" key="og:title" content="Richard Solomou" />
        <meta name="og:description" key="og:description" content="Richard Solomou" />
        <meta name="og:image" key="og:image" content="https://solomou.io/images/icons/apple-splash-1334-750.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" key="twitter:url" content="https://solomou.io" />
        <meta name="twitter:title" key="twitter:title" content="Richard Solomou" />
        <meta name="twitter:description" key="twitter:description" content="Richard Solomou" />
        <meta
          name="twitter:image"
          key="twitter:image"
          content="https://solomou.io/images/icons/apple-splash-1334-750.jpg"
        />
        <meta name="twitter:site" key="twitter:site" content="@richardsolomou" />
        <meta name="twitter:creator" key="twitter:creator" content="@richardsolomou" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </CacheProvider>
  );
};

export default MyApp;
