import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import styles from "@/styles/PortfolioNavigation.module.css";

const portfolios = [
  { id: "art", label: "Fine Art", href: "/portfolio/art" },
  { id: "tech", label: "Creative Technology", href: "/portfolio/tech" },
  { id: "illustrations", label: "Illustrations", href: "/portfolio/illustrations" },
  { id: "3d", label: "3D + Spatial", href: "/portfolio/3d" },
];

export default function PortfolioNavigation({ current }) {
  return (
    <CTABanner tone={current === "tech" ? "light" : "red"} className={`${styles.banner} ${current === "tech" ? styles.lightBanner : ""}`} aria-label="Explore more portfolios">
      <nav className={styles.links} aria-label="Portfolio navigation">
        <Link className={styles.button} href="/portfolio">Main Portfolio</Link>
        {portfolios.filter((portfolio) => portfolio.id !== current).map((portfolio) => (
          <Link className={styles.button} href={portfolio.href} key={portfolio.id}>
            {portfolio.label}
          </Link>
        ))}
      </nav>
    </CTABanner>
  );
}
