import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../assets/scss/_layot.module.scss';
import MlLogo from '../../public/logo-ml.svg';
import IgLogo from '../../public/instagram.svg';

const Footer: FunctionComponent = (props) => {
  return (
    <Container className={styles.footerContainer}>
      <Row>
        <Col className={styles.logo} lg={2} sm={12}>
          <Link href="/"><a>
            <img src="/numpi_logo.png" alt="numpi logo" />
            <img src="/numpi_loto.png" alt="numpi loto flor" />
          </a></Link>
        </Col>
        <Col className={`${styles.siteMap} offset-lg-1`} lg={3} sm={12} >
          <h3>Mapa del Sitio</h3>
          <ul>
            <li><Link href=""><a>Home</a></Link></li>
            <li><Link href=""><a>Productos</a></Link></li>
            <li><Link href=""><a>Aprendé</a></Link></li>
            <li><Link href=""><a>Contacto</a></Link></li>
          </ul>
        </Col>
        <Col className={styles.speechBubbles} lg={4} sm={12}>
          <div>
            <p>Subscríbite a nuestra newsletter y enterate todo sobre Numpi</p>
          </div>
          <div>
            <p>Además de consejos de como ser parte del cambio</p>
          </div>
        </Col>
        <Col className={`${styles.rrss} offset-lg-1`} lg={1}>
          <a href="https://www.instagram.com/numpi.organico/" target="_blank" rel="noopenner">
            <IgLogo />
          </a>
          <a href="https://www.instagram.com/numpi.organico/" target="_blank" rel="noopenner">
            <MlLogo /*style={{ width: '150%' }}*/ />
          </a>
        </Col>
      </Row>
      <Row className={styles.bottomPhrase}>
        <Col lg={12} sm={12} >
          <p>Hecho con <img src="/green_heart.png" alt="heart" /> y conciencia, para un <img src="/world_leaf.png" alt="mundo" /> más verde</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
