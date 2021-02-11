import { NextPage } from 'next';

import Layout from '../components/layout';
import IntroMisionVision from '../components/IntroMisionVision';
import HomeHeader from '../components/HomeHeader';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { IHomePage } from '../interfaces/pages';

const Home: NextPage<IHomePage> = ({ isMobile }) => {
  return (
    <Layout isMobile={isMobile} title="Home">
      <HomeHeader />
      <IntroMisionVision />
      <Products isMobile={isMobile} />
      <NewsLetter />
    </Layout>
  );
}

export default Home;