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

function ArticleWrapper({ title, children, index }: Props) {
  return (
    <main>
      <article>
        <h1>{title}</h1>
        <section>{children}</section>
      </article>
      <TableOfContents index={index}/>
      <Link href="/">
        <a className={styles["go-back"]}>Volver</a>
      </Link>
    </main>
  );
}

export default ArticleWrapper;
