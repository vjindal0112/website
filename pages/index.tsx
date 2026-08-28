import Layout from "../components/ui/Layout";
import styles from "../components/ui/Layout/Layout.module.css";

const IndexPage = () => (
  <Layout title="Varun Jindal">
    {/* Hero */}
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Varun Jindal</h1>
      </div>
    </div>

    {/* About Section */}
    <section className={styles.section}>
      <h2>About Me</h2>
      <p className="section-subtitle">What I'm up to</p>
      <p>I'm currently building for the physical world.</p>
      <p>
        In the past, I've enjoyed working on robotics, woodworking, materials science research, and consumer apps.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
