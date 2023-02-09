import Link from "next/link";

import styles from "@/styles/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>検索</li>
      </ul>
    </nav>
  );
}
