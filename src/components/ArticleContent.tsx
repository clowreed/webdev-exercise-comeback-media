import Image from "next/image";
import { Article, ArticleBodyItem } from "../types/article";

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <article className="max-w-7xl mx-20 flex flex-col items-center px-4">
      <div className="max-w-3xl flex flex-col items-center">
        <h1 className="text-primary text-5xl leading-[60px] mt-24 mb-6 font-semibold w-fit">
          {article.title}
        </h1>
        <p className="text-2xl text-secondary text-center ">
          {article.subtitle}
        </p>
        <div className="w-fit mx-auto my-4">
          <div className="flex items-center gap-x-4">
            <Image
              src={article.author.avatar.url}
              alt={article.author.name}
              width={56}
              height={56}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-primary text-lg">
                {article.author.name}
              </p>
              <p className="text-secondary">{article.author.role}</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={article.featuredImage.url}
        alt={article.title}
        width={1280}
        height={720}
        className="w-full h-auto object-cover mb-5"
      />
      <div className="max-w-3xl px-6">
        {article.body.map((item: ArticleBodyItem, index: number) => {
          switch (item.type) {
            case "p":
              return (
                <p className="text-secondary text-lg" key={index}>
                  {item.content}
                </p>
              );
            case "h2":
              return (
                <h2 className="text-primary text-3xl font-semibold" key={index}>
                  {item.content}
                </h2>
              );
            case "h3":
              return (
                <h3 className="text-primary text-2xl font-semibold" key={index}>
                  {item.content}
                </h3>
              );
            case "img":
              return (
                <figure key={index}>
                  <Image
                    src={item.url || ""}
                    alt={item.caption || ""}
                    width={item.width || 720}
                    height={item.height || 480}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
              );
            case "quote":
              return (
                <blockquote key={index}>
                  {item.content}
                  {item.author && <footer>— {item.author}</footer>}
                </blockquote>
              );
            case "divider":
              return <hr key={index} className="my-8" />;
            default:
              return null;
          }
        })}
        <div className="w-full h-full my-5 rounded-2xl p-8 bg-tertiary">
          <h2 className="text-primary font-semibold text-3xl">Conclusion</h2>
          <p className="text-secondary text-lg">{article.conclusion}</p>
        </div>
      </div>
    </article>
  );
}
