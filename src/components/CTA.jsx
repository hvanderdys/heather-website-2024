import Link from "next/link";

export default function CTA() {
  return (
    <Link
      href="mailto:team@vanderdys.design"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Contact Me</button>
    </Link>
  );
}
