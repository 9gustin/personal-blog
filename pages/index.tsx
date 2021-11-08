import React from "react";
import HtmlHead from "../components/HtmlHead";
import PostList from "../components/PostList";
import { DATABASE_MOCK } from "../mocks/getDatabaseResponse";
import { getDatabase } from "../services/notion";
import styles from "./index.module.scss";

export default function Home({ posts }) {
  return (
    <>
      <h2 className={styles.heading}>Publicaciones</h2>
      <PostList posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  // const database = await getDatabase();
  const database = DATABASE_MOCK

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
