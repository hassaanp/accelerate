import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
  ArrowLeftCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  GlobeAltIcon,
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
          Open Source Software Contributions
        </h1>
        <p className="mt-6 text-xl leading-8">
          Contributing to open source software projects can provide a valuable
          learning experience for remote developers. It allows developers to
          work collaboratively and asynchronously with others while contributing
          to a common goal. Contributing to open source software projects can
          provide a real-world remote software development experience by
          teaching developers best practices for asynchronous communication,
          collaborating with a globally-distributed team, and using tools that
          are commonly used in remote work settings. Additionally, contributing
          to well-moderated open source projects can help developers gain
          recognition in the industry, build their portfolio, and make
          connections with other developers.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Contributing to open source software projects can help remote
            developers improve their skills and gain experience in several key
            areas, including:
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Key Areas for Open Source Software Contributions
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CodeBracketIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Technical Skills.
                </strong>{' '}
                Contributing to open source software projects can help
                developers improve their technical skills in areas such as
                coding, testing, and debugging.
              </span>
            </li>
            <li className="flex gap-x-3">
              <GlobeAltIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Global Collaboration.
                </strong>{' '}
                Contributing to open source software projects provides an
                opportunity to collaborate with developers from around the
                world, helping remote developers to learn about different
                cultures and working styles.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ChatBubbleLeftEllipsisIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Asynchronous Communication.
                </strong>{' '}
                Contributing to open source software projects can teach
                developers best practices for asynchronous communication,
                including communicating through text-based mediums like email,
                chat, and issue trackers
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            Open-source software contributions can provide valuable experience
            for remote software engineers, allowing them to gain experience in
            best practices, asynchronous communication, and collaboration. By
            contributing to well-moderated open-source projects, developers can
            gain real-world experience in remote software development, honing
            their skills and preparing them for success in remote work
            environments. Additionally, AI-powered collaboration and
            personalization tools can help remote teams work more efficiently
            and effectively, leading to improved productivity and job
            satisfaction. As remote work becomes more prevalent, it is important
            for professionals to leverage the power of AI and open source
            software contributions to maximize their success in remote work
            environments.
          </p>
        </div>
      </div>
      <NextButton path="/core/community_contributions_and_milestones" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
