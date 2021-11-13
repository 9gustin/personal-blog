import React from "react";
import Link from "next/link";

import TableOfContents from "../TableOfContents";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

function ArticleWrapper({ children }: Props) {
  return (
    <>
      <article className={styles.article}>
        <section>{children}</section>
      </article>
      <TableOfContents className={styles.contents} />
      <Link href="/">
        <a className={styles["go-back"]}>Volver</a>
      </Link>
    </>
  );
}

export default ArticleWrapper;
