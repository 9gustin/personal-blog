import React from "react";

import DataContext from "./DataContext";

function useDataContext() {
  const context = React.useContext(DataContext);

  if (context === null) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
}

export default useDataContext;
