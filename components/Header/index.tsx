import React from "react";
import Link from "next/link";

import { PATHS } from "../../config/paths";

import ThemeToggler from "../ThemeToggler";

import styles from "./styles.module.css";

interface Props {
  title: React.ReactNode;
  className?: string;
  description?: React.ReactNode;
}

function Header({ className, title, description }: Props) {
  return (
    <header className={`${styles.header} ${className || ""}`}>
      <h1>
        <Link href={PATHS.home} className={styles.title}>
          {title}
        </Link>
      </h1>
      <ThemeToggler />
      {description && description}
    </header>
  );
}

export default Header;
