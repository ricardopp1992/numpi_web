import React, { FunctionComponent } from 'react';
import { Col } from 'react-bootstrap';
import { Converter } from 'showdown';

import styles from '../../assets/scss/_articles.module.scss';
import { IArticleContent } from '../../interfaces/blog.interfaces';

const converter = new Converter();

const ArticleContent: FunctionComponent<IArticleContent> = ({ article }) => {
  return (
    <>
      <img
        className={styles.imageArticle}
        src={`${process.env.NEXT_PUBLIC_URL_CMS}${article.featureImage.url}`}
        alt="article image" />
      <Col className={styles.article_layout} lg={8}>
        <h1>{article.title}</h1>
        <div
          className={styles.article_content}
          dangerouslySetInnerHTML={{ __html: converter.makeHtml(article.content) }} />

        <img className={styles.lotoImage} src="/numpi_loto.png" alt="numpi loto imagen" />
      </Col>
    </>
  );
}

export default ArticleContent;
