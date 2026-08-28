import Link from "next/link";
import Layout from "../components/ui/Layout";
import styles from "../components/ui/Layout/Layout.module.css";

const IndexPage = () => (
  <Layout title="Varun Jindal" hideWritingLink>
    {/* Hero */}
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Varun Jindal</h1>
      </div>
    </div>

    {/* About Section */}
    <section className={styles.section}>
      <h2>About Me</h2>
      <p>I'm currently building for the physical world.</p>
      <p>
        In the past, I've enjoyed working on robotics, woodworking, materials science research, and consumer apps.
      </p>
    </section>

    {/* Divider */}
    <div className="stitch-divider stitch-divider--offset-right" />

    {/* Lessons Section */}
    <section className={styles.section}>
      <h2>Lessons</h2>
      <ul className="lessons-list">
        <li>
          You will never always feel incredible. Don't over-optimize your life around feeling incredible, over-optimize
          your life to perform at your best no matter how you are feeling.
        </li>
        <li>There's no limit to willpower; there's no quota for the day.</li>
        <li>Show up for your friends, always.</li>
        <li>
          Everyone is still figuring stuff out. No one has their life together, no matter how successful they are.
        </li>
        <li>Single-minded focus is your superpower. Learn to harness it.</li>
        <li>Inspiration is fleeting, act on it immediately.</li>
        <li>
          The mismatch of how difficult you expect something to be and how hard it is in reality is the source of most
          of your anger and frustration.
        </li>
        <li>Friendship, at its core, is mutual mentorship.</li>
        <li>
          Always assume people are acting in good faith. Even if they aren't, your perception and reaction will be more
          true to yourself.
        </li>
      </ul>
    </section>

    {/* Divider */}
    <div className="stitch-divider stitch-divider--offset-left" />

    {/* Links Section */}
    <section className={styles.section}>
      <h2>Links</h2>
      <ul>
        <li>
          <Link href="https://www.youtube.com/watch?v=603F7vPUbrg">CD Wind Turbines</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=gmHcG-bar7w">Robotic Arm</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=nn-x44gB0oA">Wooden Helicopters</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=fUokpuev6pk">&ldquo;Soft&rdquo; Robotics</Link>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
