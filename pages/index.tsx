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
        In the past, I've enjoyed working on materials science research, robotics, woodworking, and consumer apps.
      </p>
    </section>

    {/* Divider */}
    <div className="stitch-divider stitch-divider--offset-right" />

    {/* Lessons Section */}
    <section className={styles.section}>
      <h2>Lessons</h2>
      <ul className="lessons-list">
        <li>
          Always assume people are acting in good faith. Even if they aren't, your perception and reaction will be more
          true to yourself.
        </li>
        <li>There's no limit to willpower; there's no quota for the day.</li>
        <li>Show up for your friends, always.</li>
        <li>Single-minded focus is your superpower. Learn to harness it.</li>
        <li>Inspiration is fleeting, act on it immediately.</li>
        <li>Aim to become known as a person who lifts others around them.</li>
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
          <Link href="https://media-to-share.s3.us-east-2.amazonaws.com/i_win.mp4">Win</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=gmHcG-bar7w">Robotic Arm</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=mRDLlziWg-0">Vibraphone</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=nn-x44gB0oA">Wooden Helicopters</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=EZp61YacOuI">Dance</Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/watch?v=fUokpuev6pk">&ldquo;Soft&rdquo; Robotics</Link>
        </li>
      </ul>
    </section>
  </Layout>
);

export default IndexPage;
