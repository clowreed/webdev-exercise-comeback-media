import Image from "next/image";
import { H1, H2, H3, HR, P, AuthorInfo, Blockquote, Figure } from "./articles";
import { Article, ArticleBodyItem } from "../types/article";

export default function ArticleContent({ article }: { article: Article }) {
  const { author } = article;
  return (
    <article className="w-full lg:max-w-7xl 2xl:mx-20 flex flex-col items-center">
      <section className="max-w-full 2xl:max-w-3xl px-4 mt-0 lg:mt-24 flex flex-col items-start lg:items-center">
        <H1>{article.title}</H1>
        <div className="text-lg lg:text-xl text-secondary lg:text-center">
          {article.subtitle}
        </div>
        <AuthorInfo
          url={author.avatar.url}
          name={author.name}
          role={author.role}
        />
      </section>
      <div className="w-full lg:w-[1216px] mt-0 lg:mt-12 lg:mb-24 order-first lg:order-2">
        <div className="relative pb-[56.25%]">
          <Image
            src={article.featuredImage.url}
            alt={article.title}
            fill
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <section className="max-w-full lg:max-w-3xl mt-16 lg:mt-0 px-4 lg:px-6 order-last">
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
        <div className="w-full h-full mt-2 mb-8 lg:my-5 rounded-2xl p-5 lg:p-8 bg-tertiary">
          <H2>Conclusion</H2>
          <P>{article.conclusion}</P>
        </div>
      </section>
    </article>
  );
}
