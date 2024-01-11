import GithubLogo from '@/app/assets/github-logo.svg';
import LinkedInLogo from '@/app/assets/linked-in-logo.svg';
import Pen from '@/app/assets/pen.svg';

const Home = () => {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-5xl font-bold text-gray-900">박용준</h1>
      <p className="text-xl text-gray-900">프론트엔드 개발자</p>
      <div className="text-gray-600 text-sm">
        <p>yopark.dev@gmail.com</p>
        <p>010-2533-6357</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3">
        <a
          href="https://github.com/yoopark"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubLogo className="w-5 h-5 text-gray-600" />
        </a>
        <a
          href="https://blog.yopark.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Pen className="w-5 h-5 text-gray-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/yopark-dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInLogo className="w-5 h-5 text-gray-600" />
        </a>
      </div>
    </header>
  );
};

export default Home;
