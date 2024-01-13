import Image, { ImageProps } from 'next/image';

import { cn } from '@/utils/cn';

export const CardThumbnail = (props: ImageProps) => {
  return (
    <Image
      className={cn(
        'w-4/5 mt-5 rounded-md shadow-lg transition duration-300',
        'grayscale-[.2] hover:grayscale-0',
        'hover:scale-110 hover:translate-x-4 hover:-translate-y-1'
      )}
      {...props}
    />
  );
};
