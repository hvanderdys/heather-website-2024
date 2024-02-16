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
import useWow from "@/hooks/useWow";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ name, html, keywords, summary, img }) {
  useWow();
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
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header
          className={styles.post}
          style={{ backgroundImage: `url(${img})` }}
        >
          <nav className={styles.header}>
            <menu>
              <div ClassName="wow animate__animated animate__zoomInRight">
                <Menu />
              </div>
              <aside
                className={`${styles.socialBar} wow animate__animated animate__zoomInRight animate_delay-1s`}
              >
                <CTA />
                <SocialIcons />
              </aside>
            </menu>
          </nav>
          <h1 className="wow animate__animated animate__zoomInUp animate_delay-2s">
            Welcome to Heather's Blog | Post Number
            <br /> {name}
          </h1>
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
