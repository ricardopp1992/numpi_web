import React, { CSSProperties, FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Col} from 'react-bootstrap';

import { ISideMenu } from '../interfaces/components.interfaces';

import styles from '../assets/scss/_layot.module.scss';
import MenuIcon from '../../public/menu-icon.svg';

function MobileMenu() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className={styles.mobileMenu}>
        <Link href="/"><a className={styles.logoImage}>
          <img src="/numpi_logo.png" alt="numpi logo" />
        </a></Link>
        <img className={styles.lotoNumpiImage} src="/numpi_loto.png" alt="numpi flor logo" />
      </div>
      <SideMenu isVisible={isVisible} closeMenu={() => setIsVisible(false)} />
      <button className={styles.menuIcon} value="toggleMenu" onClick={() => setIsVisible(!isVisible)} >
        <MenuIcon className="d-inline d-lg-none" />
      </button>
    </>
  );
}

const SideMenu: FunctionComponent<ISideMenu> = ({isVisible, closeMenu}) => {
  const [sideMenuStyle, setSideMenuStyle] = useState<CSSProperties>({ zIndex: -200, opacity: 0 });

  useEffect(() => {
    if (isVisible) setSideMenuStyle({ zIndex: 100, opacity: 1 });

    if (!isVisible) {
      setSideMenuStyle({ zIndex: 100, opacity: 0 });
      setTimeout(() => setSideMenuStyle({ zIndex: -200, opacity: 0 }), 1000);
    }
  }, [isVisible]);

  const handleCloseMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clickedElemenetId = event.target['id'];
    if (clickedElemenetId === 'backgroundMenu') closeMenu()
  }

  return (
    <div
      id="backgroundMenu"
      className={styles.sideMenuBackground}
      onClick={handleCloseMenu}
      style={sideMenuStyle}>
      <div id="sideMenu" className={styles.sideMenu} >
        <img className={styles.sideMenuLogo} src="/numpi_loto.png" alt="numpi loto"/>
        <div className={styles.sideMenuItems}>
          <Link href="/home"><a>Home</a></Link>
          <Link href="/blog"><a>Aprende</a></Link>
          <Link href="/productos"><a>Productos</a></Link>
        </div>
    </div>
    </div>
  )
}

export default MobileMenu;
