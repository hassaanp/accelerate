import Community from '@/components/community';
import Roadmap from '@/components/roadmap';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <Roadmap />
      <Community />
    </div>
  );
}
