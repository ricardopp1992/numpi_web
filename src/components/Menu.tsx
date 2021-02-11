import { FunctionComponent } from "react";
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { Property } from 'csstype';

const Menu: FunctionComponent<IMenu> = ({ styles, sticky }) => {

  const getPosition = (sticky: boolean): Property.Position => {
    return sticky ? "fixed" : "absolute";
  }

  const getBackground = (sticky: boolean): Property.BackgroundColor => sticky ? 'rgba(2, 140, 130, 0.8)' : '';

  const setHeight = (setHeight: boolean): Property.Height => sticky ? '13vh' : '20vh';

  const getTop = (sticky: boolean): any => sticky ? '-2rem' : '0';

  const getOpacity = (sticky: boolean): Property.Opacity => sticky ? '0' : '1';

  return (
    <nav style={{
        position: getPosition(sticky),
        height: setHeight(sticky),
        backgroundColor: getBackground(sticky)
      }}
      className={styles.menu}>
      <Container>
        <Row className={styles.rowMenu}>
          <Col lg={3} >
            <Link href="/"><a className={styles.logo} >
              <img src="/numpi_logo.png" alt="numpi logo" />
              <img
                id={styles.numpiLoto}
                style={{
                  marginTop: getTop(sticky),
                  opacity: getOpacity(sticky)
                }}
                src="/numpi_loto.png"
                alt="numpi flor loto logo" />
            </a></Link>
          </Col>
          <Col lg={5} className={styles.menuLinks}>
            <Link href="/products"><a><h3>Productos</h3></a></Link>
            <Link href="/blog"><a><h3>Aprendé</h3></a></Link>
            <Link href="/contacto"><a><h3>Contactanos</h3></a></Link>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

interface IMenu {
  styles: any;
  sticky: boolean;
}

export default Menu;