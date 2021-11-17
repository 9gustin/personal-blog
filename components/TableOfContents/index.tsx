import { blockEnum, indexGenerator, rnrSlugify } from "@9gustin/react-notion-render";
import React from "react";
import useDataContext from "../../context/data/useDataContext";

import styles from './styles.module.scss'

interface Props {
  className?: string;
  scrollPosition?: number;
}

function TableOfContents({ className, scrollPosition }: Props) {
  const {pageData} = useDataContext()

  const index = React.useMemo(() => pageData ? indexGenerator(pageData.blocks) : [], [pageData])

  const styleProps = scrollPosition ? {marginTop: `${scrollPosition}px`} : {}

  return (
    <aside className={className} style={styleProps}>
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
