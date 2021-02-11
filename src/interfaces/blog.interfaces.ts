export interface IHeaderArticle {
  frontArticle: IFrontArticle
}

export interface IFrontArticle {
  title: string;
  date: string;
  featureImage: IFeatureImage;
  slug: string;
}

export interface IArticleList {
  articles: IArticleCardModel[];
  setLimit?: Function;
}

export interface IArticle {
  article: IArticleCardModel;
}

export interface IArticleCardModel {
  id: string;
  title: string;
  slug: string;
  date: string;
  featureImage: IFeatureImage;
}

export interface IArticleQuery {
  articles: IArticleContentModel[];
}

export interface IArticleContent {
  article: IArticleContentModel;
}

export interface IArticleContentModel {
  id: number;
  title: string;
  content: string;
  date: string;
  featureImage: IFeatureImage;
  comments: IComment[];
  relatedArticles: IArticleCardModel[]
}

export interface ICommentPage {
  comments: IComment[];
  articleId: number;
}

export interface ICategories {
  categories: ICategory[]
}

interface ICategory {
  category: string;
}

interface IComment {
  displayName: string;
  commentDate: string;
  comment: string;
}

interface IFeatureImage {
  url: string;
}