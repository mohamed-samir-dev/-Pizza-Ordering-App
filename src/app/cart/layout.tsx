import { generateMetadata } from '../../lib/seo';

export const metadata = generateMetadata(
  'Shopping Cart',
  'Review your VivaCon Pizza order, modify quantities, and proceed to checkout for fresh pizza delivery'
);

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}