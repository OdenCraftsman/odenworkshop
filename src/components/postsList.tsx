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
      <li className={styles.list}>
        {posts.map(({ title, slug }, index) => (
          <Link href={`/${category}/${slug}`}>
            <ul key={index}>
              {title}
            </ul>
          </Link>
        ))}
      </li>
    </>
  );
}
