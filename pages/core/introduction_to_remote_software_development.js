import { useRouter } from 'next/router';
import Layout from '../../components/layout';

import {
  ArrowLeftCircleIcon,
  CheckCircleIcon,
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
          Remote Software Development
        </h1>
        <p className="mt-6 text-xl leading-8">
          Remote software development allows organizations to leverage talent
          from all around the world and work with developers who possess unique
          skill sets, while providing flexibility and cost-effectiveness.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Remote software development refers to the process of creating
            software products or applications by a team of developers who are
            not physically present in the same location. Instead, they
            collaborate and communicate through digital channels such as video
            conferencing, messaging apps, and project management software.
            Remote software development allows organizations to leverage talent
            from all around the world and work with developers who possess
            unique skill sets. This can be particularly useful for small
            startups or businesses that cannot afford to maintain an in-house
            development team. Moreover, remote software development is gaining
            popularity due to its flexibility and cost-effectiveness.
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Flexibility and cost-effectiveness.
                </strong>{' '}
                Remote work enables organizations to leverage talent globally
                while saving money on office expenses.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Challenges.
                </strong>{' '}
                Remote work poses challenges such as communication barriers,
                cultural differences, and timezone discrepancies.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Collaboration.
                </strong>{' '}
                Effective communication, collaboration, and project management
                are essential for successful remote work.
              </span>
            </li>
          </ul>

          <p className="mt-8">
            By working remotely, developers can enjoy a better work-life
            balance, and organizations can save money on office rent, utilities,
            and equipment costs. However, remote software development also
            presents some challenges, such as communication barriers, cultural
            differences, and timezone discrepancies. Thus, effective
            communication, collaboration, and project management are essential
            to ensure successful remote software development.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Remote Work Adoption
          </h2>
          <p className="mt-6">
            Remote work has become increasingly popular in recent years, with
            the COVID-19 pandemic accelerating the adoption of remote work
            globally. According to a survey, over 80% of company leaders plan to
            allow their employees to work remotely at least part of the time
            after the pandemic. Remote work offers numerous benefits such as
            increased flexibility, better work-life balance, and cost savings
            for both employees and employers. However, remote work also poses
            challenges, such as communication barriers and difficulties in
            collaboration. Overall, the trend towards remote work is expected to
            continue, with many organizations shifting to hybrid work models
            that combine in-person and remote work.
          </p>

          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Remote work is the future of work. Our tools are getting
                better, and the world is only getting more connected. There's no
                reason why someone needs to be in the same physical space as
                everyone else to be productive.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://dhh.dk/images/headshot-2017-full.jpg"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">DHH</strong> –
                Co-owner & CTO of 37signals
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            How can you join the remote work revolution?
          </h2>
          <p className="mt-6">
            The ZOOM program is a comprehensive guide towards enabling you to be
            a part of the remote work revolution. The program is designed to
            help you learn the skills required to be a remote software
            developer. The program is divided into 3 phases:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Core:</strong> A
                theoretical introduciton to remote work and how to do it
                effectively
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Project Building:
                </strong>{' '}
                A step-by-step guide to building a real-world project to teach
                you effective soft and hard skills.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Opensource Contribution:
                </strong>{' '}
                A tutorial on how to make your first opensource contributions
                and learn how to use the experience to understand the dynamics
                of remote work.
              </span>
            </li>
          </ul>

          <p className="mt-8">
            We are working hard to complete the content of the program as
            quickly as possible. Feel free to reach out to us with your
            feedback.
          </p>
        </div>
      </div>
      <NextButton path="/core/pair_programming_and_collaboration" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
