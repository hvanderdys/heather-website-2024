import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ReactElement } from "react";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useState } from "react";
import useWow from "@/hooks/useWow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useWow();
  return (
    <>
      <Head>
        <title>Heather van der Dys | Contact Page</title>
        <meta property="og:url" content="https://heathervanderdys.com" />
        <meta property="og:image" content="main-preview.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Heather van der Dys | Contact Page"
        />
        <meta name="description" content="Connect with me today." />
        <meta name="og:description" content="Connect with me today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu className={styles.contactPage}>
              <div className="wow animate__animated animate__zoomInRight">
                <Menu />
              </div>
              <aside
                className={`${styles.socialBar} className="wow animate__animated animate__zoomInRight animate__delay-1s"`}
              >
                <CTA />
                <SocialIcons />
              </aside>
            </menu>
            <h1 className={styles.SEOonly}>Heather van der Dys</h1>
          </nav>
          <div className={styles.content}>
            <Image
              src="/profilePhoto.png"
              alt="Profile Photo"
              className="wow animate__animated animate__zoomInRight"
              width={232}
              height={263}
              priority
            />
            <aside>
              <h2 className="wow animate__animated animate__zoomInUp">
                Nice to Meet you!
              </h2>
              <p className="wow animate__animated animate__zoomInUp animate__delay-1s">
                Let&apos;s Connect and see what you are dreaming up. Their are
                <strong> four</strong> ways to contact me and stay up to date.{" "}
                <br />
                <br />
              </p>
              <p className="wow animate__animated animate__zoomInUp animate__delay-1s">
                1. The easiest way to reach out to me is via Email so, please
                write to me at:{" "}
                <strong>
                  <Link href="mailto:team@vanderdys.design" aria-label="Email">
                    team@vanderdys.design
                  </Link>
                </strong>
                .
                <br />
                <br />
                2. Follow me on social media to stay up to date with my work and
                portfolio:
              </p>
              <div className="wow animate__animated animate__zoomInUp animate__delay-2s">
                <SocialIcons />
              </div>{" "}
              <p className="wow animate__animated animate__zoomInUp animate__delay-3s">
                3. I send out emails atleast once annually and at most one time
                a month. Feel free to{" "}
                <Link
                  href="https://mailchi.mp/f57f3fcc91ae/vanderdysdesign"
                  aria-label="email-sign up"
                >
                  <strong>sign up for my email list here. </strong>
                </Link>
                <br />
                <br />
                4. Lastly, you can request a custom project with the form below.
              </p>
            </aside>
          </div>
          <div
            className={`${styles.content} wow animate__animated animate__zoomInUp animate__delay-4s`}
          >
            <div data-tf-live="01HP89MYNAZMA75BGJ597EBH0R" />
            <Script src="//embed.typeform.com/next/embed.js" />
          </div>
        </header>
        <Footer />
      </main>
    </>
  );
}
