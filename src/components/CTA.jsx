import Link from "next/link";
import styles from "@/styles/CTA.module.css";

export default function CTA() {
  return (
    <Link className={styles.contactButton} href="/contact">
      <button>Contact Me</button>
    </Link>
  );
}
