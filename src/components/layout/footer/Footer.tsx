'use client'
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGooglePlay, FaApple } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleAppStoreClick = () => {
    try {
      setShowModal(true);
    } catch (error) {
      console.error('Error opening modal:', error);
    }
  };

  const closeModal = () => {
    try {
      setShowModal(false);
    } catch (error) {
      console.error('Error closing modal:', error);
    }
  };

  return (
    <>
      <footer id="contact" className="bg-[#000814] text-white py-8 sm:py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold">
                  <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Pizza
                  </span>
                  <span className="text-white ml-1">Express</span>
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 sm:mb-0">
                Delicious pizza delivered fresh to your door. Experience the best flavors with our premium ingredients and fast delivery service.
              </p>
            </div>

            {/* Company */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base" aria-label="Learn about Pizza Express">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base" aria-label="Read our company story">Our Story</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base" aria-label="View career opportunities">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base" aria-label="Press releases and media">Press</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base" aria-label="Read our blog">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Contact</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start space-x-2 text-gray-400">
                  <MdLocationOn className="text-gray-400 mt-0.5 shrink-0" size={16} />
                  <span className="text-sm sm:text-base">123 Pizza Street, Food City</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MdPhone className="text-gray-400 shrink-0" size={16} />
                  <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <MdEmail className="text-gray-400 mt-0.5 shrink-0" size={16} />
                  <span className="text-sm sm:text-base break-all">info@pizzaexpress.com</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-400">
                  <MdAccessTime className="text-gray-400 mt-0.5 shrink-0" size={16} />
                  <span className="text-sm sm:text-base">Mon-Sun: 10AM - 11PM</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6" role="list">
                <a href="https://www.facebook.com/share/1GZtCVVXwh/" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Follow us on Facebook" role="listitem"target='_blank'>
                  <FaFacebook size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="https://x.com/Mouawad18804" className="text-gray-300 hover:text-orange-400 transition-colors " aria-label="Follow us on Twitter" role="listitem"target='_blank'>
                  <FaTwitter size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.instagram.com/msamir.dev?igsh=b3Nra3hrd3QxMTc" className="text-gray-300 hover:text-orange-400 transition-colors r" aria-label="Follow us on Instagram" role="listitem" target='_blank'>
                  <FaInstagram size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-samier-mouawad/" className="text-gray-300 hover:text-orange-400 transition-colors " aria-label="Follow us on LinkedIn" role="listitem"target='_blank'>
                  <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
              
              {/* App Store Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                <button 
                  onClick={handleAppStoreClick}
                  className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg transition-colors w-full"
                  aria-label="Download from Google Play Store"
                >
                  <FaGooglePlay size={16} className="sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">Google Play</span>
                </button>
                <button 
                  onClick={handleAppStoreClick}
                  className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg transition-colors w-full"
                  aria-label="Download from Apple App Store"
                >
                  <FaApple size={16} className="sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm">App Store</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Pizza Express. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div 
            className="bg-white backdrop- rounded-lg p-4 sm:p-6 max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="modal-title" className="text-base sm:text-lg font-semibold text-gray-900 mb-2">App Under Development</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Our mobile application is currently under development. Stay tuned for updates!
            </p>
            <button 
              onClick={closeModal}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors text-sm sm:text-base  "
              autoFocus
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}