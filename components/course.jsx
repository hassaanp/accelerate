import Build from './build';
import Learn from './learn';
import Work from './work';

export default function Course({ course, reset }) {
  if (course === 'LEARN') {
    return <Learn reset={reset} />;
  } else if (course === 'BUILD') {
    return <Build reset={reset} />;
  } else if (course === 'WORK') {
    return <Work reset={reset} />;
  } else {
    return <div>Something went wrong</div>;
  }
}
