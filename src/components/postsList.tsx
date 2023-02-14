import Link from "next/link";

import styles from "@/styles/categoryList.module.css";

export default function PostsList({
  category,
  posts,
}: {
  category: string;
  posts: { title: string; slug: string }[];
}) {
  return (
    <>
      <ul className={styles.list}>
        {posts.map(({ title, slug }, index) => (
          <Link href={`/${category}/${slug}`} key={index}>
            <li>
              {title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
