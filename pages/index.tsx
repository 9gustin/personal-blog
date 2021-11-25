import React from "react";

import { IS_DEV } from "../utils/isDev";
import PostList from "../components/PostList";
import { DATABASE_MOCK } from "../mocks/getDatabaseResponse";
import { getDatabase } from "../services/notion";
import styles from "./index.module.scss";
import LayoutWrapper from "../components/LayoutWrapper";
import { getPageProps } from "../context/data/DataProvider";

export default function Home({ posts }) {
  return (
    <LayoutWrapper page={undefined}>
      {/* TODO: Delete that */}
      <p className={styles.alert}>
        Actualmente me estoy tomando un descansito, pero pasate en el 2022 para
        nuevas publicaciones ;)
      </p>
      <h2 className={styles.heading}>Publicaciones</h2>
      <PostList posts={posts} />
    </LayoutWrapper>
  );
}

export const getStaticProps = async () => {
  let database = IS_DEV ? (DATABASE_MOCK as any[]) : await getDatabase();
  database = database.map((page) => {
    return {
      ...page,
      ...getPageProps(page),
    };
  });

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
