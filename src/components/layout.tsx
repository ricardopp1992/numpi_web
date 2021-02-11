import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import styles from '../assets/scss/_layot.module.scss';
import useScroll from '../hooks/useScroll';

import Menu from './Menu';
import  MobileMenu from './MobileMenu';
import Footer from './Footer';

export interface ILayout {
  isMobile: boolean;
  title?: string
}

const Layout: FunctionComponent<ILayout> = ({ children, isMobile, title }) => {
  let onTop: boolean, setIsOnTop: Dispatch<SetStateAction<boolean>>, sticky: boolean;
  const edge: number = 50;

  if (typeof window !== 'undefined') {
    [onTop, setIsOnTop] = useState(window.scrollY < edge);
    sticky = useScroll(onTop, edge);
  }

  useEffect(() => {
    setIsOnTop(!sticky);
  }, [sticky]);

  return (
    <>
    <Helmet>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      <title>{ `Numpi - ${title}` }</title>
    </Helmet>
    {
      isMobile ?
      <MobileMenu />
      :
      <Menu styles={styles} sticky={sticky} />
    }
      <main className={styles.main}>
      {
        children
      }
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;