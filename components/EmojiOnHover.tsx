'use client';

import { useState } from 'react';

import { cn } from '@/utils/cn';

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
