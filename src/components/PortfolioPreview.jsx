import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/PortfolioPreview.module.css";

const categories = [
  {
    id: "art",
    title: "Art",
    description:
      "Original paintings, botanicals, landscapes, and handmade pieces rooted in natural beauty, visible brushwork, and a little wild whimsy.",
    projects: [
      {
        title: "2026 Floral",
        src: "/portfolioSamples/floral.png",
        alt: "Framed watercolor paintings of an orange coneflower and a pink tulip",
      },
      {
        title: "2026 Mahjong",
        src: "/portfolioSamples/mahjong.png",
        alt: "Framed watercolor paintings of a whimsical treehouse and floral mahjong tiles",
      },
    ],
    cta: "Shop All",
    href: "/shop",
  },
  {
    id: "spatial",
    title: "3D + Spatial",
    description:
      "Dimensional builds, environmental pieces, murals, props, and physical ideas that turn flat concepts into tangible experiences.",
    projects: [
      {
        title: "Mountainscape Mural",
        src: "/portfolioSamples/mural-001.webp",
        alt: "Hand-painted mountain landscape mural with layered peaks and evergreen trees",
      },
      {
        title: "Bike Mural",
        src: "/portfolioSamples/Bike Mural.png",
        alt: "Blue mountain mural framing wall-mounted bicycles, shown in three views",
      },
    ],
    cta: "Explore 3D Work",
    href: "/portfolio#spatial-work",
  },
  {
    id: "creative-tech",
    title: "Creative Technology",
    description:
      "Digital experiences where design, code, interaction, and problem-solving overlap — from front-end development and UI/UX to prototypes and unusual creative builds.",
    projects: [
      {
        title: "Gamified Safety Training App",
        src: "/Tech/003-PL-WebApplication.jpeg",
        alt: "Gamified safety training web application designed by Heather van der Dys",
        href: "https://www.behance.net/gallery/130606335/Modern-web-design-illustration-and-video",
      },
      {
        title: "Brackeys Game Jam Illustrations",
        src: "/Tech/004-FG-GameDesignLG.jpeg",
        alt: "French-themed game illustrations created for the Brackeys Game Jam",
        href: "https://www.behance.net/gallery/185756527/French-themed-Game-Illustrations",
      },
    ],
    cta: "View Creative Technical Solutions",
    href: "/portfolio#creative-tech",
  },
  {
    id: "illustration",
    title: "Illustration",
    description:
      "Hand-drawn and painted illustration for books, editorial work, products, patterns, food, animals, places, and visual storytelling.",
    projects: [
      {
        title: "Children’s Book Illustration",
        src: "/portfolioSamples/digital-001.webp",
        alt: "Children’s book illustration by Heather van der Dys",
      },
      {
        title: "Digital Conference Scribing",
        src: "/2023/2023_NTTC_Conference-013.png",
        alt: "Digital illustration recording ideas from the 2023 NTTC conference",
        href: "/portfolio#digital-scribing",
      },
    ],
    cta: "View Illustrations",
    href: "/portfolio#illustration",
  },
];

export default function PortfolioPreview() {
  return (
    <div className={styles.preview}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <section
            className={styles.category}
            key={category.id}
            aria-labelledby={`preview-${category.id}`}
          >
            <h2 id={`preview-${category.id}`} className={styles.headline}>
              {category.title}
            </h2>
            <div className={styles.projects}>
              {category.projects.map((project) => (
                <Link
                  href={project.href || category.href}
                  target={project.href?.startsWith("https://") ? "_blank" : undefined}
                  rel={project.href?.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className={styles.project}
                  key={project.title}
                >
                  <figure>
                    <div className={styles.imageFrame}>
                      {project.src ? (
                        <Image
                          src={project.src}
                          alt={project.alt}
                          fill
                          sizes="(max-width: 420px) calc(100vw - 32px), (max-width: 767px) calc((100vw - 48px) / 2), (max-width: 1064px) calc((100vw - 128px) / 4), 226px"
                          className={styles.image}
                        />
                      ) : (
                        <div className={styles.placeholder}>
                          <span>Image coming soon</span>
                        </div>
                      )}
                    </div>
                    <figcaption>{project.title}</figcaption>
                  </figure>
                </Link>
              ))}
            </div>
            <p className={styles.description}>{category.description}</p>
            <Link href={category.href} className={styles.cta}>
              {category.cta}
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
