export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mergedClassName = `text-primary text-3xl font-semibold pb-5 ${className}`;
  return (
    <>
      <h2 className={mergedClassName}>{children}</h2>
    </>
  );
}
