export type SubDescription = {
  emoji: string;
  text: string;
};

export type LinkType = 'video' | 'article' | 'file' | 'link';

export type LinkDescription = {
  href: string;
  text: string;
  type: LinkType;
};
