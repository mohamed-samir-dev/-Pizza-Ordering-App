
import { HeroSection, HeroIllustration, PizzaMenu} from '../components';
import OurChief from '../components/ourchiefs/ourchief';
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <div id="pizza-menu">
        <PizzaMenu />
      </div>
      <div id="hero-illustration">
        <HeroIllustration />
      </div>
      <OurChief />
    </div>
  );
}
