export type SubDescription = {
  emoji: string;
  text: string;
};

export type LinkType = 'video' | 'article';

export type LinkDescription = {
  href: string;
  text: string;
  type: LinkType;
};
