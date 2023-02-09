import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { deflate } from "zlib";
import { Main } from "next/document";

import Container from "@/components/container";
import PageTitle from "@/components/pageTitle";
import Meta from "@/components/meta";
import CategoryListComponent from "@/components/categoryListComponent";
import PostsList from "@/components/postsList";
import { CategoryList } from "..";
import { getAllPosts } from "@/lib/api";

const CATEGORY = CategoryList[0];

export default function IndexPage({
  posts,
}: {
  posts: { title: string; slug: string }[];
}) {
  return (
    <>
      <Meta title="python" />
      <article>
        <PageTitle title="Python" />
        <Container>
          <div className={styles.mainContent}>
            <h2>取り扱う内容</h2>
            <p>
              本カテゴリーでは、演算や関数、クラスなどについての基本的な知識から、機械学習の基本知識、tensorflowやpytorchを用いた実装など、幅広く取り扱っていく。
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
  return {
    props: {
      posts: posts,
    },
  };
}
