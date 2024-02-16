import SocialIcons from "@/components/SocialIcons";
import Menu from "@/components/Menu";
import CTA from "@/components/CTA";

export default function Footer() {
  return (
    <footer>
      <div className="wow animate__animated animate__zoomInRight ">
        <Menu />
      </div>
      <div className="wow animate__animated animate__zoomInRight animate__delay-1s">
        <CTA />
      </div>
      <div className="wow animate__animated animate__zoomInRight animate__delay-2s">
        <SocialIcons />
      </div>
    </footer>
  );
}
