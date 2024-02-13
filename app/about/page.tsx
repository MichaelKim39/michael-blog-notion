import { PageTitle } from "components/PageTitle";
import Image from "next/image";
import about from "/public/about.jpeg";

export default function About() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>
        Hey! I{`'`}m Michael
        <span className="inline-block ml-2 animate-waving-hand">👋</span>
      </PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full ltr justify-center flex-wrap py-5">
        <div className="flex flex-col justify-evenly align-middle text-xl">
          <p className="pb-2">
            I{`'`}m a web and mobile developer currently working at Theodo UK. I
            like bouldering, photography, reading, eating, oversize clothing and
            playing the guitar. My spirit animal is Snorlax.
          </p>
          <p className="py-2">
            My mission in life is to solve social media. In 2020, I co-founded a
            startup called 0Regrets that aimed to help people live fulfilling
            lives filled with intention.
          </p>
          <p className="py-2">
            I{`'`}m focussing on upskilling technically now, but I{`'`}ve never
            stopped working towards my goal of developing a social media that is
            productive and energising!
          </p>
        </div>
        <div className="relative sm:order-none order-first w-100 sm:w-72 h-96 overflow-hidden rounded-lg m-5 hover:scale-[1.02] transition-all hover:shadow-xl">
          <Image
            className="object-cover transition-all"
            src={about}
            alt="me"
            placeholder="blur"
            fill
          />
        </div>
      </div>
    </div>
  );
}
