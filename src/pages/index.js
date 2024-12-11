import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ReactElement } from "react";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import TechPortfolio from "../components/TechPortfolio";
import ScribePortfolio from "../components/ScribePortfolio";
import BusinessInfo from "../components/BusinessInfo";
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
              <h2>Business Launch Consultant & Creative Strategist</h2>
              <p>
                With 20 years of experience in UI/UX/WEB/Graphic design,
                marketing, and communication, I bring a hands-on approach to
                reduce the stress of transitioning ideas into successful
                businesses.
              </p>
              <Link
                className={styles.contactButton}
                href="/contact"
                aria-label="contact me button"
              >
                <button>Schedule Your Consultation Today</button>
              </Link>
            </aside>
          </div>
        </header>
        <article id="about" className={styles.about}>
          <div className={styles.border}>
            <svg
              className={styles.mobile}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 287.83 140"
            >
              <path class="b" d="m0,101.74S69.57,6.09,287.83,0v140H0v-38.26Z" />
            </svg>
            <svg
              className={styles.desktop}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1366.18 372.23"
            >
              <path
                class="b"
                d="M16.82,32.8C62.28,23.5,200.19,4.65,357.98.55c362.18-9.4,514.29,104.31,1008.2,109.41v262.7H0V35.54s6.55-.64,16.82-2.74Z"
              />
            </svg>
          </div>
          <div className={styles.inner}>
            <h2>Heather van der Dys</h2>
            <h3>A LITTLE ABOUT ME</h3>
            <p>
              With a BFA earned Magna Cum Laude from the University of Texas at
              Arlington in 2011, my career has been a journey of creativity,
              strategy, and innovation. My professional path began with a roving
              art show in Dallas and an apprenticeship under a photographer,
              leading me to roles such as Creative and Communications Director
              and eventually to founding a custom design and consulting agency.
              <br />
              <br />
              My passion lies in bringing ideas to life for businesses,
              visionaries, and innovative individuals. Whether it's branding,
              website design, SEO/SEM consulting, or marketing strategy, I apply
              a hands-on approach that reduces stress and ensures seamless
              transitions from concept to launch.
              <br />
              <br />
              Over a decade of global experience—including six years in Eastern
              Europe—has enriched my design philosophy with diverse cultural
              influences and simplicity. Working with small businesses, I've
              successfully launched hotels, restaurants, and more, while also
              rebranding companies and implementing strategies to enhance their
              online presence and reach.
              <br />
              <br />
              Today, I leverage my talent stack—spanning UI/UX design, branding,
              project management, and digital scribing—to help businesses
              transform challenges into opportunities and thrive in competitive
              markets.
            </p>
            <ReadMore />
            <h2>See Who I've Worked With and For</h2>
            <h3>Some of my Beloved Clients</h3>
            <div className={styles.clientGrid}>
              <Image
                src="/client/CFA-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={200}
                height={100}
                priority
              />
              <Image
                src="/client/HEP-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={200}
                height={100}
                priority
              />
              <Image
                src="/client/HFsinclair-logo.jpg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={200}
                height={100}
                priority
              />
              <Image
                src="/client/NTTC-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={100}
                height={100}
                priority
              />
              <Image
                src="/client/hollyFronteir-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={300}
                height={100}
                priority
              />
              <Image
                src="/client/moovweb-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={300}
                height={100}
                priority
              />
              <Image
                src="/client/texas-can-academy-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={100}
                height={100}
                priority
              />
              <Image
                src="/client/plg-logo.jpg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={100}
                height={100}
                priority
              />
              <Image
                src="/client/rpc-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={300}
                height={100}
                priority
              />
              <Image
                src="/client/daltile-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={200}
                height={100}
                priority
              />
              <Image
                src="/client/leath-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={100}
                priority
              />
              <Image
                src="/client/benzmar-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={100}
                priority
              />
              <Image
                src="/client/Metrocrest-community-church-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={140}
                height={100}
                priority
              />
              <Image
                src="/client/leath-learning-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={100}
                priority
              />
              <Image
                src="/client/realHope-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={250}
                height={100}
                priority
              />
              <Image
                src="/client/MobilePetSalon-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={180}
                height={100}
                priority
              />
              <Image
                src="/client/Tranter-Logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={250}
                height={100}
                priority
              />
              <Image
                src="/client/Csakis-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={100}
                height={100}
                priority
              />
              <Image
                src="/client/Bowl-Pal-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={150}
                height={100}
                priority
              />
              <Image
                src="/client/villa-napoli-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={120}
                height={100}
                priority
              />
              <Image
                src="/client/clover-logo.png"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={100}
                height={100}
                priority
              />
              <Image
                src="/client/radiant-blue-logo.jpeg"
                alt="logo"
                className={`${styles.floating} wow animate__animated animate__slideInRight`}
                width={300}
                height={100}
                priority
              />
            </div>
          </div>
          <div className={styles.border}>
            <svg
              className={styles.mobile}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 287.83 140"
            >
              <path
                class="b"
                d="m0,125.65c85.22,0,115.65-53.91,288.7-53.91V0H0v125.65Z"
              />
            </svg>
            <svg
              className={styles.desktop}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 607.1 156.2"
            >
              <path
                class="b"
                d="M609.4,39.7c-88.1,0-141.1,18.7-336.3,28.6c-70.1,3.6-158.5-24-273.5-24V-1.1h609.9V39.7z"
              />
            </svg>
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

              <section
                className={`${styles.long} wow animate__animated animate__slideInUp  animate__delay-.7s`}
              >
                <p className={styles.left}>
                  &ldquo;There are very few feelings more rewarding in this
                  world than what one feels seeing his or her vision spring to
                  life, yet Heather van der Dys <strong>RELIABLY</strong>{" "}
                  delivers that feeling time after time after time... Whatever
                  the need, she’ll be keen to inquire about the desired impact
                  and undergirding strategy, after which she’ll fling all that
                  (and more) into some incredible project management software,
                  conduct the necessary research, then render a series of
                  GORGEOUS deliverables, and do so on time... She has now
                  delivered literally <strong>HUNDREDS</strong> of client
                  deliverables (from brand identities and websites and logos and
                  social media posts to book covers and strategic illustrations
                  and internal communications and curricula), and we’ve never
                  ONCE been disappointed...&rdquo;
                </p>
                <cite>Blake & Dawn Leath</cite>
                <h4>Leath Group LLC</h4>
              </section>
            </div>
            <div
              className={`${styles.center} wow animate__animated animate__slideInUp  animate__delay-.7s`}
            >
              <Link
                className={styles.contactButton}
                href="/testimony"
                aria-label="contact me button"
              >
                <button>Read More Reviews</button>
              </Link>
            </div>
          </div>
        </article>
        <article id="portfolio" className={styles.mainPortfolio}>
          <div className={styles.border}>
            <svg
              className={styles.mobile}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 287.83 140"
            >
              <path
                class="b"
                d="m0,0c85.22,0,115.65,53.91,288.7,53.91v71.74H0V0Z"
              />
            </svg>
            <svg
              className={styles.desktop}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 607.1 156.2"
            >
              <path
                class="b"
                d="M609.4,32C521.3,32,468.5-0.2,273,3.4c-133.4,2.5-158.5,24-273.5,24v129.3h609.9V32z"
              />
            </svg>
          </div>
          <div className={styles.inner}>
            <header>
              <section>
                <h2 className="wow animate__animated animate__slideInUp">
                  Technology and Design
                </h2>
                <p className="wow animate__animated animate__slideInUp  animate__delay-.3s">
                  Welcome to my Portfolio. This section of my work showcases
                  Website Design, UI/UX, Product Design, Fully custom Websites,
                  Square Space, Wix, and High Fidelity Prototypes.
                </p>
              </section>
              <CTA />
            </header>
            <TechPortfolio />
          </div>

          <div className={styles.inner}>
            <header>
              <section>
                <h2 className="wow animate__animated animate__slideInUp">
                  Digital Scribing/Recording
                </h2>
                <p className="wow animate__animated animate__slideInUp  animate__delay-.3s">
                  This is a process of live illustrating during a meeting or
                  conference to keep the audience more engaged, foster learning,
                  and create a take-home summary of content. Before each
                  session, I am given a theme, an image of the speaker, and the
                  main topics they will be discussing. Following the session, we
                  complete a series of edits before finalizing the image.
                  <br /> <br />
                  Scribing is where I listen and capture information to bring a
                  drawing to life so the listeners can reconnect with content
                  during a meeeting, event or siminar. It delivers a take home
                  document or summary, a fresh outside perspective, inspiration
                  and more. By emphasizing big ideas and connecting patterns, it
                  helps the content remain relevant to attendees and those who
                  see the information even after the fact. <br /> <br />
                  After the event, siminar or session, the illustration can be
                  split into Social Media content, animations, summary boards
                  and more. The sky is the limit -- or better yet, our
                  imagination together is the limit to where digital recording
                  and scribing can take your expertise and content.
                </p>
              </section>
            </header>
            <ScribePortfolio />
          </div>

          <div className={styles.border}>
            <svg
              className={styles.mobile}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 287.83 140"
            >
              <path
                class="b"
                d="m288.7,125.65c-85.22,0-115.65-53.91-288.7-53.91V0h288.7v125.65Z"
              />
            </svg>{" "}
            <svg
              className={styles.desktop}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 607.1 156.2"
            >
              <path
                class="b"
                d="M609.4,39.7c-88.1,0-141.1,18.7-336.3,28.6c-70.1,3.6-158.5-24-273.5-24V-1.1h609.9V39.7z"
              />
            </svg>
          </div>
          <aside className={styles.goal}>
            <h2 className="wow animate__animated animate__slideInLeft">GOAL</h2>
            <h3 className="wow animate__animated animate__slideInRight animate__delay-.2s">
              Transforming Ideas into Reality: A Blend of Art, Design, and
              Strategy.
            </h3>
          </aside>
          <div className={styles.border}>
            <svg
              className={styles.desktop}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 287.83 140"
            >
              <path
                class="b"
                d="m0,0c85.22,0,115.65,53.91,288.7,53.91v71.74H0V0Z"
              />
            </svg>
            <svg
              className={styles.mobile}
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 287.83 140"
            >
              <path
                class="b"
                d="m0,0c85.22,0,115.65,53.91,288.7,53.91v71.74H0V0Z"
              />
            </svg>
          </div>
        </article>
        <BusinessInfo />

        <Footer />
      </main>
    </>
  );
}
