import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Menu() {
  return (
    <nav>
      <Link href="/" aria-label="Home" className={styles.logo}>
        <Image
          src="/Logo.png"
          alt="Heather van der dys | Signature and Logo"
          className={styles.logoSign}
          width={132.4}
          height={48}
          priority
        />
      </Link>
      <Link href="/#about" aria-label="About">
        About
      </Link>
      <Link href="/#testimonies" aria-label="Testimony">
        Testimony
      </Link>
      <Link href="/#portfolio" aria-label="Portfolio">
        Portfolio
      </Link>
      <Link href="/blog" aria-label="Blog">
        Blog
      </Link>
      <Link
        href="https://orb-greyhound-hgsx.squarespace.com/store"
        aria-label="Blog"
        target="_blank"
      >
        Shop
      </Link>
    </nav>
  );
}
