import Link from "next/link";

import Layout from "../../components/ui/Layout";
import layoutStyles from "../../components/ui/Layout/Layout.module.css";
import { getAllWritingPosts, WritingPostListItem } from "../../utils/writing";
import styles from "./writing.module.css";

type Props = {
  posts: WritingPostListItem[];
};

const WritingIndexPage = ({ posts }: Props) => {
  return (
    <Layout title="Writing | Varun Jindal" description="Writing by Varun Jindal">
      <div className={layoutStyles.heroContent}>
        <h1>Writing</h1>
        <p className="tagline">Notes, thoughts, and ideas</p>
      </div>

      <div className="stitch-divider stitch-divider--offset-left" style={{ marginTop: 48 }} />

      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.postItem}>
            <Link href={`/writing/${post.slug}`} className={styles.postLink}>
              <span className={styles.postTitle}>{post.title}</span>
              <span className={styles.postDate}>{post.date}</span>
            </Link>
            {post.description && (
              <p className={styles.postDescription}>{post.description}</p>
            )}
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="text-muted" style={{ fontStyle: "italic" }}>
          Coming soon...
        </p>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllWritingPosts();
  return { props: { posts } };
}

export default WritingIndexPage;
