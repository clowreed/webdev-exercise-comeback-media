export function Blockquote({
  content,
  author,
}: {
  content: string | undefined;
  author: string | undefined;
}) {
  return (
    <>
      <blockquote className="mt-4 mb-12 border-l-2 pl-5 border-accent">
        <p className="text-2xl text-primary italic font-medium">{content}</p>
        {author && <div className="text-secondary mt-8">— {author}</div>}
      </blockquote>
    </>
  );
}
