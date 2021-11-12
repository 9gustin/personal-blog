import React from "react";
import { indexGenerator, Render } from "@9gustin/react-notion-render";

import {IS_DEV} from "../utils/isDev";
import ArticleWrapper from "../components/ArticleWrapper";
import useDataContext from "../context/data/useDataContext";
import { DATABASE_MOCK } from "../mocks/getDatabaseResponse";
import { PAGEDATA_MOCK } from "../mocks/pageDataResponse";
import { getBlocks, getDatabase, getPage } from "../services/notion";
import { Page } from "../types/page";
import LayoutWrapper from "../components/LayoutWrapper";

interface Props {
  page: Page;
}

export default function Post({ page }: Props) {
  const { setPage } = useDataContext();

  React.useEffect(() => setPage(page), [page, setPage]);

  if (!page) {
    return <div />;
  }

  return (
    <LayoutWrapper page={page}>
      <ArticleWrapper
        title={"MOCK TITLE"}
        index={indexGenerator(page.blocks)}
      >
        <Render blocks={page.blocks} useStyles classNames />
      </ArticleWrapper>
    </LayoutWrapper>
  );
}

export const getStaticPaths = async () => {
  const database = IS_DEV ? DATABASE_MOCK : await getDatabase();
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page: any = IS_DEV ? PAGEDATA_MOCK : await getPage(id);

  if (!IS_DEV) {
    const blocks = await getBlocks(id);

    const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await getBlocks(block.id),
          };
        })
    );
  
    const blocksWithChildren = blocks.map((block) => {
      // Add child blocks if the block should contain children but none exists
      if (block.has_children && !block[block.type].children) {
        block[block.type]["children"] = childBlocks.find(
          (x) => x.id === block.id
        )?.children;
      }
      return block;
    });

    page.blocks = blocksWithChildren;
  }
  
  return {
    props: {
      page: page,
    },
    revalidate: 1,
  };
};
