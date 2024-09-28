export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mergedClassName = `text-lg text-secondary pb-6 ${className}`;
  return (
    <>
      <p className={mergedClassName}>{children}</p>
    </>
  );
}
