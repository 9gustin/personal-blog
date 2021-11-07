import { NotionBlock } from "@9gustin/react-notion-render";

export interface Page {
  id: string;
  blocks: NotionBlock[];
  properties: Record<string, NotionBlock>;
}
