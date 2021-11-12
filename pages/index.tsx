import React from "react";

import {IS_DEV} from "../utils/isDev";
import PostList from "../components/PostList";
import { DATABASE_MOCK } from "../mocks/getDatabaseResponse";
import { getDatabase } from "../services/notion";
import styles from "./index.module.scss";
import LayoutWrapper from "../components/LayoutWrapper";

export default function Home({ posts }) {
  return (
    <LayoutWrapper page={undefined}>
      <h2 className={styles.heading}>Publicaciones</h2>
      <PostList posts={posts} />
    </LayoutWrapper>
  );
}

export const getStaticProps = async () => {
  const database = IS_DEV ? DATABASE_MOCK : await getDatabase();

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
