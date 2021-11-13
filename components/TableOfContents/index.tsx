import { blockEnum, indexGenerator, rnrSlugify } from "@9gustin/react-notion-render";
import React from "react";
import useDataContext from "../../context/data/useDataContext";

import styles from './styles.module.scss'

interface Props {
  className?: string;
}

function TableOfContents({ className }: Props) {
  const {pageData} = useDataContext()

  const index = React.useMemo(() => indexGenerator(pageData?.blocks), [pageData?.blocks])

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
