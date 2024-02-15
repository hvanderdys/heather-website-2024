import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { byPosted, getPosts } from "../../utils";
import SocialIcons from "../../components/SocialIcons";
import Footer from "../../components/Footer";
import Image from "next/image";
import Menu from "@/components/Menu";
import CTA from "@/components/CTA";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Heather van der Dys Blog</title>
        <meta
          name="description"
          content="I am Heather, a designer and creative for hire. Welcome to my little writting outlet where I walk through my journey as a mom, a designer, and a slowely changing person making small 1% changes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uqu0xku.css" />
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
          <div className={styles.content}>
            <h2>Hello & Welcome to my Blog.</h2>
            <p>
              I am Heather, a designer and creative for hire. Welcome to my
              little writting outlet where I walk through my journey as a mom, a
              designer, and a slowely changing person making small 1% changes.
            </p>
          </div>
        </header>
        <div className={styles.grid}>
          {posts
            .sort(function dateSort(b, a) {
              return new Date(a.postDate) - new Date(b.postDate);
            })
            .map(({ id, name, slug, summary, img, date }) => (
              <Link key={id} href={`/blog/${slug}`}>
                <Image
                  src={img}
                  alt="App/Web Portfolio item: WordPress Elementor Custom Website Design - Client Work Example"
                  className={styles.vercelLogo}
                  width={200}
                  height={200}
                  priority
                />
                <aside>
                  <h3 className={styles.fancy}>{name}</h3>
                  <h4>{date}</h4>
                  <p>{summary}</p>
                </aside>
              </Link>
            ))}
        </div>
        <Footer />
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
