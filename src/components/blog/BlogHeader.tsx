import React, { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Col, Container, Row } from 'react-bootstrap';

import { IBlogHeader } from '../../interfaces/components.interfaces';

import styles from '../../assets/scss/_headerArticle.module.scss';

export const CATEGORIES_QUERY = gql`
  query {
    categories {
      category
    }
  }
`;

const BlogHeader: FunctionComponent<IBlogHeader> = ({ isMobile }) => {
  const { data, loading } = useQuery(CATEGORIES_QUERY);

  return (
    <>
      { isMobile || <div className={styles.headerArticleBg} /> }
      <Container className={styles.blogHeader_background}>
        <Row>
          <Col className={styles.blogHeader} >
            <h1>Blog</h1>
            <h3>
              Hola, nos encanta tenerte por acá, en este sitio encontrarás información valiosa
              respecto a los temas ecológicos mas interesantes, espero disfrutes este espacio para aprender
              y construir junto a nosotros un mundo más sustentable.
            </h3>
            <div className={styles.categoriesList} >
              {
                !loading && data.categories.map(({ category }) => 
                  <button>{category}</button>)
              }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogHeader;