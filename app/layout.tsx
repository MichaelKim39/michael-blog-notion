import { FC, ReactNode } from "react";
import { ThemeProvider } from "styles/ThemeProvider";
import { Navbar } from "components/Navbar";
import "styles/globals.css";

// Notion CSS
import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";
import { Footer } from "components/Footer";

type RootPageProps = { children: ReactNode };

const RootLayout: FC<RootPageProps> = ({ children }) => {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="flex flex-col justify-between h-full max-w-4xl m-auto bg-white dark:bg-gray-900">
        <ThemeProvider attribute="class">
          <div className="flex flex-col justify-center">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
