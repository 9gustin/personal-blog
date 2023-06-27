import React from "react";
import Link from "next/link";

import TableOfContents from "../TableOfContents";
import headerStyles from "../ArticleHeader/styles.module.scss";

import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const MIN_SCROLL_VALUE = 30;

function ArticleWrapper({ children }: Props) {
  const headerHeight = Number(
    headerStyles.headerHeightDesktop.replace("px", "")
  );
  const [scroll, setScroll] = React.useState(headerHeight);

  React.useEffect(() => {
    if (!global.window) return;

    window.addEventListener("scroll", () => {
      const calc = headerHeight - global.window.scrollY;

      setScroll(calc > MIN_SCROLL_VALUE ? calc : MIN_SCROLL_VALUE);
    });
  }, [headerHeight]);

  return (
    <>
      <article className={styles.article}>
        <section>{children}</section>
      </article>
      <TableOfContents className={styles.contents} scrollPosition={scroll} />
      <Link href="/" className={styles["go-back"]}>
        Volver
      </Link>
    </>
  );
}

export default ArticleWrapper;
