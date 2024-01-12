type NavigationLinkProps = {
  href: string;
  title: string;
};

export const NavigationLink = ({ href, title }: NavigationLinkProps) => {
  return (
    <a href={href} className="hover:text-blue-600">
      {title}
    </a>
  );
};
