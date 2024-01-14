import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ReactElement } from "react";
import SocialIcons from "../components/SocialIcons";
import Footer from "../components/Footer";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <nav>
            <menu className={styles.mobile}>=</menu>
            <menu className={styles.desktop}>
              <div>
                <Menu />
              </div>
              <aside className={[styles.socialBar, styles.desktop].join(" ")}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.CTA}
                >
                  <button className={styles.desktop}>Contact Me</button>
                </a>
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
            <div className={[styles.socialBar, styles.mobile].join(" ")}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.CTA}
              >
                <button className={styles.desktop}>Contact Me</button>
              </a>{" "}
              <SocialIcons />
            </div>
            <aside>
              <h2> Hello. I am Heather, a designer and creative for hire.</h2>
              <p>
                Not only a UI/UX and web designer, my varied and in depth
                talent-stack allows me to thrive in enviornments needing
                detail-oriented and creative problem solving.
              </p>
            </aside>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobile}
            >
              <button>Contact Me</button>
            </a>
          </div>
        </header>
        <article className={styles.about}>
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
              viewBox="0 0 607.1 156.2"
            >
              <path
                class="b"
                d="M-0.5,35.5c119.8,0,174.7-34.6,609.9-34.6v155.3H-0.5V35.5z"
              />
            </svg>
          </div>
          <div className={styles.inner}>
            <h2>Heather van der Dys</h2>
            <h3>ALWAYS CREATING</h3>
            <p>
              After Graduating Magna Cum Laude with my BFA from University of
              Texas at Arlington in 2011, I was privileged to feature in art
              show around Dallas, Texas and intern professionally under a local
              photographer. Then I served as a Creative and Communications
              Director for three years before becoming a freelance
              artist/designer and beginning a custom solution design and
              development agency.
              <br /> <br />
              My main passion is to bring ideas to life. I love working with
              businesses, visionaries, and innovative individuals. For my
              personal work and touch, I am influenced by a love of logic,
              engineering, travel, and nature.
              <br /> <br />
              My profession is as a designer, tackling projects across web and
              print, including UI/UX and Product Design. As a side-hustle and
              hobby, you can see (mainly on my Instagram feed) a love for hands
              on mediums involving mostly watercolor and large murals. After
              living over 6 years in Eastern Europe, my style has evolved to
              take cultures, colors, and simplicity into this season of my fine
              art and design principles.
            </p>
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
            <h2>Testimonies</h2>
            <h3>What my Clients Have to Say</h3>
            <div className={styles.scrollingWrapper}>
              <section>
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
              <section>
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
              <section className={styles.long}>
                <p className={styles.left}>
                  &ldquo;There are very few feelings more rewarding in this
                  world than what one feels seeing his or her vision spring to
                  life, yet Heather van der Dys <strong>RELIABLY</strong>{" "}
                  delivers that feeling time after time after time. She is a
                  bona-fide
                  <strong>ARTISTE</strong> in every sense of the word, but
                  contrary to the ‘creatives’ stereotype, she also possesses a
                  really grounded business sense. Whatever the need, she’ll be
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
              <section>
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
              <section>
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
              <section className={styles.short}>
                <p className={styles.left}>
                  &ldquo;Heather, thanks for taking what was in my brain and
                  making it come to life! WOOHOOOO! Cannot WAIT to get the word
                  out for this [published Bible] study.&rdquo;
                </p>
                <cite>Kris Murphy</cite>
                <h4>Author</h4>
              </section>
            </div>
            <h3 className={styles.mobile}>P-A-G-I-N-A-T-I-O-N</h3>
          </div>
        </article>
        <article className={styles.mainPortfolio}>
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
                <h2>Technology and Design</h2>
                <p>
                  Welcome to my Portfolio. This section of my work showcases
                  Website Design, UI/UX, Product Design, Fully custom Websites,
                  Square Space, Wix, and High Fidelity Prototypes.
                </p>
              </section>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.CTA}
              >
                <button>Contact Me</button>
              </a>
            </header>
            <div className={styles.portfolioGrid}>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/185679559/Custom-Web-Design-in-Wordpress-with-Elemento-Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/001-QE-wordpressSite.jpeg"
                    alt="App/Web Portfolio item: WordPress Elementor Custom Website Design - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Custom WordPress Client Website<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2022</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/185673105/High-Fidelity-website-Prototype"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/002-MW-FigmaWireframe.jpeg"
                    alt="App/Web Portfolio item: Figma High Fidelity Animated Wireframe - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Figma High-Fidelity Client Wireframe<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2020</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/130606335/Modern-web-design-illustration-and-video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/003-PL-WebApplication.jpeg"
                    alt="App/Web Portfolio item: Custom React JS Website Design - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      React Landing Page/Branding/App<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2021</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/185756527/French-themed-Game-Illustrations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/004-FG-GameDesign.jpeg"
                    alt="App/Web Portfolio item: Game Illustration - Brakeys Game Jam"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Game Illustration | Brakeys Game Jam<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2022</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/185761461/Actor-Website-and-Branding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/005-GC-WixWebsite.jpeg"
                    alt="App/Web Portfolio item: Custom Actor Film Wix Client Website - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Custom Wix Client Website<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2023</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/185755299/HTMLCSS-working-High-Fidelity-Mockup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/006-DT-HTMLProject.jpeg"
                    alt="HTML/CSS Client Product Search - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      HTML/CSS Client Product Search<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2022</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/154704193/A-website-Revamp-Process-(2016-2022)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/007-BM-JSWebsite.jpg"
                    alt="Custom React Client Website - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Custom React Client Website<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2023</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/125364613/Custom-Static-Web-Design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/008-SF-ReactWebsite.png"
                    alt="App/Custom Static 1-Page Client Website - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Custom Static 1-Page Client Website<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2022</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/89332547/Personal-Business-Web-Design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/009-Vd-ReactWebsite.png"
                    alt="App/React Multipage | Previous Business - Personal Multipage Business Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      React Multipage | Previous Business<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2021</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/76978861/Full-Branding-Strategy-through-web-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/010-CS-ReactNativeMultiLingual.png"
                    alt="App/Non-Profit React App Multi-Lingual - Non-Profit Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Non-Profit React App Multi-Lingual<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2020</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/185657915/Fireside-Book-Publishing-and-Landing-Page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/011-FS-ReactWebsite.png"
                    alt="App/React 1-page Client Landing Website - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      React 1-page Client Landing Website<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2020</p>
                  </div>
                </a>
              </div>
              <div className={styles.grid}>
                <a
                  href="https://www.behance.net/gallery/185653499/Countdowner-Desktop-Application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/Tech/012-CD-ReactNativeDesktopApp.png"
                    alt="App/Desktop Client Application - Client Work Example"
                    className={styles.vercelLogo}
                    width={300}
                    height={200}
                    priority
                  />
                  <div>
                    <h3>
                      Desktop Client Application<span>-&gt;</span>
                    </h3>
                    <p>Completed in 2018</p>
                  </div>
                </a>
              </div>
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
            <h2>GOAL</h2>
            <h3>Transforming Ideas into Reality: A Blend of Art and Design</h3>
          </aside>
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
              viewBox="0 0 607.1 64.8"
            >
              <path
                class="b"
                d="M609.4,0C521.3,0,468.5,32.2,273,28.7c-133.4-2.5-158.5-24-273.5-24v60.7h609.9V0z"
              />
            </svg>
          </div>
          <div className={styles.inner}>
            <header>
              <section>
                <h2>Digital Scribing/Recording</h2>
                <p>
                  This is a process of live illustrating during a meeting or
                  conference in order to keep the audience more engaged, foster
                  learning, and create a take home summary of content. Prior to
                  eat session I am given a theme, image of the speaker, and the
                  main topics they will be discussing. Following the session, we
                  complete a series of edits before finalizing the image.
                </p>
              </section>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.CTA}
              >
                <button>Contact Me</button>
              </a>
            </header>
            <h2>2023</h2>
            <div className={styles.portfolioGrid}>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-001.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-002.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-003.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-004.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-005.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-006.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-007.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-008.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-009.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-010.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-011.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-012.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_NTTC_Conference-013.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <Image
                    src="/2023/2023_CharlieAward_Eliminating-Blind-Spot.jpeg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={300}
                    height={225}
                    priority
                  />
                </a>
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2023/2023_CharlieAward_High-Performance-Teambuilding.jpeg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
            </div>
            <h2>2022</h2>
            <div className={styles.portfolioGrid}>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_001.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_002.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_003.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_004.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_005.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_006.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_007.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_008.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_009.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_010.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_011.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_012.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  prioritys
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_013.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_014.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_015.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
              <div className={styles.grid}>
                <Image
                  src="/2022/2022_NTTC_Conference_016.png"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={300}
                  height={225}
                  priority
                />
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
