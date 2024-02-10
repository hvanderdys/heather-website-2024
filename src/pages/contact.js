import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ReactElement } from "react";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Heather van der Dys | Contact Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu className={styles.contactPage}>
              <div>
                <Menu />
              </div>
              <aside className={styles.socialBar}>
                <CTA />
                <SocialIcons />
              </aside>
            </menu>
            <h1 className={styles.SEOonly}>Heather van der Dys</h1>
          </nav>
          <div className={styles.content}>
            <Image
              src="/profilePhoto.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={232}
              height={263}
              priority
            />
            <aside>
              <h2>Nice to Meet you!</h2>
              <p>
                Let's Connect and see what you are dreaming up. The easiest ways
                to reach out to me are via Social Media, Email, or this embeded
                form.
              </p>
              <p>
                So, please write to me at:{" "}
                <strong>
                  <Link href="mailto:team@vanderdys.design" aria-label="Email">
                    team@vanderdys.design
                  </Link>
                </strong>{" "}
                or follow/message me
              </p>
              <SocialIcons />
            </aside>
          </div>
          <div className={styles.content}>
            <div data-tf-live="01HP89MYNAZMA75BGJ597EBH0R"></div>
            <script src="//embed.typeform.com/next/embed.js"></script>
          </div>
        </header>

        <Footer />
      </main>
    </>
  );
}
