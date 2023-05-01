import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
  ArrowLeftCircleIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  LightBulbIcon,
  MicrophoneIcon,
  PhoneIcon,
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
          Remote Work Preparedness: Creating an Effective and Sustainable
          Workspace
        </h1>
        <p className="mt-6 text-xl leading-8">
          With remote work becoming more popular, it's essential to have a
          dedicated workspace at home or a coworking dedicated setup to ensure
          effective and sustainable remote work. Having a designated workspace
          can help you maintain a healthy work-life balance and increase
          productivity. There are several elements to consider when preparing
          for remote work, including reliable internet and power backups, a
          comfortable chair and desk, and proper lighting. Additionally, it's
          essential to have a functional mic and camera to ensure effective
          communication during virtual meetings and collaborations.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Creating an effective and sustainable workspace for remote work is
            crucial to ensuring productivity and success. Some key elements to
            consider include:
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Essential Components for Remote Work Preparedness
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <BuildingOffice2Icon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Dedicated Workspace.
                </strong>{' '}
                It's important to have a dedicated workspace at home or in a
                coworking space, with a comfortable chair and a desk or table
                that is at the right height for you to work comfortably.
              </span>
            </li>
            <li className="flex gap-x-3">
              <GlobeAltIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Reliable Internet Connection.
                </strong>{' '}
                High-speed internet is essential for remote work, so it's
                important to have a reliable connection and a backup plan in
                case of an outage.
              </span>
            </li>
            <li className="flex gap-x-3">
              <LightBulbIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Power Backup.
                </strong>{' '}
                In case of a power outage, it's important to have a backup power
                source, such as a battery backup or a generator.
              </span>
            </li>
            <li className="flex gap-x-3">
              <MicrophoneIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Quality Microphone and Camera.
                </strong>{' '}
                Good audio and video quality are essential for remote
                communication and collaboration, so it's important to have a
                quality microphone and camera for video calls and meetings.
              </span>
            </li>
            <li className="flex gap-x-3">
              <PhoneIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Noise-Canceling Headphones.
                </strong>{' '}
                Distractions are a common issue when working from home or in a
                shared space, so it's important to have noise-canceling
                headphones to help block out background noise and focus on work.
              </span>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            Remote work has become a crucial aspect of modern work culture, and
            being prepared for it is important for success. Having a dedicated
            workspace, whether it is at home or in a coworking setup, is vital
            for creating a professional environment that is conducive to
            productivity. Additionally, having reliable internet and power
            backups, a quality microphone and camera, and other necessary
            equipment can ensure that you are always ready for work and can
            effectively communicate with your team members. By prioritizing
            remote work preparedness, professionals can create sustainable
            work-from-home arrangements that allow them to thrive in their
            roles.
          </p>
        </div>
      </div>

      <NextButton path="/core/portfolio_development_and_certification" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
