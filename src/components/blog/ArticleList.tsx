import React, { FunctionComponent, MouseEvent } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import styles from '../../assets/scss/_articles.module.scss';

import ArticleCard from './ArticleCard';
import { IArticleList, IArticleCardModel } from '../../interfaces/blog.interfaces';

const ArticleList: FunctionComponent<IArticleList> = ({ articles,setLimit }) => {
  const addMoreArticles = (event: MouseEvent<HTMLDivElement, MouseEventInit>) => {
    setLimit((oldState: number) => oldState + 3);
  }

  return (
    <>
      <Container className={styles.articleListContainer}>
        <Row>
          <Col lg={12}> <h2 className={styles.articlesH2}>Artículos</h2></Col>
          <Col lg={10}>
            {
              articles
              .reduce((prev: any[][], article: IArticleCardModel, i: number) => {
                if (i % 3 === 0) {
                  prev.push([]);
                }

                const lastChunk = prev.length === 0 ? 0 : prev.length - 1;
                prev[lastChunk].push(<ArticleCard article={article} key={article.id}/>);

                return prev;
              }, [])
              .map((articlesChunk, i) => <Row className={styles.cardsRow} key={i}>{articlesChunk}</Row>)
            }
          </Col>
          <Col className={styles.articles_banner} lg={2}>
            {/* 
              PLACE HERE ADS 
            */}
          </Col>
        </Row>
        <Row>
          <div onClick={addMoreArticles} className={styles.cargarMas}>Ver mas artículos</div>
        </Row>
      </Container>
    </>
  );
}

export default ArticleList;