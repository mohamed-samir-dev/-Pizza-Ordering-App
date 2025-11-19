import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata(
  'Favorite Pizzas',
  'Your saved favorite pizzas from VivaCon Pizza. Quick access to your preferred pizza selections for easy reordering'
);

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}