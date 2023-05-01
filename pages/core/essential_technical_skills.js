import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
  ArrowLeftCircleIcon,
  BeakerIcon,
  ChatBubbleBottomCenterIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/20/solid';
import NextButton from '@/components/nextButton';

export default function Page() {
  const router = useRouter();
  return (
    <div className="bg-white px-6 py-8 lg:px-8">
      <div className="py-4">
        <span
          className="inline-flex items-center hover:cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeftCircleIcon className="h-6 w-6" />
          <p className="pl-2">Back</p>
        </span>
      </div>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Introducing
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Essential Technical Skills for Remote Developers
        </h1>
        <p className="mt-6 text-xl leading-8">
          In a remote work environment, software engineers need to possess
          essential technical skills to build, test, and maintain software
          effectively. These skills include programming, version control,
          configuration management, and unit testing.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            As the software industry evolves and remote work becomes more
            common, it is crucial for developers to have a strong foundation in
            essential technical skills. These skills enable them to work
            effectively and contribute to the success of their teams, regardless
            of their physical location. Some of the core technical skills
            required for remote developers include:
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Key Technical Skills for Remote Developers
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CodeBracketIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Programming.
                </strong>{' '}
                Proficiency in programming languages and frameworks, along with
                the ability to learn new technologies, is essential for remote
                developers.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ComputerDesktopIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Version Control.
                </strong>{' '}
                Familiarity with version control systems like Git enables
                developers to collaborate effectively, track changes, and
                resolve conflicts in code.
              </span>
            </li>
            <li className="flex gap-x-3">
              <Cog6ToothIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Configuration Management.
                </strong>{' '}
                Understanding configuration management tools, such as Ansible or
                Terraform, allows developers to automate the deployment and
                configuration of software systems.
              </span>
            </li>
            <li className="flex gap-x-3">
              <BeakerIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Unit Testing and Debugging.
                </strong>{' '}
                Proficiency in writing and executing unit tests, as well as the
                ability to identify and fix bugs, helps remote developers ensure
                the quality and reliability of their software.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ChatBubbleBottomCenterIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Collaboration Tools.
                </strong>{' '}
                Familiarity with collaboration tools like Jira, Trello, or
                GitHub allows remote developers to work effectively with their
                teams and manage tasks efficiently.
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            The success of remote developers relies on their mastery of
            essential technical skills, including programming, version control,
            configuration management, and unit testing. These skills enable them
            to work effectively and contribute to the success of their teams,
            regardless of their physical location. Additionally, familiarity
            with collaboration tools is crucial for seamless communication and
            task management within remote teams. As remote work continues to
            grow in popularity, it is essential for software engineers to
            develop these core technical skills to stay competitive and adapt to
            the evolving landscape of the software industry.
          </p>
        </div>
      </div>
      <NextButton path="/core/essential_soft_skills" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
