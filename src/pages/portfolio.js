import CTABanner from "@/components/CTABanner";
import HeaderNavigation from "@/components/HeaderNavigation";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ReactElement } from "react";
import Footer from "../components/Footer";
import PortfolioDisciplines from "../components/PortfolioDisciplines";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const highlights = [
  { src: "/portfolioSamples/watercolor-002.webp", alt: "Watercolor artwork sample" },
  { src: "/portfolioSamples/acrylic-001.webp", alt: "Acrylic painting sample" },
  { src: "/portfolioSamples/watercolor-003.webp", alt: "Watercolor painting sample" },
  { src: "/portfolioSamples/acrylic-004.webp", alt: "Acrylic artwork sample" },
  { src: "/portfolioSamples/watercolor-004.webp", alt: "Original watercolor sample" },
];

export default function Portfolio() {
  useWow();

  return (
    <>
      <Head>
        <title>Heather&apos;s Portfolio | Heather van der Dys</title>
        <meta
          property="og:title"
          content="Heather's Portfolio | Heather van der Dys"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="main-preview.png" />
        <meta property="og:url" content="https://heathervanderdys.com" />
        <meta
          name="description"
          content="I am Heather, a designer and creative for hire."
        />
        <meta
          name="og:description"
          content="I am Heather, a designer and creative for hire."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/180x180.png" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${styles.siteNavigation} ${styles.portfolioLayout} ${inter.className}`}>
        <header>
          <HeaderNavigation />
          <div className={styles.portfolioHero}>
            <h1 className={styles.portfolioTitle}>Heather&apos;s Portfolio</h1>
            <p>
              Welcome. Please enjoy the joy and whimsy. Here are some recent
              Highlighted works.
            </p>
            <div className={styles.portfolioHighlights}>
              {highlights.map((highlight) => (
                <div className={styles.highlightImage} key={highlight.src}>
                  <Image
                    src={highlight.src}
                    alt={highlight.alt}
                    fill
                    sizes="(min-width: 768px) calc((100vw - 128px) / 5), (min-width: 421px) 45vw, 90vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </header>

        <article
          id="disciplines"
          className={styles.disciplinesSection}
          aria-labelledby="disciplines-title"
        >
          <PortfolioDisciplines />
        </article>

        <CTABanner className={styles.shopBanner} aria-label="Visit the art shop">
          <Link href="https://shop.heathervanderdys.com" target="_blank" rel="noopener noreferrer" className={styles.shopBannerButton}>
            Let&apos;s go to my shop
          </Link>
        </CTABanner>

        <Footer />
      </main>
    </>
  );
}
