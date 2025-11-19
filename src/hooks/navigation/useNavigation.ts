import { NavItem } from '@/types/components/header';

export const useNavigation = (): NavItem[] => {
  return [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '#pizza-menu' },
    { label: 'About', href: '#hero-illustration' },
    { label: 'Contact', href: '#contact' },
  ];
};