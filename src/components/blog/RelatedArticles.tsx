import React, { FunctionComponent } from 'react';
import { Col } from 'react-bootstrap';
import { IArticleList } from '../../interfaces/blog.interfaces';

import styles from '../../assets/scss/_articles.module.scss';
import Link from 'next/link';

const RelatedArticles: FunctionComponent<IArticleList> = ({ articles }) => {
  return (
    <>
      {/* <Col lg={12} sm={12}></Col> */}
      <Col className={`${styles.relatedArticles} offset-lg-1`} lg={3}>
        <h2>Artículos Relacionados</h2>
        {
          articles.map(article => (
            <Link href={`/blog/${article.slug}`} key={article.id}>
              <a className={styles.relatedArticle_card}>
                <img
                  src={`${process.env.NEXT_PUBLIC_URL_CMS}${article.featureImage.url}`}
                  alt={`related article image ${article.id}`} />
                <h3>{ article.title }</h3>
              </a>
            </Link>
          ))
        }
      </Col>
    </>
  );
}

export default RelatedArticles;