import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
  ArrowLeftCircleIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterIcon,
  ClockIcon,
  LightBulbIcon,
  MicrophoneIcon,
  PencilIcon,
  PlusCircleIcon,
  UserGroupIcon,
  UserPlusIcon,
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
          AI Collaboration and Personalization for Remote Work Success
        </h1>
        <p className="mt-6 text-xl leading-8">
          Artificial Intelligence (AI) can significantly enhance remote work by
          improving collaboration and personalization for remote professionals.
          AI-powered tools can streamline communication, assist with task
          management, and provide personalized learning experiences to ensure
          remote workers are equipped for success.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            As remote work becomes increasingly common, AI can play a pivotal
            role in helping remote professionals collaborate effectively and
            adapt to the challenges of remote work. Some of the ways AI can be
            utilized to enhance remote work include:
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Where to leverage AI as a remote engineer
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <ChatBubbleBottomCenterIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Improved Communication.
                </strong>{' '}
                AI-powered communication tools can help remote workers stay
                connected, translate languages in real-time, and prioritize
                important messages.
              </span>
            </li>
            <li className="flex gap-x-3">
              <UserGroupIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Enhanced Collaboration.
                </strong>{' '}
                AI-driven project management tools can automatically assign
                tasks, track progress, and identify potential bottlenecks,
                improving team productivity.
              </span>
            </li>
            <li className="flex gap-x-3">
              <PencilIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Personalized Learning.
                </strong>{' '}
                AI can create personalized learning experiences, helping remote
                workers acquire new skills and knowledge tailored to their
                individual needs and career goals.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ClockIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Time Management and Organization.
                </strong>{' '}
                AI-powered virtual assistants can help remote workers manage
                their schedules, prioritize tasks, and stay organized, leading
                to increased productivity and efficiency.
              </span>
            </li>
            <li className="flex gap-x-3">
              <PlusCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Emotional Intelligence and Well-being.
                </strong>{' '}
                AI can analyze workers' emotions and stress levels, offering
                personalized recommendations for stress reduction and mental
                health support.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ChartPieIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Analytics and Decision Support.
                </strong>{' '}
                AI-driven data analysis tools can help remote workers make
                data-driven decisions, identify trends, and optimize processes,
                leading to better overall performance.
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            AI collaboration and personalization play a critical role in
            enhancing remote work success. Remote workers can leverage
            AI-powered tools to improve communication, collaboration,
            personalized learning, time management, and emotional intelligence,
            leading to a more productive and fulfilling remote work experience.
            By embracing AI-driven solutions, remote professionals can adapt to
            the challenges of remote work and contribute to the overall success
            of their teams.
          </p>
        </div>
      </div>
      <NextButton path="/core/interactive_project_based_learning" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={3}>{page}</Layout>;
};
