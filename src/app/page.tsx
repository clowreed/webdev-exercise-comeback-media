import { getArticles } from "@/actions/getArticles";
import ArticleViewer from "@/components/ArticleViewer";
import { Article } from "@/types/article";

export default async function Home() {
  const articles: Article[] = await getArticles();

  return (
    <main className="min-h-screen bg-white">
      <ArticleViewer initialArticles={articles} initialIndex={0} />
    </main>
  );
}
