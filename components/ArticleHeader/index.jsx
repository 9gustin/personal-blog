import React from 'react'
import Link from "next/link";
import Image from 'next/image';

import ThemeToggler from '../ThemeToggler'
import { PATHS } from '../../config/paths';

import styles from './styles.module.scss'

function ArticleHeader({ image, emoji, title }) {
  return (
    <header className={styles.header}>
      <Image src={image} alt="lorem"/>
      {emoji && <span>{emoji}</span>}
      <ThemeToggler className={styles.toggler} />
      <h1>{title}</h1>
      <Link href={PATHS.home}>
        <a className={styles.byMe}>by 9gustin</a>
      </Link>
    </header>
  )
}

export default ArticleHeader
