import { FunctionComponent } from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from '../assets/scss/_homeHeader.module.scss';

const HomeHeader: FunctionComponent = () => {
  return (
    <div className={styles.headerBg}>
        <Container className={styles.headerContent}>
        <Row>
          <Col lg={5} className={`offset-lg-1`}>
            <h1>ORGÁNICO</h1>
            <p>Se parte del cambio</p>
            <div className={styles.buttons}>
              <Link href=""><a className={styles.productsButton}>Ver Productos</a></Link>
              <Link href=""><a className={styles.subscribeButton}>Subscribete</a></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeHeader;