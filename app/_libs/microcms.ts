export type Category = {
  name: string;
}

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  }
  publishedAt: string;
  createdAt: string;
}