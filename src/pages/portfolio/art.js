import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import PortfolioNavigation from "@/components/PortfolioNavigation";
import useWow from "@/hooks/useWow";
import { artGalleries } from "@/data/artGalleries";
import styles from "@/styles/Home.module.css";
import galleryStyles from "@/styles/Illustrations.module.css";

const inter = Inter({ subsets: ["latin"] });
const recentWorks = [
  { src: "/portfolioSamples/2026watercolor__Beachhouse_001.jpg", alt: "Beachhouse watercolor", title: "Beach house | 2026" },
  { src: "/portfolioSamples/2026watercolor__FaithHopeLoveMahjong.jpg", alt: "Faith Hope Love Mahjong watercolor", title: "Faith Hope Love | 2026" },
  { src: "/portfolioSamples/2026watercolor__Black_Hydrangea.jpg", alt: "Black Hydrangea watercolor", title: "Watercolor hydrangea | 2026" },
  { src: "/portfolioSamples/2026watercolor__Colorblock_ConeFlower.jpg", alt: "Colorblock Coneflower watercolor", title: "Watercolor Echenecia | 2026" },
];
const galleryOrder = ["watercolor", "acrylic-oil", "photography", "travel-photography"];
const orderedGalleries = galleryOrder.map((id) =>
  artGalleries.find((gallery) => gallery.id === id)
);

function Gallery({ gallery, blue = false }) {
  const [expanded, setExpanded] = useState(false);
  const isAcrylic = gallery.id === "acrylic-oil";
  const previewCount = isAcrylic ? 3 : 4;
  const expandable = isAcrylic || gallery.expandable;
  const preview = expandable ? gallery.cards.slice(0, previewCount) : gallery.cards;
  const additional = expandable ? gallery.cards.slice(previewCount) : [];

  function cards(items) {
    return items.map((artwork) => (
      <figure className={galleryStyles.card} key={artwork.src}>
        <div className={galleryStyles.imageFrame}>
          <Image
            src={artwork.src}
            alt={artwork.alt}
            fill
            sizes={isAcrylic
              ? "(min-width: 1064px) 317px, (min-width: 768px) 29vw, (min-width: 481px) 45vw, 90vw"
              : "(min-width: 1064px) 232px, (min-width: 768px) 22vw, (min-width: 481px) 45vw, 90vw"}
            className={galleryStyles.image}
          />
        </div>
        <figcaption>{artwork.title}</figcaption>
      </figure>
    ));
  }

  return (
    <article
      className={`${blue ? galleryStyles.blueSection : galleryStyles.lightSection} ${gallery.id === "watercolor" ? `${galleryStyles.brightSection} ${galleryStyles.centeredGallery}` : ""}`}
      aria-labelledby={gallery.id}
    >
      <h2 id={gallery.id}>{gallery.title}</h2>
      <div className={`${galleryStyles.booksGrid} ${isAcrylic ? galleryStyles.acrylicGrid : ""}`}>{cards(preview)}</div>
      {additional.length > 0 && (
        <>
          <div id={`${gallery.id}-more`} hidden={!expanded}>
            <div className={isAcrylic ? galleryStyles.acrylicExpanded : galleryStyles.expandedGrid}>{cards(additional)}</div>
          </div>
          <div className={galleryStyles.buttonRow}>
            <button
              type="button"
              className={galleryStyles.toggleButton}
              aria-expanded={expanded}
              aria-controls={`${gallery.id}-more`}
              onClick={() => setExpanded(!expanded)}
            >
              View {expanded ? "less" : "more"}
            </button>
          </div>
        </>
      )}
    </article>
  );
}

export default function ArtPortfolioPage() {
  useWow();

  return (
    <>
      <Head>
        <title>Fine Art | Heather van der Dys</title>
        <meta name="description" content="Paintings, watercolors, and fine art photography by Heather van der Dys." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${styles.siteNavigation} ${styles.portfolioLayout} ${styles.illustrationLayout} ${galleryStyles.fineArt} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu>
              <div><Menu /></div>
              <aside className={styles.row}><SocialIcons /></aside>
            </menu>
          </nav>
          <div className={styles.portfolioHero}>
            <h1 className={styles.portfolioTitle}>Fine Art</h1>
            <p>
              I love to learn and practice many mediums including oil, acrylic,
              charcoal, ink, graphite, watercolor and photography.
            </p>
          <div className={`${galleryStyles.booksGrid} ${galleryStyles.heroArtwork}`} aria-label="Recent artwork highlights">
            {recentWorks.map((artwork, index) => (
              <figure
                className={galleryStyles.card}
                key={artwork?.src || `placeholder-${index}`}
              >
                <div
                  className={galleryStyles.imageFrame}
                  role={artwork ? undefined : "img"}
                  aria-label={artwork ? undefined : `Recent artwork placeholder ${index + 1}`}
                >
                  {artwork ? (
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      fill
                      sizes="(min-width: 1064px) 232px, (min-width: 768px) 22vw, (min-width: 481px) 45vw, 90vw"
                      className={galleryStyles.image}
                    />
                  ) : (
                    <span className={galleryStyles.placeholder}>Image coming soon</span>
                  )}
                </div>
                <figcaption>{artwork?.title || "Placeholder title | YEAR"}</figcaption>
              </figure>
            ))}
          </div>
          </div>
        </header>
        <section className={styles.shopBanner} aria-label="Visit the art shop">
          <Link href="https://shop.heathervanderdys.com" target="_blank" rel="noopener noreferrer" className={styles.shopBannerButton}>
            Shop now
          </Link>
        </section>
        {orderedGalleries.map((gallery, index) => (
          <Gallery gallery={gallery} blue={index % 2 === 0 && gallery.id !== "watercolor"} key={gallery.id} />
        ))}
        <PortfolioNavigation current="art" />
        <Footer />
      </main>
    </>
  );
}
