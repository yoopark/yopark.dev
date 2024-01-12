import { EmojiOnHover } from '@/components/EmojiOnHover';
import type { SubDescription } from '@/types/description';

type SubDescriptionListItemProps = {
  subDescription: SubDescription;
};

export const SubDescriptionListItem = ({
  subDescription,
}: SubDescriptionListItemProps) => {
  return (
    <li className="text-sm text-gray-700">
      <EmojiOnHover emoji={subDescription.emoji} spacing={2}>
        {subDescription.text}
      </EmojiOnHover>
    </li>
  );
};
