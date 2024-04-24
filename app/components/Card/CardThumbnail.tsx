import Image, { ImageProps } from 'next/image';

export const CardThumbnail = (props: ImageProps) => {
  return (
    <Image
      className="w-full mt-5 rounded-md shadow-lg select-none"
      {...props}
    />
  );
};
