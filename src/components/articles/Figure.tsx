import Image from "next/image";
export function Figure({ url, caption }: { url: string; caption: string }) {
  return (
    <>
      <figure className="w-[720px] my-12">
        <div className="relative w-full pb-[56.25%]">
          <Image
            src={url}
            alt={caption || "Image"}
            fill
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {caption && (
          <figcaption className="text-sm text-secondary mt-4">
            {caption}
          </figcaption>
        )}
      </figure>
    </>
  );
}
