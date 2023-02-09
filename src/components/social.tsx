import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "@/styles/social.module.css";

export default function Social() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <a href="https://twitter.com/ODEN_Craftsman">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="sr-only">twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/OdenCraftsman">
            <FontAwesomeIcon icon={faGithub} />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
      </ul>
    </>
  );
}
