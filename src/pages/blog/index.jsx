import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import { byPosted, getPosts } from "../../utils";
import SocialIcons from "../../components/SocialIcons";
import Footer from "../../components/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Heather van der Dys' Blog</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header>
          <nav>
            <div className={styles.links}>
              <a
                className={styles.links}
                href="/"
                target="_blank"
                aria-label="About"
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
            <h2>Hello & Welcome to my Blog.</h2>
            <p>
              I am Heather, a designer and creative for hire. Welcome to my
              little writting outlet where I walk through my journey as a mom, a
              designer, and a slowely changing person making small 1% changes.
            </p>
          </div>
        </header>
        <div className={styles.grid}>
          {posts.map(({ id, name, slug, summary, img, date }) => (
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
                <h2>{name}</h2>
                <h3>{date}</h3>
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
