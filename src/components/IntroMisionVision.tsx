import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from '../assets/scss/_introMisionVision.module.scss';

const IntroMisionVision: FunctionComponent = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.introBackground}></div>
      <div className={styles.introBackgroundTwo}></div>
      <Container>
        <Row>
          <Col className={`${styles.introPartOne} offset-lg-4`} lg={6} sm={12}>
            <p>
              Creemos firmemente que la manera de consumir está cambiando, y debe 
              hacerlo en pro de la supervivencia de todas las especies que habitamos este increíble planeta. 
            </p>
            <p>
              Es por ello que decidimos traerte una colección de productos eco friendlies, hechos con materiales biodegradables y 
              sustentables, desde su elaboración, 
              producción y posterior desecho.
            </p>
          </Col>
          <Col className={`${styles.introPartOne} ${styles.introPartTow}`} lg={5}>
            <p>
              De esta forma tú como consumidor adoptas un rol protagónico en esta transformación hasta convertirnos en sociedades más 
              concientes de nuestros hábitos de consumo y el impacto que estos genera.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IntroMisionVision;