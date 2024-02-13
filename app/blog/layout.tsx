import { ReactNode } from "react";
import { Footer } from "components/Footer";
import "styles/globals.css";

type AboutPageProps = { children: ReactNode };

const AboutLayout = ({ children }: AboutPageProps) => {
  return (
    <>
      <div className="min-h-full">{children}</div>
      <Footer />
    </>
  );
};

export default AboutLayout;
