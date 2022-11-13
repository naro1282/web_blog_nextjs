import Head from "next/head";
// import { PostCard, PostWidget, Categories } from "./components";
// import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>&lt;wesolveIT /&gt; blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
