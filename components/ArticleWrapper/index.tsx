import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import TableOfContents from "../TableOfContents";
import { blockEnum, Text } from "@9gustin/react-notion-render";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  index: {
    id: string;
    type: blockEnum;
    text: Text[];
    plainText: string;
  }[];
}

function ArticleWrapper({ children, index }: Props) {
  return (
    <>
      <article className={styles.article}>
        <section>{children}</section>
      </article>
      <TableOfContents index={index} className={styles.contents} />
      <Link href="/">
        <a className={styles["go-back"]}>Volver</a>
      </Link>
    </>
  );
}

export default ArticleWrapper;
