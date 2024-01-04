import {
  faSquareBehance,
  faSquareFacebook,
  faSquareDribbble,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcons() {
  return (
    <>
      <a
        href="https://www.facebook.com/heathervanderdys"
        target="_blank"
        aria-label="facebook"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareFacebook} />
      </a>
      <a
        href="https://www.behance.net/Heathervanderdys"
        target="_blank"
        aria-label="behance"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareBehance} />
      </a>
      <a
        href="https://www.instagram.com/heathervanderdys"
        target="_blank"
        aria-label="instagram"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareInstagram} />
      </a>
      <a
        href="https://dribbble.com/heathervanderdys"
        target="_blank"
        aria-label="dribble"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareDribbble} />
      </a>
    </>
  );
}
