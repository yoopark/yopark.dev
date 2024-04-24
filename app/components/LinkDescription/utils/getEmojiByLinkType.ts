import { LinkType } from '@/types/description';

export const getEmojiByLinkType = (type: LinkType) => {
  switch (type) {
    case 'video':
      return '🎥';
    case 'article':
      return '📄';
    case 'file':
      return '📎';
    case 'link':
      return '🚀';
    default:
      throw new Error(`Unknown link type: ${type}`);
  }
};
