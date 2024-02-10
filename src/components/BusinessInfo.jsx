import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ServicesReadMore = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.innerContent}>
      <div className={styles.columnsContent}>
        <div>
          <h3>CONCEPTION</h3>
          <h4>Brand Strategy</h4>
          <p className={open ? styles.open : styles.closed}>
            Let&#39;s look ahead. This strategy is a long-term plan stepping
            towards a successful Brand or look/feel. The brand does not begin
            with the look but with goals and values. Through a series of
            exercises, we help you define and execute your business culture,
            values, and goals into a strategic plan.
          </p>
          <h4>Content Consulting & Brainstorming</h4>
          <p className={open ? styles.open : styles.closed}>
            Sometimes business ideas just need a set of friendly eyes to talk
            through and plan ideas before they hit the calendar. If this is the
            case for you, we are excited to help.
          </p>
          <h4>Mock-ups</h4>
          <p className={open ? styles.open : styles.closed}>
            Our team can design visual mock-ups of what a print, package, or
            digital design could look like when your project or idea launches.
          </p>
          <h4>Prototyping & Wire-Frames</h4>
          <p className={open ? styles.open : styles.closed}>
            This is before your problem has a permanent solution. Our goal is to
            create a rapid proof of concept so you can experience the heart of
            the solution before investing in its development.
          </p>
        </div>
        <div>
          <h3>DESIGN</h3>
          <h4>Advertising Collateral</h4>
          <p className={open ? styles.open : styles.closed}>
            Any digital or print media in your campaign can be at your
            fingertips in a print/send-ready form.
          </p>

          <h4>Brand Collateral</h4>
          <p className={open ? styles.open : styles.closed}>
            We would love to work with you for a re-brand or as a new business.
            A brand is a conversation. Through the process, we learn who you
            are, what you do, how you serve, and how we can explain that through
            imagery, colors, fonts, and more. The resulting collateral can
            include logos letterhead, email signatures, presentation &
            PowerPoint design, posters, signage, and more.
          </p>
          <h4>Brand Guidelines</h4>
          <p className={open ? styles.open : styles.closed}>
            We help curate the essentials of your brand and display it in an
            easy-to-follow format so you can focus on your business creatively
            and consistently.
          </p>
          <h4>User Interface</h4>
          <p className={open ? styles.open : styles.closed}>
            We design the interaction between the end-user and your content. Our
            flexible and creative team seeks creative solutions to engage the
            user and allow for seamless interaction on their device of choice.
          </p>
        </div>
        <div>
          <h3>DEVELOPMENT</h3>
          <h4>Custom Website Design</h4>
          <p className={open ? styles.open : styles.closed}>
            From simple one-page sites to large web applications, we help you
            narrow your focus and display what your customer needs to know about
            who you are, what you do, and how you can help them.
          </p>
          <h4>Domain </h4>
          <p className={open ? styles.open : styles.closed}>
            We are happy to create a low-stress environment, help find a domain,
            and host your website.
          </p>
          <h4>Mobile & Desktop Applications</h4>
          <p className={open ? styles.open : styles.closed}>
            When your company has an idea, we help analyze, plan, develop, test,
            and launch such projects.
          </p>
          <h4>Progressive Web Applications</h4>
          <p className={open ? styles.open : styles.closed}>
            Progressive web applications (PWAs) combine multiple technologies to
            make web applications feel more native and improve user experience
            across platforms. They are off-line capable, user-friendly, fast,
            and reliable.
          </p>
          <h4>Website & Application Maintenance </h4>
          <p className={open ? styles.open : styles.closed}>
            When all is said and done... we want your website to remain clean,
            crisp, fast, and user-friendly. We offer customer support (admin,
            passwords, etc.), regular maintenance, content management, SEO
            optimization, Feature additions, and behind-the-scenes maintenance.
          </p>
        </div>
        <div>
          <h3>MARKETING</h3>
          <h4>Advertising Campaigns</h4>
          <p className={open ? styles.open : styles.closed}>
            We want to help engage your target audience with a series of
            well-placed and well-designed messages. We help create imagery plan
            your campaign calendar and utilize a variety of local and social
            media channels.
          </p>
          <h4>Email Marketing </h4>
          <p className={open ? styles.open : styles.closed}>
            Have you received a good email lately? Whether on your phone or web
            browser, we believe emails will arrive ready for consumption. We
            focus on responsive messages with a clear focus and a branded style.
          </p>
          <h4>SEO </h4>
          <p className={open ? styles.open : styles.closed}>
            Search Engine Optimization has three main parts. These three parts
            are <strong>Audience Quality</strong> (draw an audience that is
            genuinely interested in the products or services you offer,){" "}
            <strong>Audience Quantity</strong> (Growth in number after you gain
            the right people&#39;s attention,) and three...{" "}
            <strong>Organic Audience</strong> (unpaid and organically driven
            viewers.)
          </p>
          <h4>Social Media Consulting</h4>
          <p className={open ? styles.open : styles.closed}>
            Whether LinkedIn, Instagram, Facebook, or elsewhere... you have a
            lot of opportunities. We can help with photo curating, planning,
            layout, template creation, imagery, copywriting, and other content
            needs.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <button type="button" onClick={toggle}>
          Read {open ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
};

export default function BusinessInfo() {
  return (
    <>
      <article id="consultation" className={styles.consultation}>
        <div className={styles.inner}>
          <h2>
            Design and Development
            <br />
            Consultation Services
          </h2>
          <p>
            As mentioned above, in 2016 my husband and I took our side hustle
            for website development and started a small consulting firm/agency.
          </p>
          <h3 className={styles.fancy}>How we Consult</h3>
          <p>
            Although most consulting and freelance projects currently are lone
            projects with me, more complex products are made with Richard van
            der Dys, a skilled and experienced, senior software developer.
          </p>
          <h3 className={styles.fancy}>Services & Passions</h3>
          <ServicesReadMore />
        </div>
      </article>
      <article id="process" className={styles.process}>
        <div className={styles.container}>
          <aside>
            <h2>Our Process</h2>
            <p>
              <strong>1 | CONVERSATION | </strong>Where we work with you to
              complete research and strategize custom solutions.
            </p>
            <p>
              <strong>2 | IMPLEMENTATION |</strong> Where we prototype,
              transform, design, and develop your solution.
            </p>
            <p>
              <strong>3 | LAUNCH |</strong> We provide in-depth Q&A and Testing
              before launching your final product.
            </p>
            <p>
              <strong>4 | AFTER-CARE |</strong> We desire to empower and
              encourage your business and projects by providing maintenance and
              enhancements.
            </p>
          </aside>
          <Image
            src="/2021techillustration.png"
            alt="tech illustration of services"
            className={styles.floating}
            width={300}
            height={200}
            priority
          />
        </div>
      </article>
      <article id="values" className={styles.values}>
        <div className={styles.inner}>
          <h2>Our Core Values, Principles & Passions</h2>
        </div>
        <div className={styles.columnsContentScroll}>
          <p>
            <strong>Problem Solve.</strong>
            <br />
            We do not want to create for the sake of creating or develop for the
            sake of developing. We want to help identify and solve problems
            through our skills and experiences.
          </p>
          <p>
            <strong>Listen.</strong>
            <br />
            Although talking is enjoyable, we strive to listen first in order to
            understand well.
          </p>
          <p>
            <strong>Innovation & Creativity.</strong>
            <br />
            Often a problem can be solved in more than one way. Our goal is to
            find the best and easiest way to solve a problem.
          </p>
          <p>
            <strong>Be Good Stewards.</strong>
            <br />
            We find it important to take care of what we have and what we give
            with responsibility and wisdom wherever possible.
          </p>
          <p>
            <strong>Be Honest.</strong>
            <br />
            We believe conversations, emails, work and everything else should be
            approached with authenticity and openness.
          </p>
          <p>
            <strong>Balance Work & Life.</strong>
            <br />
            Yes, we could make more if we worked more, and we would have more
            free time if we never worked. However, we try to find a healthy
            balance to infuse our work with passion, love, energy, and quality.
          </p>
          <p>
            <strong>Communicate Often.</strong>
            <br />
            It is important to regularly listen and talk with patience,
            openness, and honesty.
          </p>
          <p>
            <strong>Give Back.</strong>
            <br />
            We encourage acts of service and are involved in many community
            projects and camps.
          </p>
          <p>
            <strong>Never Stop Learning.</strong>
            <br />
            How could you? it is so fun, challenging, and helpful.
          </p>
        </div>
      </article>
    </>
  );
}
