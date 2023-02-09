import Link from "next/link";

import styles from "@/styles/pagenation.module.css";

export default function PageNation() {
  return (
    <div className={styles.flexContainer}>
      <Link href="/" className={styles.link}>
        戻る
      </Link>
    </div>
  );
}
