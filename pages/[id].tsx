import React from "react";
import { indexGenerator, Render } from "@9gustin/react-notion-render";

import ArticleWrapper from "../components/ArticleWrapper";
import useDataContext from "../context/data/useDataContext";
import { DATABASE_MOCK } from "../mocks/getDatabaseResponse";
import { PAGEDATA_MOCK } from "../mocks/pageDataResponse";
import { getBlocks, getDatabase, getPage } from "../services/notion";
import { Page } from "../types/page";

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
    <ArticleWrapper
      title={"MOCK TITLE"}
      index={indexGenerator(page.blocks)}
    >
      <Render blocks={page.blocks} useStyles classNames />
    </ArticleWrapper>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase()
  // const database = DATABASE_MOCK;
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  // const page = PAGEDATA_MOCK;

  const page = await getPage(id);
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

  const pageData = {
    ...page,
    blocks: blocksWithChildren
  }

  return {
    props: {
      page: pageData,
    },
    revalidate: 1,
  };
};
