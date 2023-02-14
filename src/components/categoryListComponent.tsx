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
          <Link href={`/${category}`}>
            <ul key={index}>
              {category}
            </ul>
          </Link>
        ))}
      </li>
    </>
  );
}
