import GithubLogo from '@/app/assets/icons/github-logo.svg';
import LinkedInLogo from '@/app/assets/icons/linked-in-logo.svg';
import Pen from '@/app/assets/icons/pen.svg';
import { NewTabAnchor } from '@/app/components/NewTabAnchor';

type SocialGroupProps = {
  githubUrl: string;
  blogUrl: string;
  linkedInUrl: string;
};

export const SocialGroup = ({
  githubUrl,
  blogUrl,
  linkedInUrl,
}: SocialGroupProps) => {
  return (
    <div className="flex gap-3">
      <NewTabAnchor href={githubUrl}>
        <GithubLogo className="w-5 h-5 text-gray-600 transition hover:text-[#171515] hover:scale-125" />
      </NewTabAnchor>
      <NewTabAnchor href={blogUrl}>
        <Pen className="w-5 h-5 text-gray-600 transition hover:text-[#aa0000] hover:scale-125" />
      </NewTabAnchor>
      <NewTabAnchor href={linkedInUrl}>
        <LinkedInLogo className="w-5 h-5 text-gray-600 transition hover:text-[#0077b5] hover:scale-125" />
      </NewTabAnchor>
    </div>
  );
};
