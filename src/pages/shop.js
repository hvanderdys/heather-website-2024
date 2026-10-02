import Head from "next/head";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";
import CTA from "@/components/CTA";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import useWow from "@/hooks/useWow";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Shop() {
  useWow();

  return (
    <>
      <Head>
        <title>Shop Art | Heather van der Dys</title>
        <meta name="description" content="Heather van der Dys’s art shop is coming soon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${styles.homeLayout} ${styles.siteNavigation} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu>
              <div><Menu /></div>
              <aside className={styles.row}>
                <CTA />
                <SocialIcons />
              </aside>
            </menu>
          </nav>
        </header>
        <article className={styles.mainPortfolio}>
          <div className={styles.inner}>
            <h1 className={styles.SEOonly}>Heather van der Dys Art Shop</h1>
            <h2>Shop coming soon</h2>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
