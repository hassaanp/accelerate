import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const NextButton = ({ path }) => {
  const router = useRouter();

  return (
    <div className="py-4 flex justify-center">
      <span
        className="inline-flex items-center hover:cursor-pointer"
        onClick={() => router.push(path)}
      >
        <p className="pr-2">Next</p>
        <ArrowRightCircleIcon className="h-6 w-6" />
      </span>
    </div>
  );
};

export default NextButton;
