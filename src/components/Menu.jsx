import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href="/#about" aria-label="About">
        About
      </Link>
      <Link href="/#testimonies" aria-label="Testimony">
        Testimony
      </Link>
      <Link href="/#portfolio" aria-label="Portfolio">
        Portfolio
      </Link>
      <Link href="/#resume" aria-label="Resume">
        Resume
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
