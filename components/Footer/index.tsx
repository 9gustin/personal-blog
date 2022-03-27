import React, { useState } from "react";
import user from "../../config/user";
import useDataContext from "../../context/data/useDataContext";
import { GrSend } from "react-icons/gr";

import styles from "./styles.module.scss";

var headers = new Headers();
headers.append("Content-Type", "application/json");

function Footer() {
  const [commented, setCommented] = useState(false);
  const { pageData } = useDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const comment = e.target.comment.value.trim();
    const reference = pageData?.title ?? location.href;

    if (comment) {
      fetch("/api/comments", {
        method: "POST",
        headers,
        body: JSON.stringify({
          comment,
          reference,
        }),
      }).finally(() => {
        e.target.comment.value = "";
        setCommented(true);
      });
    }
  };

  return (
    <footer className={styles.footer}>
      {commented ? (
        <p>Gracias {"<3"}</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.comments}>
          <label htmlFor="comment">
            Contame, que tal te parecio? Es anonimo y me ayudas a mejorar ;)
          </label>
          <textarea name="comment" />
          <button type="submit">
            <GrSend />
          </button>
        </form>
      )}
      <ul className={styles.links}>
        {user.links.map(({ name, url, icon }) => (
          <li key={name} className={styles.icon}>
            {url ? (
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            ) : (
              icon
            )}
          </li>
        ))}
      </ul>
      <h1 className={styles.title}>{user.title}</h1>
    </footer>
  );
}

export default Footer;
