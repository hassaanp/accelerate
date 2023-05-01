import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
  ArrowLeftCircleIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
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
          Community Contributions and Milestones for Remote Developers
        </h1>
        <p className="mt-6 text-xl leading-8">
          Participating in the community of active remote developers can help
          you gain new perspectives, learn tips and tricks, network, and get
          access to remote work opportunities. Community contributions and
          milestones can help remote developers showcase their skills and
          knowledge, collaborate with other developers, and gain recognition for
          their work. By sharing knowledge and experiences, remote developers
          can stay current on the latest trends and best practices in their
          field, and develop their careers in the direction they want.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Participating in the remote development community offers a range of
            benefits for developers, including:
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Benefits of Community Contributions and Milestones
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <BookmarkIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Access to Remote Work Opportunities.
                </strong>{' '}
                By contributing to the community, remote developers can gain
                access to job openings, learn about upcoming projects, and get
                connected with other professionals in their field.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ChatBubbleBottomCenterTextIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Collaboration and Networking.
                </strong>{' '}
                Community contributions and milestones offer opportunities for
                remote developers to collaborate on projects, connect with other
                professionals, and build their network in the industry.
              </span>
            </li>
            <li className="flex gap-x-3">
              <SparklesIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Skill Development.
                </strong>{' '}
                By engaging with the community and sharing knowledge, remote
                developers can learn new skills, stay current on the latest
                trends, and develop their careers in the direction they want.
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            Engaging with the remote developer community can be a valuable tool
            for gaining perspective, learning tips and tricks, and networking
            with like-minded professionals. Participating in online communities,
            attending webinars, and contributing to open-source projects can
            provide access to remote work opportunities and help remote
            developers stay up-to-date with the latest trends in their field.
            Community involvement also allows remote developers to collaborate
            with others and contribute to shared goals, creating a sense of
            purpose and accomplishment that can be difficult to achieve when
            working independently. Overall, community contributions and
            milestones can be an important part of remote work success, both
            personally and professionally.
          </p>
        </div>
      </div>

      <NextButton path="/core/remote_work_preparedness" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
