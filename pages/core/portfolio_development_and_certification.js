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
          Portfolio Development and Certification
        </h1>
        <p className="mt-6 text-xl leading-8">
          As the demand for remote work continues to rise, having a strong
          portfolio showcasing your work can make a significant difference in
          securing better remote jobs. Completing this course will provide you
          with the necessary skills to create a portfolio that highlights your
          achievements and demonstrates your ability to work remotely.
          Additionally, taking certifications that highlight your skillset can
          help open more doors and lead to better-paying remote work
          opportunities.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
            Building a portfolio is essential for showcasing your skills and
            achievements to potential employers. A portfolio not only showcases
            your work but also helps demonstrate your ability to work
            independently and remotely. By completing this course, you will gain
            the necessary skills to create a portfolio that highlights your best
            work, including personal projects and contributions to open-source
            projects. This portfolio will help you stand out from other
            candidates and demonstrate your skills and potential to employers.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Certifications
          </h2>
          <p className="mt-6 text-xl leading-8">
            In addition to building a portfolio, certifications can help
            highlight your skills and knowledge to potential employers.
            Certifications demonstrate that you have a deep understanding of a
            particular technology or framework, and they can make you stand out
            in a crowded job market. Taking certifications can help you showcase
            your skills and experience to potential employers and can help open
            doors to better-paying remote work opportunities.
          </p>
          <p className="mt-6 text-xl leading-8">
            There are various certifications available that cover different
            areas of expertise. These certifications are offered by well-known
            organizations such as Microsoft, Google, and Amazon. Some of the
            popular certifications for remote software engineers include AWS
            Certified Developer, Google Cloud Professional Developer, and
            Microsoft Certified: Azure Developer Associate. Completing these
            certifications can help you stand out from the competition and
            demonstrate your knowledge and skills in a particular area to
            potential employers.
          </p>
          <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
          <p className="mb-4">
            Building a strong portfolio and taking relevant certifications can
            help you demonstrate your skills and experience to potential
            employers, making you stand out in a crowded job market. By
            completing this course, you will gain the necessary skills to create
            a portfolio that showcases your best work and demonstrates your
            ability to work remotely. Additionally, taking relevant
            certifications can help you highlight your skills and knowledge in a
            particular area and open doors to better-paying remote work
            opportunities. Start building your portfolio and taking
            certifications today to take your remote work career to the next
            level.
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/dashboard"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Back to the dashboard
        </a>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
