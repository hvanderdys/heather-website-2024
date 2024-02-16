import Link from "next/link";
import styles from "@/styles/CTA.module.css";

export default function CTA() {
  return (
    <Link className={styles.contactButton} href="/contact">
      <button className="wow animate__animated animate__zoomInRight animate__delay-.5s">
        Contact Me
      </button>
    </Link>
  );
}
