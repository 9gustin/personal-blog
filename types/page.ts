import { NotionBlock, Text } from "@9gustin/react-notion-render";

enum coverType {
  EXTERNAL = 'external'
}

enum propType {
  RICH_TEXT = 'rich_text',
  TITLE = 'title'
}

export interface Page {
  id: string;
  title?: string;
  cover: {
    type: coverType;
    [coverType.EXTERNAL]: {
      url: string
    }
  };
  icon: {
    type: 'emoji';
    emoji: string;
  }
  blocks: NotionBlock[];
  properties: Record<string, {
    id: string;
    type: propType;
    [propType.RICH_TEXT]: Text[];
    [propType.TITLE]: Text[];
  }>;
}
