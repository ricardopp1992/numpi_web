import React, { FunctionComponent, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import Layout from '../../components/layout';
import HeaderArticle from '../../components/blog/HeaderArticle';
import ArticleList from '../../components/blog/ArticleList';
import BlogHeader from '../../components/blog/BlogHeader';

import { IArticleList, IFrontArticle } from '../../interfaces/blog.interfaces';
import { Container } from 'react-bootstrap';

export interface IBlogPageProps {
  isMobile: boolean;
}

export const ARTICLES_QUERY = gql`
  query GetArticles ($limit: Int) {
    articles(limit: $limit) {
      id
      slug
      title
      date
      featureImage {
        url
      }
    }
  }`;

const BlogPage: FunctionComponent<IBlogPageProps> = ({ isMobile }) => {
  let limit: number, setLimit: Function;
  let cacheArticles: IArticleList = { articles: [] }, setCacheArticles: Function;

  if (typeof window !== 'undefined') {
    [cacheArticles, setCacheArticles] = useState({ articles: [] });
    [limit, setLimit] = useState(7);
  }

  const { loading, data, error } = useQuery<IArticleList>(
    ARTICLES_QUERY,
    {
      variables: {
        limit: limit || 2
      }
    }
  );

  useEffect(() => {
    if (data) setCacheArticles(data);
  }, [data]);

  if (!cacheArticles.articles.length && loading) return <div>Loading</div>

  const frontArticle: IFrontArticle = cacheArticles.articles[0];

  return (
    <Layout isMobile={isMobile}>
      <BlogHeader isMobile={isMobile} />
      { frontArticle && <HeaderArticle frontArticle={frontArticle} />}
      <ArticleList articles={cacheArticles.articles.slice(1)} setLimit={setLimit} />
    </Layout>
  );
}

export default BlogPage;