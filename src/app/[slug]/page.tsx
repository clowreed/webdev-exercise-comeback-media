import { Metadata } from "next";
import ArticleViewer from "@/components/ArticleViewer";
import { getArticles } from "@/actions/getArticles";
import { Article } from "@/types/article";

export async function generateStaticParams() {
  const articles: Article[] = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articles: Article[] = await getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.subtitle,
  };
}

export default async function ArticlePage({ params }: Props) {
  const articles: Article[] = await getArticles();
  const initialIndex = articles.findIndex(
    (article) => article.slug === params.slug
  );

  if (initialIndex === -1) {
    return <div>Article not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <ArticleViewer initialArticles={articles} initialIndex={initialIndex} />
    </main>
  );
}
