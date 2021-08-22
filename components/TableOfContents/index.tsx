import { blockEnum, rnrSlugify, Text } from "@9gustin/react-notion-render";
import React from "react";

interface Props {
  index: {
    id: string;
    type: blockEnum;
    text: Text[];
    plainText: string;
  }[];
}

function TableOfContents({ index }: Props) {
  return (
    <aside>
      <h4>Contenido del articulo</h4>
      <ul>
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
