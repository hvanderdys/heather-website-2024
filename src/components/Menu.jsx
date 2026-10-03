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
      <Link href="https://shop.heathervanderdys.com" target="_blank" rel="noopener noreferrer">
        Shop
      </Link>
      <Link href="/portfolio">
        Portfolio
      </Link>
      <a
        href="https://heather-van-der-dys.kit.com/82b81ccf15"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mailing List
      </a>
      {/* Use a native anchor for a full page navigation to the blog. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/blog">
        Blog
      </a>
    </nav>
  );
}
