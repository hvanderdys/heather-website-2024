import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ReactElement } from "react";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import useWow from "@/hooks/useWow";
import Menu from "@/components/Menu";

import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Testimony() {
  useWow();

  return (
    <>
      <Head>
        <title>Heather van der Dys | Designer and Freelance for Hire</title>
        <meta
          property="og:title"
          content="Heather van der Dys | Designer and Freelance for Hire"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="main-preview.png" />
        <meta property="og:url" content="https://heathervanderdys.com" />
        <meta
          name="description"
          content="I am Heather, a designer and creative for hire."
        />
        <meta
          name="og:description"
          content="I am Heather, a designer and creative for hire."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/180x180.png" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu>
              <div>
                <Menu />
              </div>
              <aside className={styles.row}>
                <CTA />
                <SocialIcons />
              </aside>
            </menu>
            <h1 className={styles.SEOonly}>
              Testemonials for working with Heather van der Dys as a consultant
            </h1>
          </nav>
        </header>
        <article id="testimonies" className={styles.testimonies}>
          <div className={styles.inner}>
            <h2 className="wow animate__animated animate__slideInUp">
              Testimonies
            </h2>
            <h3 className="wow animate__animated animate__slideInUp  animate__delay-.3s">
              What my Clients Have to Say
            </h3>
            <div className={styles.scrollingWrapper}>
              <section className="wow animate__animated animate__slideInUp  animate__delay-.5s">
                <p className={styles.left}>
                  &ldquo;Working with Heather van der Dys is best imagined as
                  working in heaven with a team of devoted angels, all slaving
                  away at the feet of a very talented, insightful, miraculous,
                  inspirational and forgiving leading artist. Results, simply
                  put, are out of this world. Yet, she is only one, single,
                  mortal.&rdquo;
                </p>
                <cite>Doug Zahniser</cite>
                <h4>NTTC Board</h4>
              </section>
              <section className="wow animate__animated animate__slideInUp  animate__delay-.6s">
                <p className={styles.left}>
                  &ldquo;Heather was a tremendous blessing for us. Heather’s
                  communication skills are outstanding, she knew the right
                  questions to ask and made many excellent suggestions in
                  developing a website that we are extremely happy with in both
                  form and function. I highly recommend her for any and all of
                  your web design needs.&rdquo;
                </p>
                <cite>Mike Rogers</cite>
              </section>
              <section className="wow animate__animated animate__slideInUp  animate__delay-.8s">
                <p className={styles.left}>
                  &ldquo;[In 2021] we met [Heather’s] family and it was the
                  beginning a long friendship! When [Heather] started creating
                  our hotel and restaurant website, we felt so happy because she
                  is so easy to work with even when we had to work long
                  distance. She is such a great and creative person, and I am
                  very thankful that she came into our lives.&rdquo;
                </p>
                <cite>Kinga & Costantino</cite>
                <h4>Villa Napoli & Csiki Boutique House</h4>
              </section>
              <section className="wow animate__animated animate__slideInUp  animate__delay-.9s">
                <p className={styles.left}>
                  &ldquo;Working with Heather has been a real treat. She went
                  the extra mile to create a logo that blew me away. My patients
                  love it, and I got very positive comments from two highly
                  respected graphic artists in my community. Thank you,
                  Heather!&rdquo;
                </p>
                <cite>Stephen Tranter DC, FIAMA</cite>
                <h4>Owner, Chiropractor, & Acupuncturist</h4>
              </section>
              <section
                className={`${styles.long} wow animate__animated animate__slideInUp  animate__delay-.7s`}
              >
                <p className={styles.left}>
                  &ldquo;There are very few feelings more rewarding in this
                  world than what one feels seeing his or her vision spring to
                  life, yet Heather van der Dys <strong>RELIABLY</strong>{" "}
                  delivers that feeling time after time after time. She is a
                  bona-fide <strong>ARTISTE</strong> in every sense of the word,
                  but contrary to the ‘creatives’ stereotype, she also possesses
                  a really grounded business sense. Whatever the need, she’ll be
                  keen to inquire about the desired impact and undergirding
                  strategy, after which she’ll fling all that (and more) into
                  some incredible project management software, conduct the
                  necessary research, then render a series of GORGEOUS
                  deliverables, and do so on time (or perhaps even ahead of
                  schedule) at or below budget. She has now delivered literally{" "}
                  <strong>HUNDREDS</strong> of client deliverables (from brand
                  identities and websites and logos and social media posts to
                  book covers and strategic illustrations and internal
                  communications and curricula), and we’ve never ONCE been
                  disappointed in either her work product or her work ethic,
                  though we are <strong>OFTEN</strong> pleasantly surprised by
                  her results. In a word, <strong>‘GOBSMACKED’</strong> is a
                  pretty typical reaction to her raw talent. For the past
                  decade, she’s been the secret weapon for many, and I’m
                  confident that will continue to be the case for as long as she
                  chooses to share her breathtaking gifts with a grateful
                  world.&rdquo;
                </p>
                <cite>Blake & Dawn Leath</cite>
                <h4>Leath Group LLC</h4>
              </section>
              <section
                className={`${styles.short} wow animate__animated animate__slideInUp  animate__delay-1s`}
              >
                <p className={styles.left}>
                  &ldquo;Heather, thanks for taking what was in my brain and
                  making it come to life! WOOHOOOO! Cannot WAIT to get the word
                  out for this [published Bible] study.&rdquo;
                </p>
                <cite>Kris Murphy</cite>
                <h4>Author</h4>
                <br />
                <p className={styles.left}>
                  &ldquo; Hey, [I] was taking a look at the site, and WOW it
                  looks amazing. Very nice web design, fonts, and colors. the
                  "movement" top knotch - congrats! It is very very
                  impressive.&rdquo;
                </p>
                <cite>Helder</cite>
                <h4>Website Feedback Recieved</h4>
                <br />
                <p className={styles.left}>
                  &ldquo; Hey, [I] was taking a look at the site, and WOW it
                  looks amazing. Very nice web design, fonts, and colors. the
                  "movement" top knotch - congrats! It is very very
                  impressive.&rdquo;
                </p>
                <cite>Helder</cite>
                <h4>Website Feedback Recieved</h4>
                <br />
                <p className={styles.left}>
                  &ldquo;I got to view [the new website] and I am blown
                  away.&rdquo;
                </p>
                <cite>James</cite>
                <h4>Website Feedback Recieved</h4>
              </section>
              <section
                className={`${styles.short} wow animate__animated animate__slideInUp  animate__delay-.7s`}
              >
                <p className={styles.left}>
                  &ldquo;Wonderful Website! You've done a masterful job.&rdquo;
                </p>
                <cite>Steve</cite>
                <h4>Website Feedback Recieved</h4>
              </section>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
