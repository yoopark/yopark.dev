type HighlightProps = React.PropsWithChildren;

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="relative w-max after:contents-[''] after:bottom-1 after:left-0 after:w-0 hover:after:w-full after:h-1/3 after:absolute after:bg-yellow-300 after:-z-10 after:transition-all after:duration-300">
      {children}
    </span>
  );
};
