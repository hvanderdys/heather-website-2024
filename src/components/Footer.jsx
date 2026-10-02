import SocialIcons from "@/components/SocialIcons";
import Menu from "@/components/Menu";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wow animate__animated animate__zoomInRight ">
        <Menu />
      </div>
      <div className="wow animate__animated animate__zoomInRight animate__delay-2s">
        <SocialIcons />
      </div>
      <p className={styles.credit}>
        Not powered by a corporation: Hand developed by Heather van der Dys
      </p>
    </footer>
  );
}
