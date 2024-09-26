"use server";

import { promises as fs } from "fs";
import path from "path";
import { Article } from "@/types/article";

export async function getArticles(): Promise<Article[]> {
  const filePath = path.join(process.cwd(), "src/data/articles.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const articles: Article[] = JSON.parse(fileContents);
  return articles;
}
