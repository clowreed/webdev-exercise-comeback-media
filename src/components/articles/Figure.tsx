import Image from "next/image";
export function Figure({ url, caption }: { url: string; caption: string }) {
  return (
    <>
      <figure className="w-full lg:w-[720px] mt-4 mb-10 lg:my-12">
        <div className="relative w-full pb-[56.25%]">
          <Image
            src={url}
            alt={caption || "Image"}
            fill
            sizes="(max-width: 1280px) 100vw, 33vw"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {caption && (
          <figcaption className="text-sm text-secondary mt-2 lg:mt-4">
            {caption}
          </figcaption>
        )}
      </figure>
    </>
  );
}
