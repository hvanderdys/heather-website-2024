import {
  faSquareBehance,
  faSquareFacebook,
  faSquareDribbble,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "@/styles/Social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcons() {
  return (
    <menu className={styles.main}>
      <Link
        href="https://www.behance.net/Heathervanderdys"
        target="_blank"
        aria-label="behance"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareBehance} />
      </Link>
      <Link
        href="https://www.instagram.com/heathervanderdys"
        target="_blank"
        aria-label="instagram"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareInstagram} />
      </Link>
      <Link
        href="https://dribbble.com/heathervanderdys"
        target="_blank"
        aria-label="dribble"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareDribbble} />
      </Link>
      <Link
        href="https://www.facebook.com/heathervanderdys"
        target="_blank"
        aria-label="facebook"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareFacebook} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/heathervanderdys/"
        target="_blank"
        aria-label="linkedin"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </menu>
  );
}
