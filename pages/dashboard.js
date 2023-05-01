import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-web/init';
import Link from 'next/link';
import SelectCourse from '@/components/selectCourse';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';

export default function Dashboard() {
  const [user, setUser] = useAuthState(auth);
  const router = useRouter();

  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Welcome!
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* if user display name is not setup, ask the user to first complete their profile */}

          {!user?.displayName && (
            <>
              <div
                className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
                role="alert"
              >
                <p className="font-bold">Please complete your profile</p>
                <p className="pb-2">
                  Before you start going through the course, we adivse that you
                  need to complete your profile.
                </p>
                <Link
                  href="/profile"
                  className="hover:cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Click here to complete your profile
                </Link>
              </div>
              <SelectCourse />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout current={1}>{page}</Layout>;
};
