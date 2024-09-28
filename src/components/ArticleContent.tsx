import Image from "next/image";
import { H1, H2, H3, HR, P, AuthorInfo, Blockquote, Figure } from "./articles";
import { Article, ArticleBodyItem } from "../types/article";

export default function ArticleContent({ article }: { article: Article }) {
  const { author } = article;
  return (
    <article className="max-w-7xl mx-20 flex flex-col  items-center px-4 ">
      <section className="max-w-3xl mt-24 flex flex-col items-center">
        <H1>{article.title}</H1>
        <div className="text-xl text-secondary text-center">
          {article.subtitle}
        </div>
        <AuthorInfo
          url={author.avatar.url}
          name={author.name}
          role={author.role}
        />
      </section>
      <section className="w-[1216px] mt-12 mb-24">
        <div className="relative pb-[56.25%]">
          <Image
            src={article.featuredImage.url}
            alt={article.title}
            fill
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
      <div className="max-w-3xl px-6">
        {article.body.map((item: ArticleBodyItem, index: number) => {
          switch (item.type) {
            case "p":
              return (
                <P key={index} className="text-justify">
                  {item.content}
                </P>
              );
            case "h2":
              return <H2 key={index}>{item.content}</H2>;
            case "h3":
              return <H3 key={index}>{item.content}</H3>;
            case "img":
              return (
                <Figure
                  key={index}
                  url={item.url || ""}
                  caption={item.caption || ""}
                />
              );
            case "quote":
              return (
                <Blockquote
                  key={index}
                  content={item.content}
                  author={item.author}
                />
              );
            case "divider":
              return <HR />;
            default:
              return null;
          }
        })}
        <div className="w-full h-full my-5 rounded-2xl p-8 bg-tertiary border">
          <H2>Conclusion</H2>
          <P>{article.conclusion}</P>
        </div>
      </div>
    </article>
  );
}
