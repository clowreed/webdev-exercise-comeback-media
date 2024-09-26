"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Article } from "../types/article";
import ProgressBar from "./ProgressBar";
import ArticleContent from "./ArticleContent";

interface ArticleViewerProps {
  initialArticles: Article[];
  initialIndex: number;
}

export default function ArticleViewer({
  initialArticles,
  initialIndex,
}: ArticleViewerProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const endOfArticleRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);

  const loadNextArticle = useCallback(() => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;

    setCurrentArticleIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % articles.length;
      if (nextIndex === 0) {
        setArticles((prevArticles) => [...prevArticles, ...initialArticles]);
      }
      return nextIndex;
    });

    // Use setTimeout to ensure the DOM has updated before resetting the progress
    setTimeout(() => {
      setProgress(0);
      window.scrollTo(0, 0);
      isLoadingRef.current = false;
    }, 100);
  }, [articles, initialArticles]);

  useEffect(() => {
    const currentArticle = articles[currentArticleIndex];
    router.push(`/${currentArticle.slug}`);

    document.title = currentArticle.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", currentArticle.subtitle);
    }
  }, [currentArticleIndex, articles, router]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const articleProgress =
        (scrollPosition / (fullHeight - windowHeight)) * 100;
      setProgress(articleProgress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingRef.current) {
          loadNextArticle();
        }
      },
      { threshold: 1.0 }
    );

    if (endOfArticleRef.current) {
      observerRef.current.observe(endOfArticleRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadNextArticle]);

  return (
    <div className="relative">
      <ProgressBar progress={progress} />
      <div className="max-w-[1440px] mx-auto">
        <ArticleContent article={articles[currentArticleIndex]} />
        <div ref={endOfArticleRef} className="h-32" />
      </div>
    </div>
  );
}
