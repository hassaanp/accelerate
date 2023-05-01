import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';

const timeline = [
  {
    id: 1,
    slug: 'introduction_to_remote_software_development',
    content: 'Introduction to Remote Software Development',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
  },
  {
    id: 2,
    slug: 'pair_programming_and_collaboration',
    content: 'Pair programming and collaboration',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
  },
  {
    id: 3,
    content: 'Essential Technical Skills',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'essential_technical_skills',
  },
  {
    id: 4,
    content: 'Essential Soft Skills',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'essential_soft_skills',
  },
  {
    id: 5,
    content: 'AI Collaboration and Personalization',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'ai_collaboration_and_personalization',
  },
  {
    id: 6,
    content: 'Interactive Project-Based Learning',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'interactive_project_based_learning',
  },
  {
    id: 7,
    content: 'Open-Source Software Contributions',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'open_source_software_contributions',
  },
  {
    id: 8,
    content: 'Community Contributions and Milestones',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'community_contributions_and_milestones',
  },
  {
    id: 9,
    content: 'Remote Work Preparedness',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'remote_work_preparedness',
  },
  {
    id: 10,
    content: 'Portfolio Development and Certification',
    icon: ArrowRightCircleIcon,
    iconBackground: 'bg-purple-500',
    slug: 'portfolio_development_and_certification',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Learn({}) {
  const router = useRouter();
  return (
    <div className="px-6 py-8 lg:px-8">
      {/* show back button to navigate back to original state */}
      <div className="py-4">
        <span
          className="inline-flex items-center hover:cursor-pointer"
          onClick={() => router.push('/dashboard')}
        >
          <ArrowLeftCircleIcon className="h-6 w-6" />
          <p className="pl-2">Back</p>
        </span>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li
                  className="hover:cursor-pointer"
                  key={event.id}
                  onClick={() => {
                    router.push(`/core/${event.slug}`);
                  }}
                >
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            event.iconBackground,
                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                          )}
                        >
                          <event.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
