import HeaderNavigation from "@/components/HeaderNavigation";
import Head from "next/head";
import { Inter } from "next/font/google";
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
          <HeaderNavigation />
          <div className={`${styles.portfolioHero} ${styles.shopHero}`}>
            <h1 className={styles.portfolioTitle}>Shop coming soon</h1>
          </div>
        </header>
        <Footer />
      </main>
    </>
  );
}
