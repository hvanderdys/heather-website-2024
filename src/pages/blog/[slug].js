import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { byPosted, getPostHtml, getPosts } from "@/utils";
import SocialIcons from "../../components/SocialIcons";
import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import CTA from "../../components/CTA";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ name, html, keywords, summary }) {
  return (
    <>
      <Head>
        <title>Heather Blog post: {name}</title>
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
        <header>
          <nav className={styles.header}>
            <menu>
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
          <h1 className={styles.SEO}>{name}</h1>
        </header>

        <article
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Footer />
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
