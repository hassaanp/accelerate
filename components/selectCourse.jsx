import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';

const projects = [
  {
    name: 'Learn the Core',
    initials: 'LEARN',
    href: '#',
    members: 10,
    bgColor: 'bg-pink-600',
    slug: 'core',
    completed: true,
  },
  {
    name: 'Build a Project',
    initials: 'BUILD',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600',
    slug: 'project',
    completed: false,
  },
  {
    name: 'Contribute to Opensource',
    initials: 'WORK',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
    slug: 'opensource',
    completed: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SelectCourse() {
  const router = useRouter();
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Curriculum</h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="relative hover:cursor-pointer col-span-1 flex rounded-md shadow-sm"
            onClick={() => {
              // setCourse(project.initials);
              router.push(`/${project.slug}`);
            }}
          >
            <div
              className={classNames(
                project.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Modules</p>
              </div>
              {!project.completed && (
                <span className="absolute bottom-0 left-0 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Under construction
                </span>
              )}
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
