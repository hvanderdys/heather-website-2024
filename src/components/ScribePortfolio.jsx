import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ScribeLoadMore = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={open ? styles.open : styles.closed}>
        <div className={styles.portfolioGrid}>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-001.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-002.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-003.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-004.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-005.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-006.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-007.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-008.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-009.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-011.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-012.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2023/2023_NTTC_Conference-013.png"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
        </div>
        <h2>2022</h2>
        <div className={styles.portfolioGrid}>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_001.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_002.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_003.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_004.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_005.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_006.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_007.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_008.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_009.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_010.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_011.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_012.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              prioritys
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_013.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_014.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_015.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
              src="/2022/2022_NTTC_Conference_016.png"
              alt="Session illustration - Digital Recording/Live Scribing Example"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
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

export default function ScribePortfolio() {
  return (
    <>
      <h2>2023</h2>
      <div className={styles.portfolioGrid}>
        <div className={styles.grid}>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <Image
              src="/2023/2023_CharlieAward_Eliminating-Blind-Spot.jpeg"
              alt="Vercel Logo"
              className={styles.scribe}
              width={300}
              height={225}
              priority
            />
          </Link>
        </div>
        <div className={styles.grid}>
          <Image
            src="/2023/2023_NTTC_Conference-010.png"
            alt="Vercel Logo"
            className={styles.scribe}
            width={300}
            height={225}
            priority
          />
        </div>
        <div className={styles.grid}>
          <Image
            src="/2023/2023_CharlieAward_High-Performance-Teambuilding.jpeg"
            alt="Vercel Logo"
            className={styles.scribe}
            width={300}
            height={225}
            priority
          />
        </div>
      </div>
      <ScribeLoadMore />
    </>
  );
}
