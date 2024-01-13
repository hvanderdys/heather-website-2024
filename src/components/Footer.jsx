import SocialIcons from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer>
      <nav>
        <a
          href="#"
          target="_blank"
          aria-label="About"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="Testimony"
          rel="noopener noreferrer"
        >
          Testimony
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="Portfolio"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="Resume"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a href="#" target="_blank" aria-label="Blog" rel="noopener noreferrer">
          Blog
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Contact Me
        </a>
      </nav>
      <SocialIcons />
    </footer>
  );
}
