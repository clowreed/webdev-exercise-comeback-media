export type Author = {
  name: string;
  role: string;
  avatar: {
    url: string;
  };
};

export type Image = {
  url: string;
};

export type ArticleBodyItem = {
  type: "p" | "h2" | "h3" | "img" | "quote" | "divider";
  content?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  author?: string;
};

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  author: Author;
  featuredImage: Image;
  body: ArticleBodyItem[];
  conclusion: string;
};
