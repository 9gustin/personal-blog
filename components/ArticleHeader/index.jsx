import React from 'react'
import Link from "next/link";

import ThemeToggler from '../ThemeToggler'
import { PATHS } from '../../config/paths';

import styles from './styles.module.scss'
import useDataContext from '../../context/data/useDataContext';
import user from '../../config/user';

function ArticleHeader() {
  const {pageData} = useDataContext();

  if (!pageData) {
    return <>Cargando...</>;
  }

  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <img src={pageData.image} alt="Page cover image"/>
      </div>
      {pageData.emoji && <span className={styles.emoji}>{pageData.emoji}</span>}
      <ThemeToggler className={styles.toggler} />
      <h1>{pageData.title}</h1>
      <Link href={PATHS.home}>
        <a className={styles.byMe}>por {user.title}</a>
      </Link>
    </header>
  )
}

export default ArticleHeader
