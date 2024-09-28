import Image from "next/image";
export default function AuthorInfo({
  url,
  name,
  role,
}: {
  url: string;
  name: string;
  role: string;
}) {
  return (
    <>
      <div className="w-fit mx-auto my-6 block lg:hidden">
        <div className="flex items-center gap-x-2">
          <Image
            src={url}
            alt={name}
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-primary">{name}</p>
            <p className="text-secondary">{role}</p>
          </div>
        </div>
      </div>
    </>
  );
}
