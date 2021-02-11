import { ApolloProvider } from '@apollo/client';
import '../assets/scss/application.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/swiper.scss';

import { useApollo } from '../lib/apolloClient';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { AppProps } from 'next/dist/next-server/lib/router/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo({ jwt: pageProps.jwt });
  console.log(`inside MyApp component ${JSON.stringify(pageProps)}`);

  return (
    <ApolloProvider client={apolloClient} >
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContextType) => {
  const userAgent = appContext.ctx.req.headers['user-agent'];
  const isMobile = /(Android|iPhone)/.test(userAgent)

  return { pageProps: { isMobile } };
}