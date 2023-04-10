import Image from 'next/image';
import { project, oss, core } from '../utils/roadmap';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Roadmap() {
  return (
    <div>
      <div className="bg-white py-16">
        <Image
          className="mx-auto"
          src="/roadmapheading.png"
          width="200"
          height="100"
        />
        <p className="text-center mt-6 mb-12 text-lg leading-8 text-gray-600">
          The course is divided into 3 parts that help you quickly ramp up as a
          remote engineer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 px-2">
          <div>
            <div className="transform -skew-x-12 bg-purple-500 py-2">
              <p className="font-bold text-white transform skew-x-12 text-center">
                Core
              </p>
            </div>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {core.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className="relative pb-8">
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
          <div>
            <div className="transform -skew-x-12 bg-purple-500 py-2">
              <p className="font-bold text-white transform skew-x-12 text-center">
                Project Building
              </p>
            </div>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {project.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className="relative pb-8">
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
          <div>
            <div className="transform -skew-x-12 bg-purple-500 py-2">
              <p className="font-bold text-white transform skew-x-12 text-center">
                OS Contributions
              </p>
            </div>
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {oss.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className="relative pb-8">
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
    </div>
  );
}
