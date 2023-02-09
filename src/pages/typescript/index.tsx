import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { deflate } from "zlib";
import { Main } from "next/document";

import Container from "@/components/container";
import PageTitle from "@/components/pageTitle";
import Meta from "@/components/meta";
import CategoryListComponent from "@/components/categoryListComponent";
import { CategoryList } from "..";
import PostsList from "@/components/postsList";
import { getAllPosts } from "@/lib/api";

const CATEGORY = CategoryList[1];

export default function IndexPage({
  posts,
}: {
  posts: { title: string; slug: string }[];
}) {
  return (
    <>
      <Meta title="typescript" />
      <article>
        <PageTitle title="TypeScript" />
        <Container>
          <div className={styles.mainContent}>
            <h2>取り扱う内容</h2>
            <p>
              本カテゴリーでは、演算や関数、クラス、型注釈などTypeScriptの基本的な知識を取り扱う。
            </p>
            <p>
              また、TypeScriptの基となっているJavaScriptについても扱うだけでなく、ReactやNext.jsなど多くの応用技術についても取り扱う予定である。
            </p>
          </div>
        </Container>
        <Container>
          <div className={styles.mainContent}>
            <h2>おすすめの記事</h2>
            <PostsList category={CATEGORY} posts={posts} />
          </div>
        </Container>
      </article>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts({ category: CATEGORY, limit: 100 });
  console.log(posts);
  return {
    props: {
      posts: posts,
    },
  };
}
