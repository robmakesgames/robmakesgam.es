/**
 * index.tsx
 * Rob Barton
 * 
 * Website homepage.
 */
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>robmakesgam.es</title>
        <meta name="description" content="Personal website portfolio to showcase my game development work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main><p className="underline text-3xl">Hello, World!!!</p></main>
    </>
  );
};

export default Home;
