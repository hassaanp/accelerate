import Image from 'next/image';

export default function Community() {
  return (
    <div>
      <div className="bg-white py-16">
        <Image
          className="mx-auto"
          src="/communityheading.png"
          width="200"
          height="100"
        />
        <p className="text-center mt-6 mb-12 text-lg leading-8 text-gray-600">
          Join our Slack community of remote engineers that are learning to
          become better engineers.
        </p>

        <div className="mx-auto max-w-sm">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
              aria-describedby="email-description"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            We'll send you an invite to our Slack.
          </p>
          <div className="text-center pt-4">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign me up!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
