import React from "react";
import "@9gustin/react-notion-render/dist/index.css";

import LayoutWrapper from "../components/LayoutWrapper";
import "../styles/globals.scss";
import DataProvider from "../context/data/DataProvider";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
