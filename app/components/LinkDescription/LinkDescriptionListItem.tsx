import { getEmojiByLinkType } from '@/app/components/LinkDescription/utils/getEmojiByLinkType';
import type { LinkDescription } from '@/app/types/description';

type LinkDescriptionListItemProps = {
  linkDescription: LinkDescription;
};

export const LinkDescriptionListItem = ({
  linkDescription,
}: LinkDescriptionListItemProps) => {
  const emoji = getEmojiByLinkType(linkDescription.type);

  return (
    <li className="text-sm text-blue-800 w-max hover:text-blue-600 hover:underline">
      <a href={linkDescription.href} target="_blank" rel="noreferrer">
        {emoji} {linkDescription.text}
      </a>
    </li>
  );
};
