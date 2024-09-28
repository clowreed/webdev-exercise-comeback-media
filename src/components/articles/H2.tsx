export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mergedClassName = `text-primary text-2xl lg:text-3xl font-semibold pb-4 lg:pb-5 ${className}`;
  return (
    <>
      <h2 className={mergedClassName}>{children}</h2>
    </>
  );
}
