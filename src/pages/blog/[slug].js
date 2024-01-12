import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { byPosted, getPostHtml, getPosts } from "@/utils";
import SocialIcons from "../../components/SocialIcons";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ name, html, keywords, summary }) {
  return (
    <>
      <Head>
        <title>Demo Blog</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={name} />
        <meta name="description" content={summary} />
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Heather van der Dys" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
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
        <article
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
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

export async function getStaticProps({ params }) {
  const posts = await getPosts();

  const post = posts.find((post) => post.slug === params.slug);

  const html = await getPostHtml(post.id);

  return {
    props: {
      ...post,
      html,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.filter(byPosted).map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
