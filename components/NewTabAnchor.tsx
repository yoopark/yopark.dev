type NewTabAnchorProps = {
  href: string;
} & React.PropsWithChildren;

export const NewTabAnchor = ({ href, children }: NewTabAnchorProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
};
