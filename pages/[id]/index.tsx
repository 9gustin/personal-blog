import {
  indexGenerator,
  Render,
} from "@9gustin/react-notion-render";

import ArticleWrapper from "../../components/ArticleWrapper";
import { getDatabase } from "../../services/notion";
import { Page } from "../../types/page";

import { getPageData } from "./constants";

interface Props {
  page: Page;
}

export default function Post({ page }: Props) {
  if (!page) {
    return <div />;
  }

  return (
    <ArticleWrapper
      title={<Render blocks={[page.properties.Name]} />}
      index={indexGenerator(page.blocks)}
    >
      <Render blocks={page.blocks} useStyles classNames />
    </ArticleWrapper>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase()
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPageData(id);

  return {
    props: {
      page,
    },
    revalidate: 1,
  };
};
