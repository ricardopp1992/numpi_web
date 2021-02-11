import axios, { AxiosResponse } from 'axios';

import { IStrapiAuth } from '../interfaces/strapi.interfaces';

export default class AuthenticationService {
  constructor() {
  }

  public static async authenticate(): Promise<AxiosResponse<IStrapiAuth>> {
    return await axios.post(`${process.env.NEXT_PUBLIC_URL_CMS}/auth/local`, {
      identifier: process.env.CMS_USER,
      password: process.env.CMS_PASSWORD
    });
  }
}