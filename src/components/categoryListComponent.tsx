import Link from "next/link";

import styles from "@/styles/categoryList.module.css";

export default function CategoryListComponent({
  categoryList,
}: {
  categoryList: string[];
}) {
  return (
    <>
      <ul className={styles.list}>
        {categoryList.map((category, index) => (
          <Link href={`/${category}`} key={index}>
            <li>
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
