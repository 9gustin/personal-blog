import { blockEnum, rnrSlugify, Text } from "@9gustin/react-notion-render";
import React from "react";

import styles from './styles.module.scss'

interface Props {
  className?: string;
  index: {
    id: string;
    type: blockEnum;
    text: Text[];
    plainText: string;
  }[];
}

function TableOfContents({ index, className }: Props) {
  return (
    <aside className={className}>
      <h4>Contenido del articulo</h4>
      <ul className={styles.list}>
        {index.filter(item => item.type === blockEnum.HEADING2).map(({ id, plainText, type }) => (
          <li key={id} className={type}>
            <a href={`#${rnrSlugify(plainText)}`}>{plainText}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default TableOfContents;
