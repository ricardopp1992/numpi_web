export interface IStrapiAuth {
  jwt: string;
  user: IStrpiUser;
}

export interface IStrpiUser {
  id: number;
  email: string;
  username: string;
  provider: string;
  local: string;
  blocked: boolean;
  role: IStrapiRole;
}

export interface IStrapiRole {
  id: number;
  name: string;
  description: string;
  type: string;
}