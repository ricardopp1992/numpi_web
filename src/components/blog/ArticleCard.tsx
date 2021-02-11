import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Col } from 'react-bootstrap';

import styles from '../../assets/scss/_articles.module.scss';
import { IArticle } from '../../interfaces/blog.interfaces';

const ArticleCard: FunctionComponent<IArticle> = ({ article }) => {
  return (
      <Col lg={4} sm={12}>
        <Link href={`blog/${article.slug}`}><a className={`${styles.articleCard}`}>
          <img src={`${process.env.NEXT_PUBLIC_URL_CMS}${article.featureImage.url}`} alt="article image" />
          <h3>{ article.title }</h3>
          <span className={styles.date}>Fecha de publicación: { new Date(article.date).toLocaleDateString() }</span>
        </a></Link>
      </Col>
  );
}

export default ArticleCard;
