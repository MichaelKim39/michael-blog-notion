import { PageTitle } from "components/PageTitle";
import { TechListDisplay } from "features/tech/components/TechListDisplay";
import { TECHNOLOGIES } from "./constants";

export default function Tech() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>My Tech</PageTitle>
      <p className="py-2 text-lg">
        {`Knowing every programming language and tech stack isn't everything, but it helps to be aware of what's out there and having a healthy breadth and depth of knowledge in relevant tech. Here's a list of what I'm familiar with (not exhaustive)!`}
      </p>
      <div className="grid sm:grid-cols-2 sm:gap-10 gap-8 my-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Web Frontend</h2>
          <TechListDisplay list={TECHNOLOGIES.WEB} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Mobile Frontend</h2>
          <TechListDisplay list={TECHNOLOGIES.MOBILE} />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Backend</h2>
          <TechListDisplay list={TECHNOLOGIES.BACKEND} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Databases</h2>
          <TechListDisplay list={TECHNOLOGIES.DATABASES} />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Infrastructure</h2>
          <TechListDisplay list={TECHNOLOGIES.INFRASTRUCTURE} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Languages</h2>
          <TechListDisplay list={TECHNOLOGIES.LANGUAGES} />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Development</h2>
          <TechListDisplay list={TECHNOLOGIES.DEVELOPMENT} />
        </div>
      </div>
    </div>
  );
}
