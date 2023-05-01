import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
  ArrowLeftCircleIcon,
  ChatBubbleBottomCenterIcon,
  LightBulbIcon,
  MicrophoneIcon,
  PencilIcon,
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
          Essential Soft Skills for Remote Developers
        </h1>
        <p className="mt-6 text-xl leading-8">
          In a remote work environment, professionals need to possess essential
          soft skills to work collaboratively, communicate effectively, and
          succeed in their roles. These skills include adaptability, strong
          communication skills, the ability to work independently, time
          management, and problem-solving. While technical skills are important,
          possessing strong soft skills can enable professionals to excel in
          remote work environments and contribute to the success of their teams.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            As the workplace landscape changes and remote work becomes
            increasingly prevalent, it is important for professionals to possess
            a strong set of essential soft skills. These skills allow
            individuals to work collaboratively and effectively, contribute to
            team success, and thrive in remote work environments. Some of the
            core soft skills required for remote professionals include:
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Key Soft Skills for Remote Developers
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <LightBulbIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Critical Thinking.
                </strong>{' '}
                Remote developers need to think critically to identify problems,
                evaluate solutions, and make informed decisions while working
                autonomously.
              </span>
            </li>
            <li className="flex gap-x-3">
              <UserGroupIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Problem Solving.
                </strong>{' '}
                The ability to solve complex problems independently is essential
                for remote developers, as they may not always have immediate
                access to team members for support.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ChatBubbleBottomCenterIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Communication.
                </strong>{' '}
                Effective written and verbal communication skills are crucial
                for remote developers to collaborate with their team members,
                share updates, and ask for help when needed.
              </span>
            </li>
            <li className="flex gap-x-3">
              <PencilIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Professional Skills.
                </strong>{' '}
                Remote developers must demonstrate professionalism, time
                management, and self-discipline to meet deadlines and deliver
                quality work.
              </span>
            </li>
            <li className="flex gap-x-3">
              <UserPlusIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Teamwork and Collaboration.
                </strong>{' '}
                Remote developers should be able to work well with others, share
                knowledge, and provide support to their team members to ensure
                project success.
              </span>
            </li>
            <li className="flex gap-x-3">
              <MicrophoneIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Empathy and Active Listening.
                </strong>{' '}
                Understanding the needs and concerns of colleagues, and being
                able to actively listen and provide support, are valuable skills
                for remote developers in maintaining a healthy team dynamic.
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            Soft skills such as active listening, professional ethics,
            communication, critical thinking, and problem-solving are essential
            for remote software engineers to excel in their roles. Active
            listening enables developers to understand their colleagues' needs
            and work collaboratively to achieve shared goals, even when they are
            not physically present in the same location. Professional ethics are
            crucial in remote work environments, where individuals must work
            independently and maintain high levels of integrity and
            professionalism. Effective communication is essential for remote
            teams to stay connected and work effectively together. Critical
            thinking and problem-solving skills enable developers to
            troubleshoot issues, identify solutions, and make decisions
            independently, which is particularly important in a remote work
            environment where resources may be limited. Overall, possessing
            strong soft skills is crucial for remote software engineers to be
            successful and contribute to the success of their teams.
          </p>
        </div>
      </div>
      <NextButton path="/core/ai_collaboration_and_personalization" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
