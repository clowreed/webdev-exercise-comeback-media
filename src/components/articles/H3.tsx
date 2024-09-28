export function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mergedClassName = `text-primary text-xl lg:text-2xl font-semibold mt-2 mb-4 ${className}`;
  return (
    <>
      <h2 className={mergedClassName}>{children}</h2>
    </>
  );
}
