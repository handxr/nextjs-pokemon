import { Navbar } from "components/ui";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Han" />
        <meta name="description" content="Pokemon App" />
        <meta name="keywords" content="Pokemon, App" />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
    </>
  );
};
