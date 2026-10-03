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
import styles from "@/styles/Home.module.css";
import illustrationStyles from "@/styles/Illustrations.module.css";
import { illustrationExamples } from "@/data/illustrationExamples";
import { movedGalleries } from "@/data/movedGalleries";
import ArtworkGallery from "@/components/ArtworkGallery";
import beachOctopus from "../../../public/portfolioSamples/2026DigitalIllustration-BeachOctopus.jpg";
import beachDino from "../../../public/portfolioSamples/2026DigitalIllustration-BeachDino.jpg";
import fifaOne from "../../../public/portfolioSamples/2026DigitalIllustration-Fifa001.png";
import fifaTwo from "../../../public/portfolioSamples/2026DigitalIllustration-Fiffa02.png";
import fifaThree from "../../../public/portfolioSamples/2026DigitalIllustration-fifa003.png";

const inter = Inter({ subsets: ["latin"] });
const recentIllustrations = [
  { image: beachOctopus, alt: "Beach octopus digital illustration", title: "beach octopus | 2026" },
  { image: beachDino, alt: "Beach dinosaur digital illustration", title: "beach dino | 2026" },
  { image: fifaOne, alt: "FIFA digital illustration 1", title: "fifa 01/03 | 2026" },
  { image: fifaTwo, alt: "FIFA digital illustration 2", title: "fifa 02/03 | 2026" },
  { image: fifaThree, alt: "FIFA digital illustration 3", title: "fifa 03/03 | 2026" },
];
const books = [
  { src: "/portfolioSamples/digital-001.webp", title: "Children’s Book Illustration | 2020" },
  { src: "/portfolioSamples/book-001.webp", title: "Digital Illustration & Book Cover | 2018" },
  { src: "/portfolioSamples/book-002.webp", title: "Digital Illustration & Book Cover | 2019" },
  { src: "/portfolioSamples/book-003.webp", title: "Book Cover Layout | 2020" },
];
const curriculum = Array.from({ length: 13 }, (_, index) => ({
  src: `/portfolioSamples/cover-${String(index + 1).padStart(3, "0")}.webp`,
  title: `Client Project Curriculum Cover Set ${index + 1} | 2020`,
}));
const graphics = [
  { id: "packaging", title: "Packaging", src: "/portfolioSamples/package-007.webp", subtitle: "Small-Batch Wine Label | 2021" },
  { id: "branding", title: "Layout + Branding", src: "/portfolioSamplesLG/layout-006.gif", subtitle: "Brand and Brand Guidelines | 2020" },
  { id: "surface", title: "Surface Design", src: "/portfolioSamples/pattern-003.webp", subtitle: "Digitally Illustrated Repeating Pattern | 2019" },
];

function ArtworkCard({ artwork, graphic = false, onMore, expanded = false }) {
  return (
    <figure className={illustrationStyles.card}>
      <div className={illustrationStyles.imageFrame}>
        {artwork.src ? (
          <Image
            src={artwork.src}
            alt={artwork.subtitle || artwork.title}
            fill
            unoptimized={artwork.src.endsWith(".gif")}
            sizes={graphic
              ? "(min-width: 768px) 320px, 90vw"
              : "(min-width: 1064px) 232px, (min-width: 768px) 22vw, (min-width: 481px) 45vw, 90vw"}
            className={illustrationStyles.image}
          />
        ) : (
          <span className={illustrationStyles.placeholder}>Image coming soon</span>
        )}
      </div>
      <figcaption>
        {graphic && <h3 className={illustrationStyles.cardTitle}>{artwork.title}</h3>}
        {artwork.subtitle || (!graphic && artwork.title)}
      </figcaption>
      {onMore && (
        <button
          type="button"
          className={illustrationStyles.toggleButton}
          aria-expanded={expanded}
          aria-controls="graphic-examples"
          aria-label={`More examples of ${artwork.title}`}
          onClick={onMore}
        >
          More examples
        </button>
      )}
    </figure>
  );
}

export default function IllustrationsPage() {
  useWow();
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [showScribingText, setShowScribingText] = useState(false);
  const [activeExamples, setActiveExamples] = useState(null);
  const examples = activeExamples ? illustrationExamples[activeExamples] : null;

  return (
    <>
      <Head>
        <title>Custom Illustrations | Heather van der Dys</title>
        <meta name="description" content="Book illustrations, digital scribing, and graphic and vector design by Heather van der Dys." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${styles.siteNavigation} ${styles.portfolioLayout} ${styles.illustrationLayout} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu>
              <div><Menu /></div>
              <aside className={styles.row}><SocialIcons /></aside>
            </menu>
          </nav>
          <div className={styles.portfolioHero}>
            <h1 className={styles.portfolioTitle}>Custom Illustrations</h1>
            <p>
              With a degree and background in Fine Art, my illustrations range
              from ink, charcoal and watercolor to digital and fully vector graphics.
            </p>
          </div>
        </header>
        <article className={illustrationStyles.lightSection} aria-labelledby="recent-illustrations">
          <h2 id="recent-illustrations">Recent Illustrations and Highlights</h2>
          <div className={illustrationStyles.recentIllustrationsGrid}>
            {recentIllustrations.map((artwork) => (
              <figure
                className={illustrationStyles.card}
                key={artwork.image.src}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.alt}
                  sizes="(min-width: 1064px) 181px, (min-width: 768px) 17vw, (min-width: 481px) 45vw, 90vw"
                  className={illustrationStyles.recentIllustrationImage}
                />
                <figcaption>{artwork.title}</figcaption>
              </figure>
            ))}
          </div>
        </article>
        <ArtworkGallery gallery={movedGalleries.digital} previewCount={4} centered />
        <article className={`${illustrationStyles.lightSection} ${illustrationStyles.centeredGallery}`} aria-labelledby="book-illustrations">
          <h2 id="book-illustrations">Book Cover Illustrations</h2>
          <div className={illustrationStyles.booksGrid}>
            {books.map((artwork) => <ArtworkCard artwork={artwork} key={artwork.src} />)}
          </div>
          <div id="curriculum-covers" hidden={!showCurriculum}>
            <div className={illustrationStyles.expandedGrid}>
              {curriculum.map((artwork) => <ArtworkCard artwork={artwork} key={artwork.src} />)}
            </div>
          </div>
          <div className={illustrationStyles.buttonRow}>
            <button
              className={illustrationStyles.toggleButton}
              type="button"
              aria-expanded={showCurriculum}
              aria-controls="curriculum-covers"
              onClick={() => setShowCurriculum(!showCurriculum)}
            >
              View {showCurriculum ? "less" : "more"}
            </button>
          </div>
        </article>
        <article className={illustrationStyles.blueSection} aria-labelledby="digital-scribing">
          <h2 id="digital-scribing">Digital Scribing</h2>
          <p>
            This is a process of live illustrating during a meeting or conference
            to keep the audience more engaged, foster learning, and create a
            take-home summary of content. Before each session, I am given a theme,
            an image of the speaker, and the main topics they will be discussing.
            Following the session, we complete a series of edits before finalizing the image.
          </p>
          <div id="scribing-more" className={illustrationStyles.scribingMore} hidden={!showScribingText}>
            <p>
              Scribing is where I listen and capture information to bring a drawing
              to life so the listeners can reconnect with content during a meeting,
              event or seminar. It delivers a take-home document or summary, a fresh
              outside perspective, inspiration and more. By emphasizing big ideas
              and connecting patterns, it helps the content remain relevant to
              attendees and those who see the information even after the fact.
            </p>
            <p>
              After the event, seminar or session, the illustration can be split
              into Social Media content, animations, summary boards and more.
              The sky is the limit — or better yet, our imagination together is
              the limit to where digital recording and scribing can take your expertise and content.
            </p>
          </div>
          <div className={illustrationStyles.buttonRow}>
            <button
              className={illustrationStyles.toggleButton}
              type="button"
              aria-expanded={showScribingText}
              aria-controls="scribing-more"
              onClick={() => setShowScribingText(!showScribingText)}
            >
              Read {showScribingText ? "less" : "more"}
            </button>
          </div>
          <Image
            src="/portfolioSamples/digital scribing preview.png"
            alt="Digital scribing illustration examples"
            width={5502}
            height={2100}
            sizes="(min-width: 1064px) 1000px, 95vw"
            className={illustrationStyles.scribingImage}
          />
        </article>
        <article className={illustrationStyles.lightSection} aria-labelledby="graphic-vector">
          <h2 id="graphic-vector">Graphic and Vector design</h2>
          <div className={illustrationStyles.graphicsGrid}>
            {graphics.map((artwork) => (
              <ArtworkCard
                artwork={artwork}
                graphic
                key={artwork.id}
                expanded={activeExamples === artwork.id}
                onMore={() => setActiveExamples(artwork.id)}
              />
            ))}
          </div>
          <div id="graphic-examples" hidden={!examples}>
            {examples && (
              <section
                className={illustrationStyles.moreExamples}
                aria-labelledby="examples-title"
              >
                <h2 id="examples-title">{examples.title}</h2>
                <div className={illustrationStyles.expandedGrid}>
                  {examples.cards.map((artwork) => (
                    <ArtworkCard artwork={artwork} key={artwork.src} />
                  ))}
                </div>
                <div className={illustrationStyles.exampleActions}>
                  <button
                    type="button"
                    className={illustrationStyles.toggleButton}
                    onClick={() => setActiveExamples(null)}
                  >
                    Hide
                  </button>
                  <Link
                    href={examples.href}
                    className={illustrationStyles.exampleCta}
                    target={examples.href.startsWith("https://") ? "_blank" : undefined}
                    rel={examples.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                    onClick={() => setActiveExamples(null)}
                  >
                    {examples.cta}
                  </Link>
                </div>
              </section>
            )}
          </div>
        </article>
        <ArtworkGallery gallery={movedGalleries.vectors} previewCount={4} centered />
        <PortfolioNavigation current="illustrations" />
        <Footer />
      </main>
    </>
  );
}
