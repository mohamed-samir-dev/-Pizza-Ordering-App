"use client";
import { FiUser, FiSearch, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { MobileMenuProps } from "../../../../types";
import { useNavigation, useAuth } from "../../../../hooks";
import { useRouter } from "next/navigation";

export default function MobileMenu({
  isOpen,
  onClose,
  cartCount = 0,
}: MobileMenuProps) {
  const navItems = useNavigation();
  const router = useRouter();
  const { currentUser, logout } = useAuth();

  const handleLogin = () => {
    router.push("/login");
    onClose();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-128 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="py-4 space-y-4 border-t border-gray-700/50 text-center">
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
        <div className="px-4 pt-4 border-t border-gray-700/50 space-y-3">
          <button className="w-full bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-gray-300 hover:text-white">
            <FiSearch className="w-4 h-4" />
            <span>Search</span>
          </button>
          <button className="relative w-full bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-gray-300 hover:text-white">
            <FiShoppingCart className="w-4 h-4" />
            <span>Basket</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-linear-to-r from-orange-500 to-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
          {currentUser ? (
            <div className="space-y-3">
              <div className="text-center text-gray-300 text-sm">
                Hi, {currentUser.name}
              </div>
              <button
                onClick={handleLogout}
                className="w-full bg-linear-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FiLogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FiUser className="w-4 h-4" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
