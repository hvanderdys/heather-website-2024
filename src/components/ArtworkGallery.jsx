import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Illustrations.module.css";

export default function ArtworkGallery({ gallery, columns = 4, previewCount, centered = false }) {
  const [expanded, setExpanded] = useState(false);
  const preview = previewCount ? gallery.cards.slice(0, previewCount) : gallery.cards;
  const additional = previewCount ? gallery.cards.slice(previewCount) : [];
  const gridClass = columns === 2 ? styles.twoColumnGrid : styles.booksGrid;
  function renderCards(cards) {
    return cards.map((artwork) => (
      <figure className={styles.card} key={artwork.src}>
        <div className={styles.imageFrame}>
          <Image
            src={artwork.src}
            alt={artwork.alt}
            fill
            sizes={columns === 2
              ? "(min-width: 1064px) 488px, (min-width: 768px) 45vw, 90vw"
              : "(min-width: 1064px) 232px, (min-width: 768px) 22vw, (min-width: 481px) 45vw, 90vw"}
            className={styles.image}
          />
        </div>
        <figcaption>{artwork.title}</figcaption>
      </figure>
    ));
  }
  return (
    <article className={`${styles.lightSection} ${centered ? styles.centeredGallery : ""}`} aria-labelledby={gallery.id}>
      <h2 id={gallery.id}>{gallery.title}</h2>
      <div className={gridClass}>{renderCards(preview)}</div>
      {additional.length > 0 && (
        <>
          <div id={`${gallery.id}-more`} hidden={!expanded}>
            <div className={`${gridClass} ${styles.expandedGrid}`}>
              {renderCards(additional)}
            </div>
          </div>
          <div className={styles.buttonRow}>
            <button
              type="button"
              className={styles.toggleButton}
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
