'use client'
import { useNavigation } from '../../../../hooks';

export default function Navigation() {
  const navItems = useNavigation();

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="relative text-gray-300  font-medium group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5"></span>
        </a>
      ))}
    </nav>
  );
}