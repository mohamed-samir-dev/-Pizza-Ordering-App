
import { HeroSection, HeroIllustration, PizzaMenu } from '../components';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <PizzaMenu />
      <HeroIllustration />
    </div>
  );
}
