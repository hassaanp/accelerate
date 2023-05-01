import Build from '@/components/build';
import Layout from '@/components/layout';

export default function Project() {
  return <Build />;
}

Project.getLayout = function getLayout(page) {
  return <Layout current={3}>{page}</Layout>;
};
