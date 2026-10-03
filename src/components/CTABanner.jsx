import styles from "@/styles/CTABanner.module.css";

export default function CTABanner({ children, className = "", tone = "red", columns = false, ...props }) {
  return (
    <article
      {...props}
      className={`${styles.banner} ${tone === "light" ? styles.light : ""} ${columns ? styles.columns : ""} ${className}`}
    >
      {children}
    </article>
  );
}
