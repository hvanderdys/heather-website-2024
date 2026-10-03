import HeaderNavigation from "@/components/HeaderNavigation";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { byPosted, getPostHtml, getPosts } from "@/utils";
import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "../../components/Footer";
import useWow from "@/hooks/useWow";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ name, html, keywords, summary, img }) {
  useWow();
  const postContent = useRef(null);

  useEffect(() => {
    postContent.current?.querySelectorAll("a[href]").forEach((link) => {
      const url = new URL(link.href, window.location.href);
      const hostname = url.hostname.replace(/^www\./, "");
      if (
        ["http:", "https:"].includes(url.protocol) &&
        hostname !== window.location.hostname.replace(/^www\./, "") &&
        hostname !== "heathervanderdys.com"
      ) {
        link.target = "_blank";
        link.relList.add("noopener", "noreferrer");
      }
    });
  }, [html]);
  return (
    <>
      <Head>
        <title>Heather Blog post: {name}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={`Heather Blog post: ${name}`} />
        <meta name="description" content={summary} />
        <meta name="og:description" content={summary} />
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Heather van der Dys" />
        <meta property="og:title" content={`Heather Blog post: ${name}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={img} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header
          className={styles.post}
          style={{ backgroundImage: `url(${img})` }}
        >
          <HeaderNavigation />
          <h1 className="wow animate__animated animate__zoomInUp animate_delay-2s">
            Welcome to Heather&apos;s Blog
            <br /> {name}
          </h1>
        </header>

        <article
          ref={postContent}
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts({
    allowAuthFailure: process.env.NEXT_PHASE === "phase-production-build",
  });

  const post = posts.find((post) => post.slug === params.slug);

  if (!post || !byPosted(post)) {
    return { notFound: true, revalidate: 60 };
  }

  const html = await getPostHtml(post.id);

  return {
    props: {
      ...post,
      html,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts({ allowAuthFailure: true });

  return {
    paths: posts.filter(byPosted).map(({ slug }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
}
