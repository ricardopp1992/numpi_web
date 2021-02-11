import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import ReadMoreArrow from '../../../public/readmore_arrow.svg';

import styles from '../../assets/scss/_headerArticle.module.scss';

import { IHeaderArticle } from '../../interfaces/blog.interfaces';

const url = process.env['NEXT_PUBLIC_URL_CMS'];

const HeaderArticle: FunctionComponent<IHeaderArticle> = ({ frontArticle }) => {
  return (
    <Container>
      <Row>
        <Col className={styles.headerArticle} lg={12}>
          <img
            src={`${url}${frontArticle.featureImage.url}`}
            alt="artículo destacado" />
          <div className={styles.articleTitle}>
            <h3>{frontArticle.title}</h3>
            <Link href={`/blog/${frontArticle.slug}`}><a>read more<ReadMoreArrow /></a></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderArticle
