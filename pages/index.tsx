import React from "react";

import { IS_DEV } from "../utils/isDev";
import { validatePage } from "../utils/validatePage";
import PostList from "../components/PostList";
import { DATABASE_MOCK } from "../mocks/getDatabaseResponse";
import { getDatabase } from "../services/notion";
import styles from "./index.module.scss";
import LayoutWrapper from "../components/LayoutWrapper";
import { getPageProps } from "../context/data/DataProvider";

export default function Home({ posts }) {
  return (
    <LayoutWrapper page={undefined}>
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
  }).filter(validatePage).sort(function(postA,postB){
    return new Date(postB.release_date ?? postB.last_edited_time).getTime() - new Date(postA.release_date ?? postA.last_edited_time).getTime();
  });

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
