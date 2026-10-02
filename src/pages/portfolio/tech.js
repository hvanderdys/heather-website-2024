import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import PortfolioNavigation from "@/components/PortfolioNavigation";
import BusinessInfo from "@/components/BusinessInfo";
import ArtworkGallery from "@/components/ArtworkGallery";
import { movedGalleries } from "@/data/movedGalleries";
import { techProjects } from "@/data/techProjects";
import useWow from "@/hooks/useWow";
import styles from "@/styles/Home.module.css";
import techStyles from "@/styles/TechPortfolio.module.css";

const inter = Inter({ subsets: ["latin"] });
const highlight = techProjects.find(
  (project) => project.title === "High-Fidelity Client Wireframe"
);
const remainingProjects = techProjects.filter((project) => project !== highlight);
function CaseStudyButton({ project }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={techStyles.caseStudy}
      aria-label={`View case study: ${project.title}`}
    >
      View case study
    </Link>
  );
}

function ProjectImage({ project, featured = false }) {
  if (!project.src) {
    return (
      <div
        className={`${techStyles.imageFrame} ${techStyles.placeholder}`}
        role="img"
        aria-label={`${project.title} image placeholder`}
      />
    );
  }
  return (
    <div className={techStyles.imageFrame}>
      <Image
        src={project.src}
        alt={project.title}
        fill={!featured}
        width={featured ? project.width || 400 : undefined}
        height={featured ? project.height || 267 : undefined}
        unoptimized={project.src.startsWith("https://") || project.src.endsWith(".gif")}
        sizes={featured
          ? "(min-width: 768px) calc((100vw - 96px) / 2), 90vw"
          : "(min-width: 1728px) 400px, (min-width: 768px) calc((100vw - 128px) / 4), (min-width: 481px) 45vw, (min-width: 444px) 400px, 90vw"}
        className={techStyles.image}
      />
    </div>
  );
}

export default function TechPortfolioPage() {
  useWow();

  return (
    <>
      <Head>
        <title>Creative Technology | Heather van der Dys</title>
        <meta name="description" content="Front-end web design, applications, prototypes, and creative technology by Heather van der Dys." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${styles.siteNavigation} ${styles.portfolioLayout} ${styles.techLayout} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu>
              <div><Menu /></div>
              <aside className={styles.row}><SocialIcons /></aside>
            </menu>
          </nav>
          <div className={styles.portfolioHero}>
            <h1 className={styles.portfolioTitle}>
              Creative technology and Front end solutions
            </h1>
            <p>
              I am an experienced front-end web designer with 15 years as a
              consultant building websites, applications, web apps and redesigns.
            </p>
          </div>
        </header>
        <section className={techStyles.projects} aria-label="Technology projects">
          <div className={techStyles.featuredProjects}>
            {[highlight].map((project) => (
              <article className={techStyles.featured} key={project.src}>
                <h2 className={techStyles.featuredTitle}>{project.title}</h2>
                <ProjectImage project={project} featured />
                <div className={techStyles.details}>
                  <p><strong>{project.subtitle}</strong></p>
                  <p className={techStyles.date}>
                    In 2020, I was hired to create a new animated modern design
                    for a tech company in San Francisco. This One page project
                    included custom layout, design, branding, and icons.
                  </p>
                  <CaseStudyButton project={project} />
                </div>
              </article>
            ))}
          </div>
          <div className={techStyles.projectGrid}>
            {remainingProjects.map((project) => (
              <article
                className={`${techStyles.project} ${project.featured ? `${techStyles.featured} ${techStyles.fullWidth}` : ""}`}
                key={project.title}
              >
                {project.featured && (
                  <h2 className={techStyles.featuredTitle}>{project.title}</h2>
                )}
                {!project.featured && (
                  <h3 className={techStyles.cardTitle}>{project.title}</h3>
                )}
                <ProjectImage project={project} featured={project.featured} />
                <div className={techStyles.details}>
                  <p className={techStyles.subtitle}><strong>{project.subtitle}</strong></p>
                  <p className={techStyles.date}>
                    {project.description || `Completed in ${project.year}`}
                  </p>
                  <CaseStudyButton project={project} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <ArtworkGallery gallery={movedGalleries.social} />
        <section className={techStyles.connectSection} aria-labelledby="connect-title">
          <div className={techStyles.connectContent}>
            <h2 id="connect-title">Interested in working with me</h2>
            <Link href="/contact" className={techStyles.connectButton}>
              Let&apos;s connect
            </Link>
          </div>
        </section>
        <BusinessInfo
          beforeValues={
        <section className={techStyles.connectSection} aria-labelledby="collab-title">
          <div className={techStyles.connectContent}>
            <h2 id="collab-title">wanna collab?</h2>
            <Link href="/contact" className={techStyles.connectButton}>
              Contact me Today
            </Link>
          </div>
        </section>
          }
        />
        <PortfolioNavigation current="tech" />
        <Footer />
      </main>
    </>
  );
}
