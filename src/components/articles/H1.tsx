export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mergedClassName = `text-primary text-5xl mb-6 font-semibold ${className}`;
  return (
    <>
      <h1 className={mergedClassName}>{children}</h1>
    </>
  );
}
