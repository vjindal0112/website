import Link from "next/link";
import Layout from "../components/ui/Layout";
import ProfilePicture from "../components/ui/ProfilePicture";

const IndexPage = () => (
  <Layout title="Varun Jindal">
    <ProfilePicture link="https://www.linkedin.com/in/varun-jindal/" pictureUrl="pro-pic-casual-square.jpeg" />
    <h1 style={{ marginBottom: "8px" }}>Varun Jindal</h1>
    <p>Live like you mean it 🤘🏾</p>
    <br />
    <h2>About Me</h2>
    <p>What I'm up to</p>
    <ul>
      <li>
        Eng @ <Link href="https://lumos.com">Lumos</Link>
      </li>
      <li>Built products and communities with wide adoption:</li>
      <ul>
        <li>
          <Link href="https://studybuddies.varunjindal.com">StudyBuddies</Link>
        </li>
        <li>
          <Link href="https://enlight.nyc">Enlight</Link>
        </li>
        <li>
          <Link href="https://v1michigan.com/">V1 Michigan</Link>
        </li>
      </ul>
      <li>
        Currently upskilling in food traceability and food tech
      </li>
      <li>Adventure and adrenaline excite me: roller coasters, skydiving, cliff jumping, etc.</li>
      <li>I like being active: running, soccer, etc.</li>
    </ul>
    <h2>Lessons</h2>
    <p>Some things I've learned</p>
    <ul>
      <li>
        You will never always feel incredible. Don’t over-optimize your life around feeling incredible, over-optimize
        your life to perform at your best no matter how you are feeling.
      </li>
      <li>There’s no limit to willpower; there’s no quota for the day.</li>
      <li>Show up for your friends, always.</li>
      <li>Everyone is still figuring stuff out. No one has their life together, no matter how successful they are. </li>
      <li>Single-minded focus is your superpower. Learn to harness it.</li>
      <li>Inspiration is fleeting, act on it immediately. </li>
      <li>
        The mismatch of how difficult you expect something to be and how hard it is in reality is the source of most
        of your anger and frustration.
      </li>
      <li>Friendship, at its core, is mutual mentorship.</li>
      <li>
        Always assume people are acting in good faith. Even if they aren’t, your perception and reaction will be more
        true to yourself.
      </li>
    </ul>
    <h2>Links</h2>
    <p>Links to stuff</p>
    <ul>
      <li>
        <Link href="https://projects.varunjindal.com">Wall of projects</Link>
      </li>
      <li>
        <Link href="https://lessons.varunjindal.com">Full list of lessons</Link>
      </li>
      <li>
        <Link href="https://www.notion.so/varunjindal/a57d3289125c4ded9ab9fe7b0452d35c?v=b5c1b23a568c4cbb8f55451cc4398b5a">
          Learnings from working at Collab AI
        </Link>
      </li>
      <li>
        <Link href="https://varunjindal.notion.site/dd0c7f040e1d4b418e1e68e8f1ea1fe4?v=49c7d5e3f23f482fb6448a7c03c66ada">
          Learnings from working at Warp
        </Link>
      </li>
      <li>
        <Link href="https://www.michigandaily.com/campus-life/student-run-studybuddies-site-helps-students-connect-virtual-classes/">
          StudyBuddies in the Michigan Daily
        </Link>
      </li>
      <li>
        <Link href="https://youtu.be/Cd_nKLzmCuA">So many cats in Greece</Link>
      </li>
      <li>
        <Link href="https://youtu.be/jIC0aW7ZR9o">Living like a monk for 10 days</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
