import Menu from "@/components/Menu";
import SocialIcons from "@/components/SocialIcons";
import styles from "@/styles/HeaderNavigation.module.css";

export default function HeaderNavigation({ children }) {
  return (
    <nav className={styles.header} aria-label="Site navigation">
      <menu>
        <div><Menu /></div>
        <aside><SocialIcons /></aside>
      </menu>
      {children}
    </nav>
  );
}
