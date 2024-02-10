import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function CTA() {
  return (
    <Link href="/contact">
      <button className={styles.contactButton}>Contact Me</button>
    </Link>
  );
}
