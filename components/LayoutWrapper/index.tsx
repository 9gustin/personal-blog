import React, { useLayoutEffect } from "react";

import { withRouter } from "next/router";
import Header from "../Header";
import ArticleHeader from "../ArticleHeader";
import { PATHS } from "../../config/paths";

import styles from "./styles.module.css";
import user from "../../config/user";
import Footer from "../Footer";
import HtmlHead from "../HtmlHead";

function LayoutWrapper({ router, children, page }) {
  useLayoutEffect(() => {
    if (user.theme) document.body.classList.add(`${user.theme}-theme`);
  }, []);

  return (
    <>
      <HtmlHead page={page} />
      <Header
        title={user.title}
        className={styles["adjust-content"]}
        description={
          router.pathname === PATHS.home ? user.richDescription : undefined
        }
      />
      {/* TODO: Integrate new article header */}
      {/* {
        router.pathname === PATHS.home ? (
          <Header
          title={user.title}
          className={styles["adjust-content"]}
          description={router.pathname === PATHS.home ? user.richDescription : undefined}
        />
        ) : (
          <ArticleHeader />
        )
      } */}
      <main className={`${styles["adjust-content"]} ${styles.main}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default withRouter(LayoutWrapper);
