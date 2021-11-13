import React from "react";
import user from "../../config/user";
import { Page } from "../../types/page";

import DataContext from "./DataContext";

const wantedProps = [ 'title', 'description', 'release_date', 'keywords' ];

export const getPageProps = (page: Page) => {
  const data = {
    title: page.properties.Name.title[0].plain_text
  }

  wantedProps.forEach(prop => {
    const propName = page.properties[prop]?.type

    if (propName) {
      const value = page.properties?.[prop][propName]?.[0]?.plain_text;
      if (value) {
        data[prop] = value;
      }
    }
  })

  return data
}

export const getPageMetaData = (page: Page) => {
  let data = {
    title: `${user.mainTitle}${user.pageTitle}`,
    description: user.description,
    url: user.url,
    image:  user.mainImagePath,
    keywords: user.keywords,
    icon: user.favicon,
    emoji: user.emoji
  }

  if (page) {
    if(page.cover?.[page.cover.type]) {
      data.image = page.cover[page.cover.type].url;
    }
    const newProps = getPageProps(page)
    data = {...data, ...newProps}
  }

  return data;
}

const DataProvider = ({ children }) => {
  const [page, setPage] = React.useState<Page | null>(null);

  const pageMetaData = React.useMemo(() => getPageMetaData(page), [page])

  const pageData = React.useMemo(() => {
    if (!page) return null;

    let newPage = {
      id: page.id,
      title: '',
      emoji: page.icon?.emoji || user.emoji,
      image:  user.mainImagePath,
      blocks: page.blocks
    };

    const newProps = getPageProps(page)
    newPage = {...newPage, ...newProps}

    return newPage;
  }, [page])

  return (
    <DataContext.Provider value={{pageData, setPage, pageMetaData}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
