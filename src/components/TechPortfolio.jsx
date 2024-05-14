import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const TechLoadMore = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.readMoreSection}>
      <div className={open ? styles.open : styles.closed}>
        <div className={styles.portfolioGrid}>
          <div className={styles.closed}>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/185756527/French-themed-Game-Illustrations"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/004-FG-GameDesign.jpeg"
                  alt="App/Web Portfolio item: Game Illustration - Brakeys Game Jam"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    Game Illustration<span>-&gt;</span>
                  </h3>
                  <p>
                    <em>Illustrated in Procreate | Brakeys Game Jam</em>
                  </p>
                  <p>Completed in 2022</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/185761461/Actor-Website-and-Branding"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/005-GC-WixWebsite.jpeg"
                  alt="App/Web Portfolio item: Custom Actor Film Wix Client Website - Client Work Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    Custom Wix Client Website<span>-&gt;</span>
                  </h3>
                  <p>Completed in 2023</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/185755299/HTMLCSS-working-High-Fidelity-Mockup"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/006-DT-HTMLProject.jpeg"
                  alt="HTML/CSS Client Product Search - Client Work Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    HTML/CSS Client Product Search<span>-&gt;</span>
                  </h3>
                  <p>Completed in 2022</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/154704193/A-website-Revamp-Process-(2016-2022)"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/007-BM-JSWebsite.jpg"
                  alt="Custom React Client Website - Client Work Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    Custom React Client Website<span>-&gt;</span>
                  </h3>
                  <p>
                    <em>React App with Javascript and CSS</em>
                  </p>
                  <p>Completed in 2023</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/125364613/Custom-Static-Web-Design"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/008-SF-ReactWebsite.png"
                  alt="App/Custom Static 1-Page Client Website - Client Work Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    1-Page Client Website<span>-&gt;</span>
                  </h3>
                  <p>
                    <em>React App with Javascript and CSS</em>
                  </p>
                  <p>Completed in 2022</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/89332547/Personal-Business-Web-Design"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/009-Vd-ReactWebsite.png"
                  alt="App/React Multipage | Previous Business - Personal Multipage Business Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    Multipage | Previous Business<span>-&gt;</span>
                  </h3>
                  <p>
                    <em>React App with Javascript and CSS</em>
                  </p>
                  <p>Completed in 2021</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/76978861/Full-Branding-Strategy-through-web-development"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/010-CS-ReactNativeMultiLingual.png"
                  alt="App/Non-Profit React App Multi-Lingual - Non-Profit Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    Non-Profit & Multi-Lingual<span>-&gt;</span>
                  </h3>
                  <p>
                    <em>React application in JavaScript and CSS</em>
                  </p>
                  <p>Completed in 2020</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/185657915/Fireside-Book-Publishing-and-Landing-Page"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/011-FS-ReactWebsite.png"
                  alt="App/React 1-page Client Landing Website - Client Work Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    1-page Client Landing Website<span>-&gt;</span>
                  </h3>
                  <p>
                    <em>React application in JavaScript and CSS</em>
                  </p>
                  <p>Completed in 2020</p>
                </div>
              </Link>
            </div>
            <div className={styles.grid}>
              <Link
                href="https://www.behance.net/gallery/185653499/Countdowner-Desktop-Application"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <Image
                  src="/Tech/012-CD-ReactNativeDesktopApp.png"
                  alt="App/Desktop Client Application - Client Work Example"
                  
                  width={300}
                  height={200}
                  priority
                />
                <div>
                  <h3>
                    Desktop Client Application<span>-&gt;</span>
                  </h3>
                  <p>
                    <em>Collaboration Native App with JS and CSS</em>
                  </p>
                  <p>Completed in 2018</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <button type="button" onClick={toggle}>
          View {open ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
};

export default function TechPortfolio() {
  return (
    <div className={styles.portfolioGrid}>
      <div className={styles.closed}>
        <div className={styles.grid}>
          <Link
            href="https://www.behance.net/gallery/185679559/Custom-Web-Design-in-Wordpress-with-Elemento-Pro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <Image
              src="/Tech/001-QE-wordpressSite.jpeg"
              alt="App/Web Portfolio item: WordPress Elementor Custom Website Design - Client Work Example"
              
              width={300}
              height={200}
              priority
            />
            <div>
              <h3>
                Client Website<span>-&gt;</span>
              </h3>
              <p>
                <em>Custom WordPress Theme | Elementor</em>
              </p>
              <p>Completed in 2022</p>
            </div>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link
            href="https://www.behance.net/gallery/185673105/High-Fidelity-website-Prototype"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <Image
              src="/Tech/002-MW-FigmaWireframe.jpeg"
              alt="App/Web Portfolio item: Figma High Fidelity Animated Wireframe - Client Work Example"
              
              width={300}
              height={200}
              priority
            />
            <div>
              <h3>
                High-Fidelity Client Wireframe<span>-&gt;</span>
              </h3>
              <p>
                <em>Created in Figma | Animated in Adobe XD</em>
              </p>
              <p>Completed in 2020</p>
            </div>
          </Link>
        </div>
        <div className={styles.grid}>
          <Link
            href="https://www.behance.net/gallery/130606335/Modern-web-design-illustration-and-video"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <Image
              src="/Tech/003-PL-WebApplication.jpeg"
              alt="App/Web Portfolio item: Custom React JS Website Design - Client Work Example"
              
              width={300}
              height={200}
              priority
            />
            <div>
              <h3>
                Landing Page, Branding, & App<span>-&gt;</span>
              </h3>
              <p>
                <em>Javascript, React, CSS, and Adobe</em>
              </p>
              <p>Completed in 2021</p>
            </div>
          </Link>
        </div>
      </div>
      <TechLoadMore />
    </div>
  );
}
