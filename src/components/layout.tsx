/**
 * layout.tsx
 * Rob Barton
 *
 * Reusable component that defines the page layout site wide.
 */
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
  pageMetaData: any;
};

const Layout = ({ children, pageMetaData }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{pageMetaData.title + "| robmakesgam.es"}</title>
        <meta name="description" content={pageMetaData.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <main className="container relative mx-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
