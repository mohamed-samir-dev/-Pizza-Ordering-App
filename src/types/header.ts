export interface ActionButtonsProps {
  cartCount: number;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount?: number;
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface HeaderState {
  isMenuOpen: boolean;
  cartCount: number;
}