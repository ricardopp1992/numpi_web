import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { AxiosResponse } from 'axios';
import { ApolloClient, gql, NormalizedCacheObject, useQuery } from '@apollo/client';
import { Container, Row } from 'react-bootstrap';

import styles from '../../assets/scss/_articles.module.scss';
import Layout from '../../components/layout';
import ArticleContent from '../../components/blog/ArticleContent';
import RelatedArticles from '../../components/blog/RelatedArticles';
import CommentsSection from '../../components/blog/CommentsSection';
import { COMMENT_MUTATION } from '../../hooks/useCommentMutation';

import { IStrapiAuth } from '../../interfaces/strapi.interfaces';
import { initializeApollo } from '../../lib/apolloClient';
import { IArticleQuery } from '../../interfaces/blog.interfaces';
import { IArticlePage } from '../../interfaces/pages';

import AuthenticationService from '../../services/authentication-cms';

const ARTICLE_QUERY = gql`
  query GetArticle ($slug: String) {
    articles (where: {slug: $slug}) {
      id
      title
      content
      slug
      date
      featureImage {
        url
      }
      comments {
        displayName
        commentDate
        comment
      }
      relatedArticles {
        title
        slug
        date
        featureImage {
          url
        }
      }
    }
  }
`;

const Article: NextPage<IArticlePage> = ({ slug, isMobile }) => {
  const { data, loading, error } = useQuery<IArticleQuery>(
    ARTICLE_QUERY,
    {
      variables: {
        slug
      }
    }
  );

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <Layout isMobile={isMobile}>
      { isMobile || <div className={styles.headerArticleBg} /> }
      <Container>
        <Row>
          { data.articles && <ArticleContent article={data.articles[0]} /> }
          { data.articles && <RelatedArticles articles={data.articles[0].relatedArticles}/> }
        </Row>
        <CommentsSection comments={data.articles[0].comments} articleId={data.articles[0].id} />
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<IArticlePage> = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  try {
    const { data }: AxiosResponse<IStrapiAuth> = await AuthenticationService.authenticate();
    const { jwt } = data;

    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo({ jwt });
    await apolloClient.query({ query: ARTICLE_QUERY });
    await apolloClient.mutate({ mutation: COMMENT_MUTATION });
  } catch (err) {
    console.error(err);
  }

  return { props: { slug: `${params.article}` } }
}

export default Article;