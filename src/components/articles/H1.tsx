export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mergedClassName = `text-primary text-4xl lg:text-5xl mt-16 lg:mt-0 mb-4 lg:mb-6 font-semibold ${className}`;
  return (
    <>
      <h1 className={mergedClassName}>{children}</h1>
    </>
  );
}
