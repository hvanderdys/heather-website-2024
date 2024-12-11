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
        <div className="wow animate__animated animate__slideInUp">
          <h3>CONCEPTION</h3>
          <h4>Brand Strategy</h4>
          <p className={open ? styles.open : styles.closed}>
            Let&#39;s look ahead. This strategy is a long-term plan stepping
            towards a successful Brand or look/feel. The brand does not begin
            with the look but with goals and values. Through a series of
            exercises, we help you define and execute your business culture,
            values, and goals into a strategic plan.
          </p>
          <h4>Brand Development & Design</h4>
          <p className={open ? styles.open : styles.closed}>
            I assist in nailing down your target audience, voice, look, and feel
            as we develop logos, marks, collateral, guidelines and more to help
            your business and brand eencapsolate a cohesive sound, look, and
            feel.
          </p>
          <h4>Content Consulting & Brainstorming</h4>
          <p className={open ? styles.open : styles.closed}>
            Sometimes business ideas just need a set of friendly eyes to talk
            through and plan ideas before they hit the calendar. If this is the
            case for you, we are excited to help.
          </p>
          <h4>Mock-ups</h4>
          <p className={open ? styles.open : styles.closed}>
            I can design visual mock-ups of what a print, package, or digital
            design could look like when your project or idea launches.
          </p>
          <h4>Prototyping & Wire-Frames</h4>
          <p className={open ? styles.open : styles.closed}>
            This is before your problem has a permanent solution. My goal is to
            create a rapid proof of concept so you can experience the heart of
            the solution before investing in its technical development.
          </p>
        </div>
        <div className="wow animate__animated animate__slideInUp  animate__delay-1s">
          <h3>DESIGN</h3>
          <h4>Advertising Collateral</h4>
          <p className={open ? styles.open : styles.closed}>
            Any digital or print media in your campaign can be at your
            fingertips in a print/send-ready form.
          </p>
          <h4>Marketing + Campaign</h4>
          <p className={open ? styles.open : styles.closed}>
            From planning and content to imagry and scheduling, I am excited to
            walk along side your business as you launch marketing campaigns
            across print and digital outlets.
          </p>
          <h4>Brand Collateral</h4>
          <p className={open ? styles.open : styles.closed}>
            I would love to work with you for a re-brand or as a new business. A
            brand is a conversation. Through the process, we learn who you are,
            what you do, how you serve, and how we can explain that through
            imagery, colors, fonts, and more. The resulting collateral can
            include logos, letterhead, email signatures, presentation &
            PowerPoint design, posters, signage, and more.
          </p>
          <h4>Brand Guidelines</h4>
          <p className={open ? styles.open : styles.closed}>
            Together, I help curate the essentials of your brand and display it
            in an easy-to-follow format so you can focus on your business
            creatively and consistently.
          </p>
          <h4>User Interface</h4>
          <p className={open ? styles.open : styles.closed}>
            This is the design specifically for the interaction between the
            end-user and your content. Our flexible and creative team seeks
            creative solutions to engage the user and allow for seamless
            interaction on their device of choice.
          </p>
        </div>
        <div className="wow animate__animated animate__slideInUp  animate__delay-2s">
          <h3>DEVELOPMENT</h3>
          <h4>Website Design + Website Development</h4>
          <p className={open ? styles.open : styles.closed}>
            From simple one-page sites to large web applications, I help you
            narrow your focus and display what your customer needs to know about
            who you are, what you do, and how you can help them, in a clean and
            user friendly way with the SEO requirments to make your site shine.
          </p>
          <h4>Domain Set Up</h4>
          <p className={open ? styles.open : styles.closed}>
            I am happy to create a low-stress environment, help find a domain,
            and host your website as needed. so, please don&apos;t let this task
            stress you out.
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
            When all is said and done... I want your website to remain clean,
            crisp, fast, and user-friendly with great SEO. I offer customer
            support (admin, passwords, etc.), regular maintenance, content
            management, SEO optimization, Feature additions, and
            behind-the-scenes maintenance.
          </p>
        </div>
        <div className="wow animate__animated animate__slideInUp  animate__delay-3s">
          <h3>MARKETING</h3>
          <h4>Advertising Campaigns</h4>
          <p className={open ? styles.open : styles.closed}>
            I want to help engage your target audience with a series of
            well-placed and well-designed messages. I help create imagery, plan
            your campaign calendar, and utilize a variety of local and social
            media channels with automatic scheduling.
          </p>
          <h4>Email Marketing </h4>
          <p className={open ? styles.open : styles.closed}>
            Have you received a good email lately? Whether on your phone or web
            browser, we believe emails should arrive ready for consumption. We
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
          <h4>SEM consulting </h4>
          <p className={open ? styles.open : styles.closed}>
            Search Engine Marketing is wheere you pay to be seen and shown off.
            We help by narrowing down your target audience, helping you research
            youur options, and creating a plan where you can pivot organically
            based on what is most succesful in your unique space with your
            business and your clients.
          </p>
          <h4>Social Media Consulting</h4>
          <p className={open ? styles.open : styles.closed}>
            Whether LinkedIn, Instagram, Facebook, TikTok, YouTube, or
            elsewhere... you have a lot of opportunities. We can help with photo
            curating, planning, layout, template creation, imagery, copywriting,
            video, reels, and other content needs.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <button
          type="button"
          onClick={toggle}
          className="wow animate__animated animate__zoomInUp  animate__delay-4s"
        >
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
        <div className={styles.border}>
          <svg
            className={styles.mobile}
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 287.83 140"
          >
            <path class="b" d="m0,101.74S69.57,6.09,287.83,0v140H0v-38.26Z" />
          </svg>
          <svg
            className={styles.desktop}
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366.18 372.23"
          >
            <path
              class="b"
              d="M16.82,32.8C62.28,23.5,200.19,4.65,357.98.55c362.18-9.4,514.29,104.31,1008.2,109.41v262.7H0V35.54s6.55-.64,16.82-2.74Z"
            />
          </svg>
        </div>
        <div className={styles.inner}>
          <h2 className="wow animate__animated animate__slideInUp">
            Launch and Transition
            <br />
            Consultation Services
          </h2>
          <p className="wow animate__animated animate__slideInUp  animate__delay-.2s">
            I have been partnering with small businesses since 2016. Currently I
            focus my attention into reducint the friction and stress involved
            with launching and/or pivoting a small business&apos;s brand,
            website, content, and marketing strategy.
          </p>
          <h3
            className={`${styles.fancy} wow animate__animated animate__slideInUp  animate__delay-.4s`}
          >
            How I Consult
          </h3>
          <p className="wow animate__animated animate__slideInUp  animate__delay-.6s">
            I consult by the hour on projects and I am happy to discuss what you
            need and how much time we should set aside. I can assist with
            coaching, planning, and implemntation based on your needs and
            budget.
          </p>
          <h3
            className={`${styles.fancy} wow animate__animated animate__slideInUp  animate__delay-.8s`}
          >
            Services & Passions
          </h3>
          <ServicesReadMore />
        </div>
      </article>
      <article id="process" className={styles.process}>
        <div className={styles.container}>
          <h2 className="wow animate__animated animate__slideInUp ">
            Process & Strategy
          </h2>
        </div>
        <div className={styles.container}>
          <aside>
            <Image
              src="/conversation.png"
              alt="custom graphic illustration of heather's converation step in her consultation process"
              className={`${styles.floating}wow animate__animated animate__slideInRight`}
              width={300}
              height={200}
              priority
            />{" "}
            <p className="wow animate__animated animate__slideInUp animate__delay-1s">
              <strong>CONVERSATION: </strong>Research and strategize.
            </p>
          </aside>
          <aside>
            <Image
              src="/implementation.png"
              alt="custom graphic illustration of heather's implementation step in her consultation process"
              className={`${styles.floating} wow animate__animated animate__slideInRight`}
              width={300}
              height={200}
              priority
            />{" "}
            <p className="wow animate__animated animate__slideInUp  animate__delay-2s">
              <strong>IMPLEMENTATION: </strong>Design and develop.
            </p>
          </aside>
          <aside>
            <Image
              src="/launch.png"
              alt="custom graphic illustration of heather's launch step in her consultation process"
              className={`${styles.floating} wow animate__animated animate__slideInRight`}
              width={300}
              height={200}
              priority
            />
            <p className="wow animate__animated animate__slideInUp  animate__delay-3s">
              <strong>LAUNCH |</strong> Test and execute.
            </p>
          </aside>
          <aside>
            <Image
              src="/after-care.png"
              alt="custom graphic illustration of heather's after-care or follow-up step in her consultation process"
              className={`${styles.floating}wow animate__animated animate__slideInRight`}
              width={300}
              height={200}
              priority
            />{" "}
            <p className="wow animate__animated animate__slideInUp  animate__delay-4s">
              <strong>AFTER-CARE |</strong> Maintenain and support.
            </p>
          </aside>
        </div>
        <div className={styles.row}>
          <Link
            href="/contact"
            className="wow animate__animated animate__zoomInUp "
          >
            <button className={styles.contactButton}>Start a Project</button>
          </Link>
        </div>
      </article>
      <article id="values" className={styles.values}>
        <div className={styles.container}>
          <h2 className="wow animate__animated animate__slideInUp">
            Core Values, Principles & Passions
          </h2>
        </div>
        <div className={styles.columnsContentScroll}>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Problem Solve.</strong>
            <br />I do not want to create for the sake of creating or develop
            for the sake of developing. I personally want to help identify and
            solve problems through skills and experiences.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Listen.</strong>
            <br />
            Although talking is enjoyable, I strive to listen first in order to
            understand well.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Innovation & Creativity.</strong>
            <br />
            Often a problem can be solved in more than one way, my goal is to
            find the best and easiest way to solve a problem.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Be Good Stewards.</strong>
            <br />
            We find it important to take care of what we have and what we give
            with responsibility and wisdom wherever possible.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Be Honest.</strong>
            <br />
            We believe conversations, emails, work and everything else should be
            approached with authenticity and openness.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Balance Work & Life.</strong>
            <br />
            Yes, we could make more if we worked more, and we would have more
            free time if we never worked. However, we try to find a healthy
            balance to infuse our work with passion, love, energy, and quality.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Communicate Often.</strong>
            <br />
            It is important to regularly listen and talk with patience,
            openness, and honesty.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Give Back.</strong>
            <br />
            We encourage acts of service and are involved in many community
            projects and camps.
          </p>
          <p className="wow animate__animated animate__slideInRight ">
            <strong>Never Stop Learning.</strong>
            <br />
            How could you? it is so fun, challenging, and helpful.
          </p>
        </div>
      </article>
    </>
  );
}
