export function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mergedClassName = `text-base lg:text-lg text-secondary pb-6 ${className}`;
  return (
    <>
      <p className={mergedClassName}>{children}</p>
    </>
  );
}
