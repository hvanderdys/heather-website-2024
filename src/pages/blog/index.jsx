import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { byPosted, getPosts } from "../../utils";
import SocialIcons from "../../components/SocialIcons";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Demo Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <nav>
            <div className={styles.links}>
              <a
                className={styles.links}
                href="#"
                target="_blank"
                aria-label="About"
                rel="noopener noreferrer"
              >
                About
              </a>
              <a
                className={styles.links}
                href="#"
                target="_blank"
                aria-label="Testimony"
                rel="noopener noreferrer"
              >
                Testimony
              </a>
              <a
                className={styles.links}
                href="#"
                target="_blank"
                aria-label="Portfolio"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
              <a
                className={styles.links}
                href="#"
                target="_blank"
                aria-label="Resume"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className={styles.links}
                href="#"
                target="_blank"
                aria-label="Blog"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
            <div className={styles.socialBar}>
              <SocialIcons />
            </div>
          </nav>
          <div className={styles.content}>
            <h2>
              Hello & Welcome to my Blog. I am Heather, a designer and creative
              for hire.
            </h2>
          </div>
        </header>
        <div className={styles.grid}>
          {posts.map(({ id, name, slug }) => (
            <Link key={id} href={`/blog/${slug}`}>
              <Image
                src="/Tech/001-QE-wordpressSite.jpeg"
                alt="App/Web Portfolio item: WordPress Elementor Custom Website Design - Client Work Example"
                className={styles.vercelLogo}
                width={200}
                height={200}
                priority
              />
              <aside>
                <h2>{name}</h2>
                <h3>January ##, 2024</h3>
                <p>
                  This is where the TLDR will go for each post. It is about
                  100-150 characters.
                </p>
              </aside>
            </Link>
          ))}
        </div>
        <footer>
          <nav>
            <a
              href="#"
              target="_blank"
              aria-label="About"
              rel="noopener noreferrer"
            >
              About
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Testimony"
              rel="noopener noreferrer"
            >
              Testimony
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Portfolio"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Resume"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Blog"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.CTA}
            >
              Contact Me
            </a>
          </nav>
          <div className={styles.socialBar}>
            <SocialIcons />
          </div>
        </footer>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: posts.filter(byPosted),
    },
  };
}
