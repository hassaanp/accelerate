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
          Interactive Project-Based Learning
        </h1>
        <p className="mt-6 text-xl leading-8">
          Interactive Project-Based Learning is a popular active classroom model
          that encourages students to take an active role in their learning. In
          this approach, the instructor and the students collaboratively work on
          a project, iteratively building it over time to create a more
          comprehensive and complex final product. This approach leads to better
          learning outcomes and provides students with real-world experience
          that they can use in their future careers.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Project-Based Learning (PBL) is an active classroom model where the
            focus is on the students building projects, rather than passively
            receiving information from the instructor. In this approach,
            students work in groups or individually to complete projects that
            require them to apply what they have learned to a real-world
            scenario. With Interactive Project-Based Learning, students and
            instructors collaboratively work together to create a project that
            builds upon their collective knowledge and experience.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Benefits of Interactive Project-Based Learning
          </h2>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Real-world experience.
                </strong>{' '}
                Interactive Project-Based Learning provides students with
                real-world experience in developing software applications,
                enabling them to build a portfolio of work and prepare for
                future employment.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Improved engagement.
                </strong>{' '}
                The active classroom model encourages student engagement,
                leading to better learning outcomes and retention rates.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Collaboration and teamwork.
                </strong>{' '}
                Interactive Project-Based Learning fosters collaboration and
                teamwork, enabling students to learn from one another and
                develop important social skills that are essential in the
                workplace.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Iterative process.
                </strong>{' '}
                The iterative nature of Interactive Project-Based Learning
                allows for continuous feedback and improvement, leading to
                better learning outcomes and a deeper understanding of the
                software development process.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Instructor guidance.
                </strong>{' '}
                Instructors play an active role in Interactive Project-Based
                Learning, providing guidance and support throughout the
                development process to ensure that students are meeting learning
                objectives and developing the necessary skills to succeed in
                their careers.
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            Interactive Project-Based Learning offers a unique and effective way
            for students to engage with course material and build real-world
            skills. By collaborating with their peers and instructors to build
            meaningful projects, students are able to apply their knowledge in a
            hands-on way and gain practical experience. With the rise of remote
            learning, Interactive Project-Based Learning provides an engaging
            and interactive classroom model that helps to keep students
            motivated and connected to their coursework. By promoting active
            participation and collaboration, this learning approach helps
            students develop critical thinking, problem-solving, and
            communication skills that are essential for success in the
            workforce.
          </p>
        </div>
      </div>
      <NextButton path="/core/open_source_software_contributions" />
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
