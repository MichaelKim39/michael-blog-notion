import Image from "next/image";
import Link from "next/link";
import { BlogHighlightCard } from "components/home/BlogHighlightCard";
import avatar from "/public/me.png";

export default function Home() {
  return (
    <div className="px-8 py-10">
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-top align-top mb-8 sm:mb-24 text-center sm:text-left">
          <h1 className="font-bold text-2xl md:text-4xl mb-8 tracking-tight text-gray-700 dark:text-white">
            {`🐼 Michael Kim`}
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 md:text-xl text-xl mb-3">
            {`💻 Full Stack Developer`} at{" "}
            <Link
              className="font-semibold"
              href="https://www.theodo.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              {`Theodo UK`}
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            {`My mission in life is to help people to lead fulfilling
            lives filled with intention - my dream is to build a healthy social media that is both energising and productive, that will enable users to make a positive difference in the world`}
          </p>
        </div>
        <div className="relative ml-10 min-w-[225px] h-[225px] overflow-hidden rounded-full my-5 hover:scale-[1.05] transition-all hover:shadow-xl shadow-md">
          <Image
            alt="me"
            src={avatar}
            className="object-cover"
            placeholder="blur"
            fill
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-6">
        Highlights
      </h3>
      <div className="flex gap-6 flex-col md:flex-row overflow-hidden pb-4">
        <BlogHighlightCard
          slug="2023-02-06/should-we-use-enums"
          title="Are Enums Really Harmful?"
          gradient="from-gray-700 to-gray-300"
        />
        <BlogHighlightCard
          slug="YYYY-MM-DD/slug"
          title="Article title"
          gradient="from-gray-300 to-gray-500"
        />
        <BlogHighlightCard
          slug="YYYY-MM-DD/slug"
          title="Article title"
          gradient="from-gray-700 to-gray-300"
        />
      </div>
    </div>
  );
}
