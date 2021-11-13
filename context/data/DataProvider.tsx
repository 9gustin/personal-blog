import React from "react";
import user from "../../config/user";
import { Page } from "../../types/page";

import DataContext from "./DataContext";

const wantedProps = [ 'title', 'description', 'release_date', 'keywords' ];

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
    wantedProps.forEach(prop => {

      if (page.properties?.[prop]) {
        data[prop] = page.properties[prop][page.properties[prop].type]?.[0]?.plain_text;
      }
    })
  }

  return data;
}

const DataProvider = ({ children }) => {
  const [page, setPage] = React.useState<Page | null>(null);

  const pageMetaData = React.useMemo(() => getPageMetaData(page), [page])

  const pageData = React.useMemo(() => {
    if (!page) return null;

    const newPage = {
      id: page.id,
      title: '',
      emoji: page.icon.emoji || user.emoji,
      image:  user.mainImagePath,
    };

    wantedProps.forEach(prop => {
      if (page.properties[prop]) {
        newPage[prop] = page.properties[prop][page.properties[prop].type]?.[0]?.plain_text;
      }
    })

    return newPage;
  }, [page])

  return (
    <DataContext.Provider value={{pageData, setPage, pageMetaData}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
