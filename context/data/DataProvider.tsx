import React from "react";
import user from "../../config/user";
import { Page } from "../../types/page";

import DataContext from "./DataContext";

const DataProvider = ({ children }) => {
  const [page, setPage] = React.useState<Page | null>(null);

  const pageMetaData = React.useMemo(() => {
    const data = {
      title: `${user.mainTitle}${user.pageTitle}`,
      description: user.description,
      url: user.url,
      image:  user.mainImagePath,
      keywords: user.keywords,
      icon: user.favicon
    }

    if (page) {
      // TODO: Add custom title, description, url, image and keywords
    }

    return data;
  }, [page])

  return (
    <DataContext.Provider value={{page, setPage, pageMetaData}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
