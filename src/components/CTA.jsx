import Link from "next/link";
import styles from "@/styles/CTA.module.css";

export default function CTA() {
  return (
    <Link
      className={styles.contactButton}
      href="/contact"
      aria-label="contact me button"
    >
      <button>Contact Me</button>
    </Link>
  );
}
