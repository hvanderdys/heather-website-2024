import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/PortfolioDisciplines.module.css";

const disciplines = [
  {
    title: "Fine Art",
    href: "/portfolio/art",
    cards: [
      { title: "Watercolor", src: "/portfolioSamples/watercolor-002.webp", href: "/portfolio/art#watercolor" },
      { title: "Acrylic and Oil", src: "/portfolioSamples/acrylic-001.webp", href: "/portfolio/art#acrylic-oil" },
      { title: "Photography", src: "/portfolioSamples/2022_travelPhoto_022.webp", href: "/portfolio/art#photography" },
    ],
  },
  {
    title: "Illustration",
    href: "/portfolio/illustrations",
    cards: [
      { title: "Custom Digital Illustrations", src: "/portfolioSamples/digital-001.webp", href: "/portfolio/illustrations" },
      { title: "Digital Scribing", src: "/2023/2023_NTTC_Conference-013.png", href: "/portfolio/illustrations#digital-scribing" },
      { title: "Surface Design", src: "/portfolioSamples/pattern-001.webp", href: "/portfolio/illustrations#graphic-vector" },
    ],
  },  {
    title: "Creative Tech + Front-End",
    href: "/portfolio/tech",
    cards: [
      { title: "UI/UX", src: "/Tech/002-MW-FigmaWireframe.jpeg", href: "/portfolio/tech" },
      { title: "Websites", src: "/Tech/001-QE-wordpressSite.jpeg", href: "/portfolio/tech" },
      { title: "Apps and Game Design", src: "/Tech/003-PL-WebApplication.jpeg", href: "/portfolio/tech" },
    ],
  },
  {
    title: "3D + Spatial",
    href: "/portfolio/3d",
    cards: [
      { title: "Mountain mural", src: "/portfolioSamples/mural-001.webp", href: "/portfolio/3d" },
      { title: "Bike wall Mural", src: "/portfolioSamples/Bike Mural.png", href: "/portfolio/3d" },
      { title: "Dimensional work", src: "/portfolioSamples/Howls in progress.png", href: "/portfolio/3d" },
    ],
  },
];

export default function PortfolioDisciplines() {
  return (
    <div className={styles.disciplines}>
      <h2 id="disciplines-title">Disciplines</h2>
      <div className={styles.categories}>
        {disciplines.map((discipline, index) => (
          <section key={discipline.title} aria-labelledby={`discipline-${index}`}>
            <div className={styles.categoryHeading}>
              <h3 id={`discipline-${index}`} className={styles.categoryTitle}>
                {discipline.title}
              </h3>
              <Link
                href={discipline.href}
                className={styles.seeMore}
                aria-label={`See more ${discipline.title}`}
              >
                See more
              </Link>
            </div>
            <div className={styles.cards}>
              {discipline.cards.map((card) => (
                <Link href={card.href} className={styles.card} key={card.title}>
                  <div className={styles.imageFrame}>
                    {card.src ? (
                      <Image
                        src={card.src}
                        alt={`${card.title} portfolio sample`}
                        fill
                        sizes="(min-width: 768px) calc((100vw - 208px) / 6), calc((100vw - 80px) / 3)"
                        className={styles.image}
                      />
                    ) : (
                      <span className={styles.placeholder}>Image coming soon</span>
                    )}
                  </div>
                  <h4 className={styles.cardTitle}>{card.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
