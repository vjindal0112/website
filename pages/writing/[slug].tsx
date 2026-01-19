import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/ui/Layout";
import { getAllWritingSlugs, getWritingPostBySlug, WritingPost } from "../../utils/writing";
import styles from "./writing.module.css";

const SITE_URL = "https://varunjindal.com";

type Props = {
  post: WritingPost;
};

const WritingPostPage = ({ post }: Props) => {
  const postUrl = `/writing/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Varun Jindal",
      url: SITE_URL,
    },
    datePublished: post.date,
    url: `${SITE_URL}${postUrl}`,
    ...(post.image && { image: `${SITE_URL}${post.image}` }),
    publisher: {
      "@type": "Person",
      name: "Varun Jindal",
    },
  };

  return (
    <Layout
      title={`${post.title} | Writing`}
      description={post.description}
      image={post.image}
      url={postUrl}
      type="article"
      publishedTime={post.date}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <article className={styles.article}>
        <Link href="/writing" className={styles.backLink}>
          Back to Writing
        </Link>

        <header className={styles.articleHeader}>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          <p className={styles.articleDate}>{post.date}</p>
        </header>

        <div className="stitch-divider stitch-divider--offset-left" />

        <div
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllWritingSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  const post = await getWritingPostBySlug(slug);
  return { props: { post } };
};

export default WritingPostPage;
