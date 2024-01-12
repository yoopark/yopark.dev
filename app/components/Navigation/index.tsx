import { NavigationLink } from '@/app/components/Navigation/NavigationLink';
import type { NavigationLinkType } from '@/types/navigation';

type NavigationProps = {
  links: NavigationLinkType[];
};

// FIXME: 2-depth 까지만 지원
export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav>
      <ul className="flex flex-col gap-1 font-semibold">
        {links.map((link) => (
          <li>
            <NavigationLink href={link.href} title={link.title} />
            {link.links !== undefined && (
              <ul className="text-xs font-normal text-gray-500 list-disc list-inside">
                {link.links.map((subLink) => (
                  <li>
                    <NavigationLink href={subLink.href} title={subLink.title} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
