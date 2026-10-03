import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import Bio from "@/components/Bio";
import Resume from "@/components/Resume";
import useWow from "@/hooks/useWow";
import styles from "@/styles/Home.module.css";
import aboutStyles from "@/styles/About.module.css";

const inter = Inter({ subsets: ["latin"] });
const subtitle = "Heather works at the intersection of art, design, technology, 3D making and front-end development — creating original artwork, illustration, and unusual digital and physical experiences.";

export default function AboutPage() {
  useWow();
  return (
    <>
      <Head>
        <title>About Heather van der Dys</title>
        <meta name="description" content={subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${styles.homeLayout} ${styles.siteNavigation} ${aboutStyles.page} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu>
              <div><Menu /></div>
              <aside className={styles.row}><SocialIcons /></aside>
            </menu>
          </nav>
          <div className={styles.content}>
            <Image src="/profilePhoto.png" alt="Heather van der Dys" width={232} height={263} priority />
            <aside>
              <h1 className={aboutStyles.title}>Heather van der Dys</h1>
              <p>{subtitle}</p>
            </aside>
          </div>
        </header>
        <article className={`${styles.about} ${aboutStyles.biography}`} aria-label="Full biography">
          <div className={styles.inner}>
            <Bio />
            <Resume />
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
