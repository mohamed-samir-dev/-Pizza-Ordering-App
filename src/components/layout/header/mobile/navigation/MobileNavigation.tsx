'use client'
import { useNavigation } from '../../../../../hooks';

interface MobileNavigationProps {
  onClose: () => void;
}

export default function MobileNavigation({ onClose }: MobileNavigationProps) {
  const navItems = useNavigation();

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
          onClick={onClose}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}