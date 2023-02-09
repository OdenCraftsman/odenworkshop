import { useContext, useState } from "react";

import styles from "@/styles/burger.module.css";
import { config } from "process";

export default function Burger() {
  const [menuState, setMenuState] = useState<boolean>(false);
  const changeMenuState = () => setMenuState((prop) => !prop);
  const closeState = () => setMenuState(false);

  return (
    <>
      <nav className={menuState ? styles.open : styles.close}>
        <button className={styles.btn} onClick={changeMenuState}>
          <span className={styles.bar}></span>
          <span className="sr-only">menu</span>
        </button>
      </nav>
      {/* <div className={styles.menuList}>
                <li>
                    <ul>初めに</ul>
                    <ul>Python</ul>
                    <ul>機械学習</ul>
                    <ul>TypeScript</ul>
                </li>
            </div> */}
    </>
  );
}
