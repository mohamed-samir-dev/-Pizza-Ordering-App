'use client'
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGooglePlay, FaApple } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleAppStoreClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <footer id="contact" className="bg[#343a40] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-2xl font-bold">
                  <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Pizza
                  </span>
                  <span className="text-white ml-1">Express</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Delicious pizza delivered fresh to your door. Experience the best flavors with our premium ingredients and fast delivery service.
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-gray-400">
                  <MdLocationOn className="text-gray-400" size={18} />
                  <span>123 Pizza Street, Food City</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MdPhone className="text-gray-400" size={18} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MdEmail className="text-gray-400" size={18} />
                  <span>info@pizzaexpress.com</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MdAccessTime className="text-gray-400" size={18} />
                  <span>Mon-Sun: 10AM - 11PM</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
              
              {/* App Store Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleAppStoreClick}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors w-full"
                >
                  <FaGooglePlay size={20} />
                  <span className="text-sm">Google Play</span>
                </button>
                <button 
                  onClick={handleAppStoreClick}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors w-full"
                >
                  <FaApple size={20} />
                  <span className="text-sm">App Store</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Pizza Express. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">App Under Development</h3>
            <p className="text-gray-600 mb-4">
              Our mobile application is currently under development. Stay tuned for updates!
            </p>
            <button 
              onClick={closeModal}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}