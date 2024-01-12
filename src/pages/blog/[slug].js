import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { byPosted, getPostHtml, getPosts } from "@/utils";
import SocialIcons from "../../components/SocialIcons";
import Image from "next/image";

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
      <main className={styles.main}>
        <header>
          <nav>
            <menu className={styles.mobile}>=</menu>
            <menu className={styles.desktop}>
              <div>
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
              <aside className={[styles.socialBar, styles.desktop].join(" ")}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.CTA}
                >
                  <button className={styles.desktop}>Contact Me</button>
                </a>{" "}
                <SocialIcons />
              </aside>
            </menu>
            <h1 className={styles.SEOonly}>Heather van der Dys</h1>
          </nav>
          <div className={styles.content}>
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
        <Link href="/">back</Link>
        <article
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
