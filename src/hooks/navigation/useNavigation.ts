import { NavItem } from '@/types/components/header';

export const useNavigation = (): NavItem[] => {
  return [
    { label: 'Home', href: '#' },
    { label: 'Menu', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];
};