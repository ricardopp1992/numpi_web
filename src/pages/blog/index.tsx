import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { AxiosResponse } from 'axios';
import { IncomingMessage } from 'http';

import BlogPage, { ARTICLES_QUERY } from '../../components/blog/BlogPage';

import { initializeApollo } from '../../lib/apolloClient';
import { IHomePage } from '../../interfaces/pages';
import AuthenticationService from '../../services/authentication-cms';
import { IStrapiAuth } from '../../interfaces/strapi.interfaces';
import { CATEGORIES_QUERY } from '../../components/blog/BlogHeader';

const Blog: NextPage<IHomePage> = ({ isMobile }) => {
  return <BlogPage isMobile={isMobile}/>
}

export const getServerSideProps: GetServerSideProps = async (contex: GetServerSidePropsContext) => {
  const req: IncomingMessage = contex.req;
  const isMobile: boolean = /Mobile/.test(req.headers['user-agent']);
  let jwt = {};

  try {
    /**
    * TODO: Logic to get the new token
    */
    const { data }: AxiosResponse<IStrapiAuth> = await AuthenticationService.authenticate();
    jwt = data.jwt;

    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo({ jwt });
    await apolloClient.query({ query: ARTICLES_QUERY });
    await apolloClient.query({ query: CATEGORIES_QUERY });
  } catch (err) {
    console.error(err);
  }

  return { props: { isMobile, jwt } }
}

export default Blog;
