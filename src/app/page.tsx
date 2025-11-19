import { HeroSection, HeroIllustration, PizzaMenu} from '../components';
import OurChief from '../components/ourchiefs/ourchief';
import { generateMetadata } from '../lib/seo';

export const metadata = generateMetadata(
  'Premium Pizza Delivery',
  'Order fresh, authentic pizzas from VivaCon Pizza. Premium ingredients, traditional recipes, delivered hot to your door. Order online now!'
);

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
