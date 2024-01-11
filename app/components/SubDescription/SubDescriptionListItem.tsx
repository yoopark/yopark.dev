import { EmojiOnHover } from '@/app/components/EmojiOnHover';
import type { SubDescription } from '@/app/types/description';

type SubDescriptionListItemProps = {
  subDescription: SubDescription;
};

export const SubDescriptionListItem = ({
  subDescription,
}: SubDescriptionListItemProps) => {
  return (
    <li className="text-sm text-gray-700 w-max">
      <EmojiOnHover emoji={subDescription.emoji} spacing={2}>
        {subDescription.text}
      </EmojiOnHover>
    </li>
  );
};
