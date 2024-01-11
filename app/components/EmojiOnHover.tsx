'use client';

import { cn } from '@/app/utils/cn';
import { useState } from 'react';

type EmojiOnHoverProps = {
  emoji: string;
  spacing?: number;
} & React.PropsWithChildren;

export const EmojiOnHover = ({
  emoji,
  children,
  spacing = 0,
}: EmojiOnHoverProps) => {
  const [isHover, setIsHover] = useState(false);

  const spacingStr = Array.from({ length: spacing }, () => '\u00A0').join('');

  return (
    <span
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className={cn('transition', isHover && 'text-blue-600')}>
        {children}
      </span>
      {isHover && (
        <span>
          {spacingStr}
          {emoji}
        </span>
      )}
    </span>
  );
};
