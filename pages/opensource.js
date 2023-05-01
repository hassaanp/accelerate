import Layout from '@/components/layout';
import Work from '@/components/work';

export default function Opensource() {
  return <Work />;
}

Opensource.getLayout = function getLayout(page) {
  return <Layout current={4}>{page}</Layout>;
};
