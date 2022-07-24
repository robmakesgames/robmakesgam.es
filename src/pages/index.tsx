/**
 * index.tsx
 * Rob Barton
 *
 * Website homepage.
 */
import type { NextPage } from "next";
import Layout from "../components/layout";
import { pageMetaData } from "../common/types";

/**
 * metadata passed to the Layout component and used
 * in '@next/next-head'
 */
const indexMetaData: pageMetaData = {
  title: "index",
  desc: "Personal website portfolio to showcase my game development work",
};

const Home: NextPage = () => {
  return (
    <Layout pageMetaData={indexMetaData}>
      <main>
        <p className="underline text-3xl">Hello, World!!!</p>
      </main>
    </Layout>
  );
};

export default Home;
