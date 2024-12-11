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
import useWow from "@/hooks/useWow";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Portfolio() {
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
              Heather van der Dys&apos;s Profeessional Art, Design, UI UX
              portfolio
            </h1>
          </nav>
          <div className={styles.content}>
            <aside>
              <h2>Welcome.</h2>
              <h2>To my portfolio</h2>
              <p>
                A place where you can get to know me and the projects I have
                produces since 2020.
              </p>
            </aside>
          </div>
        </header>

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
              <CTA />
            </header>
            <ScribePortfolio />
          </div>
        </article>
        <article id="portfolios" className={styles.smallPortfolios}>
          <div className={styles.inner}>
            <header>
              <section>
                <h2 className="wow animate__animated animate__slideInUp">
                  Artistic + Design Portfolio
                </h2>
                <p className="wow animate__animated animate__slideInUp  animate__delay-.3s">
                  To give you a well-rounded sense of my skills, style, and
                  flexibility I am including this highlight portfolio of select
                  works from 2018 and beyond separated by the medium.
                </p>
              </section>
              <CTA />
            </header>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Layout
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/layout-001.webp"
                  alt="flyer layout design client example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Postcard Adv. Example | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/layout-002.webp"
                  alt="Wine lable 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Adobe Contest Winner Layout Design | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/layout-003.webp"
                  alt="box packaging example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Adobe Contest Winner Layout Design | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/layout-004.webp"
                  alt="box packaging example 004"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Gift Card Design | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/layout-005.webp"
                  alt="box packaging example 005"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Event Poster Design (4 Years) | 2019-2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamplesLG/layout-006.gif"
                  alt="box packaging example 006"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Brand and Brand Guidelines | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/layout-007.webp"
                  alt="box packaging example 007"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Publication, Layout, and Book Design | 2020</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Book/Cover Design
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/book-001.webp"
                  alt="Book - Cover Art Layout and Design example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digital Illustration & Book Cover | 2018</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/book-002.webp"
                  alt="Book - Cover Art Layout and Design example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digital Illustration & Book Cover | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/book-003.webp"
                  alt="Book - Cover Art Layout and Design example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Book Cover Layout | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-001.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 1 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-002.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 2 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-003.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 3 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-004.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 4 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-005.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 5 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-006.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 6 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-007.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 7 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-008.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 8 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-009.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 9 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-010.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 10 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-011.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 11 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-012.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 12 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/cover-013.webp"
                  alt="Workbook/curiculi Cover Art Layout and Design example part 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Client Project Curriculum Cover Set 13 | 2020</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                SVG and Vector Design
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/vector-001.webp"
                  alt="Vector Art Icon example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/vector-002.webp"
                  alt="Vector Art Icon example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/vector-003.webp"
                  alt="Vector Art Icon example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/vector-004.webp"
                  alt="Vector Art Icon example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/vector-004.webp"
                  alt="Vector Art Icon example 004"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/VectorIllustrationExamples-01.webp"
                  alt="Vector Art Icon example 005"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/VectorIllustrationExamples-02.webp"
                  alt="Vector Art Icon example 006"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/VectorIllustrationExamples-03.webp"
                  alt="Vector Art Icon example 007"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/VectorIllustrationExamples-04.webp"
                  alt="Vector Art Icon example 008"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/VectorIllustrationExamples-05.webp"
                  alt="Vector Art Icon example 009"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vector Illustration: Adobe Illustrator | 2021</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Social Media Campaigns
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-001.webp"
                  alt="Mural example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Mixed Platform Social Campaign</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-008.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Block Color Engagement Campaign</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-002.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Follower Inspiration Social Campaign</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-003.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Fall Culture-Based Social Campaign</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-007.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Instagram Story Social Campaign</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-005.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Mixed Platform Social Campaign</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-006.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Mixed Platform Social Campaign</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/social-004.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Mixed Platform Social Campaign</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Packaging and Labels
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/package-003.webp"
                  alt="box-packaging example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Snack Company for Contest | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/package-007.webp"
                  alt="Wine lable 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Small-Batch Wine Label | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/package-006.webp"
                  alt="box packaging example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Pattern design for client Pitch | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/lable-007.webp"
                  alt="Brandy lable 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Small-Batch Brandy label | 2020</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Murals
              </h2>
            </section>
            <div className={styles.portfolioGrid}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/mural-001.webp"
                  alt="Mural example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Bedroom: Wild forest | 2022 | ~110 sqft</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/mural-002.webp"
                  alt="Mural example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>VBS-Collab Map | 2021 | ~16 sqft</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Fabric and Pattern Design
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-001.webp"
                  alt="Pattern Design example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-002.webp"
                  alt="Pattern Design example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-003.webp"
                  alt="Pattern Design example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-004.webp"
                  alt="Pattern Design example 004"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-005.webp"
                  alt="Pattern Design example 005"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-006.webp"
                  alt="Pattern Design example 006"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-007.webp"
                  alt="Pattern Design example 007"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-008.webp"
                  alt="Pattern Design example 008"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-009.webp"
                  alt="Pattern Design example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-010.webp"
                  alt="Pattern Design example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/pattern-011.webp"
                  alt="Pattern Design example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digitally Illustrated Repeating Pattern | 2019</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Digital Illustrations
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-001.webp"
                  alt="Digital Illustration example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Children&#39;s Book Illustration | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-002.webp"
                  alt="Digital Illustration example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Foral Hippo| 2021</p>
                </div>
              </div>{" "}
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-003.webp"
                  alt="Digital Illustration example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Cacti Collection | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-004.webp"
                  alt="Digital Illustration example 004"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Commissioned Pet Illustration | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-005.webp"
                  alt="Digital Illustration example 005"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Commissioned Interior Book Illustration | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-006.webp"
                  alt="Digital Illustration example 006"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digital Dessert Illustration | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-007.webp"
                  alt="Digital Illustration example 007"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Nasa Launch | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-008.webp"
                  alt="Digital Illustration example 008"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digital Positivity Illustration | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-009.webp"
                  alt="Digital Illustration example webp"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Digital Illustration | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/digital-010.webp"
                  alt="Digital Illustration example 010"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>The Happy Hippo | 2020</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                original Watercolor
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor-001.webp"
                  alt="original Watercolor example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Fields of Canola, RO | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor-002.webp"
                  alt="original Watercolor example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Goya the Stork | 2023</p>
                </div>
              </div>{" "}
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor-003.webp"
                  alt="original Watercolor example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Peoni in Black | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor-004.webp"
                  alt="original Watercolor example 004"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Pumpkin Series | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_004.webp"
                  alt="original Watercolor example 004"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Mr. Alpaca & Mr. Giraffe | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_005.webp"
                  alt="original Watercolor example 005"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Spirit of the Fox | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_006.webp"
                  alt="original Watercolor example 006"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Native Cacti | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_007.webp"
                  alt="original Watercolor example 007"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Bike to Ride | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_008.webp"
                  alt="original Watercolor example 008"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Multi-floral | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_009.webp"
                  alt="original Watercolor example 009"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Floral | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_010.webp"
                  alt="original Watercolor example 010"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Gordi | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_011.webp"
                  alt="original Watercolor example 011"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Giraffe Pair | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_012.webp"
                  alt="original Watercolor example 012"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Beautiful Camouflage | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_013.webp"
                  alt="original Watercolor example 013"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Landscape series: 001/002 | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_014.webp"
                  alt="original Watercolor example 014"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Landscape series: 003/004 | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_015.webp"
                  alt="original Watercolor example 015"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Landscape series: 005 | 2023</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_016.webp"
                  alt="original Watercolor example 016"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Dark Florals: 1, 2, & 3 | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_017.webp"
                  alt="original Watercolor example 017"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Broccoli & Asparagus | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_018.webp"
                  alt="original Watercolor example 018"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Radish | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_019.webp"
                  alt="original Watercolor example 019"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Budapest | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_020.webp"
                  alt="original Watercolor example 020"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Dancing Carrots | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_021.webp"
                  alt="original Watercolor example 021"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Spring Bicycle | 2019</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/watercolor_022.webp"
                  alt="original Watercolor example 022"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Drive-in Snack | 2023</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Photography: &#34;I See You&#34; series
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/see-001.webp"
                  alt="Fine Art Portrait Photography series named I See You photo number 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>&#34;I See You&#34; series: &#34;The Neighbor&#34;</p>
                  <p>
                    <em>Fine Art Photography | 2021</em>
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/see-002.webp"
                  alt="Fine Art Portrait Photography series named I See You photo number 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>&#34;I See You&#34; series: &#34;The Farmer&#34;</p>
                  <p>
                    <em>Fine Art Photography | 2021</em>
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/see-003.webp"
                  alt="Fine Art Portrait Photography series named I See You photo number 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>&#34;I See You&#34; series: &#34;The Grandma&#34;</p>
                  <p>
                    <em>Fine Art Photography | 2021</em>
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/see-004.webp"
                  alt="Fine Art Portrait Photography series named I See You photo number 004"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>&#34;I See You&#34; series: &#34;The Butcher&#34;</p>
                  <p>
                    <em>Fine Art Photography | 2021</em>
                  </p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Acrylic Paintings
              </h2>
            </section>
            <div className={styles.portfolioGrid}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/acrylic-001.webp"
                  alt="Acrylic Painting example 001"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Sea of Flowers | 2020</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/acrylic-004.webp"
                  alt="Acrylic Painting example 002"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Zagi the Donkey | 2021</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/acrylic-003.webp"
                  alt="Acrylic Painting example 003"
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Hope for Spring | 2020</p>
                </div>
              </div>
            </div>
            <section className={styles.heading}>
              <h2 className="wow animate__animated animate__slideInUp">
                Travel Photography
              </h2>
            </section>
            <div className={styles.portfolioGridLarge}>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_001.webp"
                  alt="original Watercolor example 001"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Geomery Above
                    <br />
                    Brasov, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_002.webp"
                  alt="2022 Travel Photography example 001"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Dark Adventure
                    <br />
                    Croatia | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2023_travelPhoto_003.webp"
                  alt="2022 Travel Photography example 003"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Two Paths
                    <br />
                    Rural, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_004.webp"
                  alt="2022 Travel Photography example 004"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Festivities No Rain
                    <br />
                    Targu Scecuisc, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_005.webp"
                  alt="2022 Travel Photography example 005"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Cobblestone
                    <br />
                    Sibui, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_006.webp"
                  alt="2022 Travel Photography example 006"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Redlake
                    <br />
                    Saltea, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_007.webp"
                  alt="2022 Travel Photography example 007"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Snowny Wild Forest
                    <br />
                    Balvanyos, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_008.webp"
                  alt="2022 Travel Photography example 008"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Honoring the Past
                    <br />
                    Nyerges-Tető, RO <br />
                    2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_009.webp"
                  alt="2022 Travel Photography example 009"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Standing Tall
                    <br />
                    Nyerges-Tető, RO <br />
                    2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_010.webp"
                  alt="2022 Travel Photography example 010"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Lights on Peaks
                    <br />
                    Butcegi Mountains, RO <br />
                    2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_012.webp"
                  alt="2022 Travel Photography example 012"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Lost in the Mountains
                    <br />
                    Near Vârful Moldoveanu, RO
                    <br />
                    2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_013.webp"
                  alt="2022 Travel Photography example 013"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Vidraru Dam | Vidraru, RO | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_014.webp"
                  alt="2022 Travel Photography example 014"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Dacian Rituals | Costesti, RO | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_015.webp"
                  alt="2022 Travel Photography example 015"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    A Friendly Flock
                    <br />
                    Oustide Targu Scecuisc, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_016.webp"
                  alt="2022 Travel Photography example 016"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Getting Lost | Buchegi, RO | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_018.webp"
                  alt="2022 Travel Photography example 018"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Getting Lost | Buchegi, RO | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_019.webp"
                  alt="2022 Travel Photography example 019"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>The Grounds of Peles | Sinaia, RO | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_020.webp"
                  alt="2022 Travel Photography example 020"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>Peles Castles | Sinaia, RO | 2022</p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_021.webp"
                  alt="2022 Travel Photography example 021"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    The Next Lake
                    <br />
                    Saltea, RO | 2022
                  </p>
                </div>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/portfolioSamples/2022_travelPhoto_022.webp"
                  alt="2022 Travel Photography example 022"
                  className={styles.fit}
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <p>
                    Restoration
                    <br />
                    Budapest, HU | 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
