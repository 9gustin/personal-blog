import React from "react";

import { IS_DEV } from "../utils/isDev";
import { validatePage } from "../utils/validatePage";
import PostList from "../components/PostList";
import { DATABASE_MOCK } from "../mocks/getDatabaseResponse";
import { getDatabase } from "../services/notion";
import styles from "./index.module.scss";
import LayoutWrapper from "../components/LayoutWrapper";
import { getPageProps } from "../context/data/DataProvider";
import { dateToString } from "../utils/dateToString";

export default function Home({ posts, nextRelease }) {
  return (
    <LayoutWrapper page={undefined}>
      {nextRelease && (
        <p className={styles.nextRelease}>Proxima publicación: {dateToString(nextRelease, true)}</p>
      )}
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
  })

  const nextRelease = database
  .filter(({release_date, visible}) => visible && new Date(release_date) > new Date())
  .sort(function(postA,postB){
    return new Date(postA.release_date ?? postA.last_edited_time).getTime() - new Date(postB.release_date ?? postB.last_edited_time).getTime();
  })?.[0]?.release_date ?? null;

  const posts = database.filter(validatePage).sort(function(postA,postB){
    return new Date(postB.release_date ?? postB.last_edited_time).getTime() - new Date(postA.release_date ?? postA.last_edited_time).getTime();
  });

  return {
    props: {
      posts,
      nextRelease
    },
    revalidate: 1,
  };
};
