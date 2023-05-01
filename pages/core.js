import Layout from '@/components/layout';
import Learn from '@/components/learn';

export default function Core() {
  return <Learn />;
}

Core.getLayout = function getLayout(page) {
  return <Layout current={2}>{page}</Layout>;
};
