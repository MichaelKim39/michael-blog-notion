import { ReactNode } from "react";
import "styles/globals.css";

type AboutPageProps = { children: ReactNode };

const AboutLayout = ({ children }: AboutPageProps) => {
  return (
    <>
      <div className="min-h-[90vh]">{children}</div>
    </>
  );
};

export default AboutLayout;
