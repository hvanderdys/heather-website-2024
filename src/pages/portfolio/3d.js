import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import PortfolioNavigation from "@/components/PortfolioNavigation";
import useWow from "@/hooks/useWow";
import styles from "@/styles/Home.module.css";
import techStyles from "@/styles/TechPortfolio.module.css";

const inter = Inter({ subsets: ["latin"] });
const projects = [
    {
      src: "/portfolioSamples/mural-001.webp",
      alt: "Hand-painted mountain and forest mural in a bedroom",
      title: "110 sqft Mountain Mural",
      subtitle: "Nursery wall",
      date: "Painted in 2022",
    },
    {
      src: "/portfolioSamples/mural-002.webp",
      alt: "Hand-painted illustrated map created for a VBS collaboration",
      title: "VBS-Collab Map",
      subtitle: "16 sqft Illustrated Map banner",
      date: "Painted in 2021",
    },
    {
      src: "/portfolioSamples/Bike Mural.png",
      alt: "Bike wall mural",
      title: "32sqft Bike wall",
      subtitle: "Hand painted Mountain adventure",
      date: "Painted in YEAR",
    },
    {
      src: "/portfolioSamples/Howls in progress.png",
      alt: "Howl’s dimensional work in progress",
      title: "Howl's Moving Castle nook",
      subtitle: "Book Nook in progress",
      date: "Construction ongoing",
    },
];

export default function SpatialPortfolioPage() {
  useWow();

  return (
    <>
      <Head>
        <title>3D + Spatial | Heather van der Dys</title>
        <meta name="description" content="Murals, dimensional builds, and spatial artwork by Heather van der Dys." />
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
            <h1 className={styles.portfolioTitle}>3D + Spatial</h1>
            <p>
              Dimensional builds, environmental pieces, murals, props, and physical
              ideas that turn flat concepts into tangible experiences.
            </p>
          </div>
        </header>
        <section className={`${techStyles.projects} ${techStyles.spatialProjects}`} aria-label="3D and spatial projects">
          <div className={techStyles.projectGrid}>
            {projects.map((project) => (
              <article className={techStyles.project} key={project.src}>
                <h3 className={techStyles.cardTitle}>{project.title}</h3>
                <div className={techStyles.imageFrame}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1064px) 220px, (min-width: 768px) 22vw, (min-width: 481px) 45vw, 90vw"
                    className={techStyles.image}
                  />
                </div>
                <div className={techStyles.details}>
                  <p className={techStyles.subtitle}>{project.subtitle}</p>
                  <p className={techStyles.date}>{project.date}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <PortfolioNavigation current="3d" />
        <Footer />
      </main>
    </>
  );
}
