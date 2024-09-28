export function HR({ className }: { className?: string }) {
  const mergedClassName = `my-8 text-secondary ${className}`;
  return (
    <>
      <hr className={mergedClassName} />
    </>
  );
}
