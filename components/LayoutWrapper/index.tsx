import React, { useLayoutEffect } from "react";

import { withRouter } from "next/router";
import Header from "../Header";
import { PATHS } from "../../config/paths";

import styles from "./styles.module.css";
import user from "../../config/user";
import Footer from "../Footer";

function LayoutWrapper({ router, children }) {
  useLayoutEffect(() => {
    if (user.theme) document.body.classList.add(`${user.theme}-theme`);
  }, []);

  return (
    <>
      <Header
        title={user.title}
        className={styles["adjust-content"]}
        description={router.pathname === PATHS.home ? user.description : undefined}
      />
      <main className={styles["adjust-content"]}>{children}</main>
      <Footer />
    </>
  );
}

export default withRouter(LayoutWrapper);
