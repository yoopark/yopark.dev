import { LinkType } from '@/types/description';

export const getEmojiByLinkType = (type: LinkType) => {
  switch (type) {
    case 'video':
      return '🎥';
    case 'article':
      return '📄';
    default:
      throw new Error(`Unknown link type: ${type}`);
  }
};
