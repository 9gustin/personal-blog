import React from "react";
import user from "../../config/user";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {user.links.map(({ name, url, icon }) => (
          <li key={name} className={styles.icon}>
            {
              url ? 
                <a href={url}>{icon}</a> 
                : icon
            }
          </li>
        ))}
      </ul>
      <h1 className={styles.title}>{user.title}</h1>
    </footer>
  );
}

export default Footer;
