import Link from "next/link";

import styles from "@/styles/categoryList.module.css";

export default function CategoryListComponent({
  categoryList,
}: {
  categoryList: string[];
}) {
  return (
    <>
      <li className={styles.list}>
        {categoryList.map((category, index) => (
          <ul key={index}>
            <Link href={`/${category}`}>{category}</Link>
          </ul>
        ))}
      </li>
    </>
  );
}
