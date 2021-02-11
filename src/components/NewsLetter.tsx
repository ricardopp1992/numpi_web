import { ChangeEvent, FunctionComponent, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from '../assets/scss/_newsletter.module.scss';

const NewsLetter: FunctionComponent = () => {
  const [email, setEmail] = useState('');

  const handleOnChanceEmail = (event: ChangeEvent<HTMLInputElement>) => {
    console.dir(event.currentTarget.value);
  }

  return (
    <div className={styles.newsletterBg}>
      <Container>
        <Row>
          <Col className={styles.newsletterTitle} lg={12}>
            <h3>
              ¿Queres enterarte de iniciativas ecológicas, y de nuestros últimos prductos y ofertas?
            </h3>
          </Col>
        </Row>
      </Container>
      <div className={styles.subscribeEmailInput} >
        <Container>
          <Row>
            <Col className={``} lg={3} sm={12} >
              <input id="subscribeName" placeholder="Ingresa aquí tu nombre" name="name" onChange={handleOnChanceEmail} />
            </Col>
            <Col lg={5} sm={12} >
              <input id="subscribeEmail" placeholder="Ingresa aquí tu email" name="email" onChange={handleOnChanceEmail} />
            </Col>
            <Col className={`px-3 px-lg-0`} lg={2} sm={12}>
              <button id="submitButton" >Subscribirse</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default NewsLetter;