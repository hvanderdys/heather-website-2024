import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ReactElement } from "react";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";
import PortfolioPreview from "../components/PortfolioPreview";
import useWow from "@/hooks/useWow";
import Menu from "@/components/Menu";
import Resume from "@/components/Resume";
import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const ReadMore = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={open ? styles.open : styles.closed}>
        <Resume />
      </div>
      <div className={styles.row}>
        <button
          type="button"
          onClick={toggle}
          ClassName="wow animate__animated animate__pulse"
        >
          Read {open ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
};

export default function Home() {
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
      <main className={`${styles.main} ${styles.homeLayout} ${styles.siteNavigation} ${inter.className}`}>
        <header>
          <nav className={styles.header}>
            <menu>
              <div>
                <Menu />
              </div>
              <aside className={styles.row}>
                <SocialIcons />
              </aside>
            </menu>
            <h1 className={styles.SEOonly}>Heather van der Dys</h1>
          </nav>
          <div className={styles.content}>
            <Image
              src="/profilePhoto.png"
              alt="Heather's Profile Picture"
              width={232}
              height={263}
              priority
            />
            <aside>
              <h2>Creative Strategist</h2>
              <p>
                Heather creates solutions at the intersection of art, design,
                technology, 3D making and front-end development — from original
                artwork and illustration to unusual digital and physical
                experiences.
              </p>
            </aside>
          </div>
        </header>
        <section className={styles.accentBanner} aria-label="About our work">
          <div className={styles.bannerViewport}>
          <div className={styles.bannerTrack}>
            {[0, 1].map((copy) => (
              <div
                className={styles.bannerGroup}
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
              >
                <p>
                  <span
                    className={`${styles.bannerIcon} ${styles.handIcon}`}
                    aria-hidden="true"
                  />
                  hand drawn and illustrated
                </p>
                <p>
                  <span
                    className={`${styles.bannerIcon} ${styles.solutionIcon}`}
                    aria-hidden="true"
                  />
                  custom refined solutions
                </p>
                <p>
                  <span
                    className={`${styles.bannerIcon} ${styles.madeIcon}`}
                    aria-hidden="true"
                  />
                  family run small US based Business
                </p>
              </div>
            ))}
          </div>
          </div>
        </section>
        <article
          id="things-i-make"
          className={styles.mainPortfolio}
          aria-label="Portfolio preview"
        >
          <div className={styles.inner}>
            <PortfolioPreview />
          </div>
        </article>
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

            </div>
            <div
              className={`${styles.center} wow animate__animated animate__slideInUp  animate__delay-.7s`}
            >
              <Link
                className={styles.reviewsButton}
                href="/testimony"
              >
                Read More Reviews
              </Link>
            </div>
          </div>
        </article>
        <article id="about" className={styles.about}>
          <div className={styles.inner}>
            <h2>Heather van der Dys</h2>
            <h3>A LITTLE ABOUT ME</h3>
            <p>
              My work has never fit neatly into one medium. With 15+ years of
              experience, I’ve designed digital products, built websites,
              illustrated ideas, painted murals, created environmental and 3D
              work, developed visual systems, and solved the odd creative
              problems that appear somewhere between art and engineering.
              <br />
              <br />
              I earned my BFA Magna Cum Laude from the University of Texas at
              Arlington and spent six years living in Transylvania, where the
              landscapes, architecture, culture and slower handmade rhythms
              continue to influence my work.
              <br />
              <br />
              Today I divide my practice between human-made art filled with wild
              whimsy and natural beauty and professional projects where art,
              design, technology, and problem-solving intersect.
              <br />
              <br />
              Today, I leverage my talent stack—spanning UI/UX design, branding,
              project management, fine art and digital scribing—to help transform
              challenges into opportunities that thrive with their new unique
              solutions.
            </p>
            <ReadMore />
          </div>
        </article>
          <aside className={styles.goal}>
            <h2 className="wow animate__animated animate__slideInLeft">GOAL</h2>
            <h3 className="wow animate__animated animate__slideInRight animate__delay-.2s">
              Transforming Ideas into Reality: A Blend of Art, Design, and
              Strategy.
            </h3>
          </aside>
        <article id="clients" className={styles.about}>
          <div className={styles.inner}>
            <h2>See Who I&apos;ve Worked With and For</h2>
            <h3>Some of my Beloved Clients</h3>
            <div className={styles.clientGrid}>
              <Image
                src="/client/CFA-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/HEP-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/HFsinclair-logo.jpg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/NTTC-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/hollyFronteir-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/moovweb-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/texas-can-academy-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/plg-logo.jpg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/rpc-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/daltile-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/leath-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/benzmar-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/Metrocrest-community-church-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/leath-learning-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/realHope-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/MobilePetSalon-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/Tranter-Logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/Csakis-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/Bowl-Pal-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/villa-napoli-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/clover-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
              <Image
                src="/client/radiant-blue-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={75}
                priority
              />
            </div>
          </div>
        </article>
        <article
          id="get-involved"
          className={`${styles.mainPortfolio} ${styles.getInvolved}`}
          aria-labelledby="get-involved-title"
        >
          <div className={styles.inner}>
            <h2 id="get-involved-title">Get involved</h2>
            <div className={styles.heroActions}>
              <Link
                className={`${styles.heroButton} ${styles.artButton}`}
                href="https://heather-van-der-dys.kit.com/82b81ccf15"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up for the newsletter
              </Link>
              <Link className={styles.heroButton} href="/shop">
                Visit my shop
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
