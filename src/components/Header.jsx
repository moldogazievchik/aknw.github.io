import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип с картинкой, клик по логотипу перенаправляет на начало страницы */}
        <a href="#" className="text-3xl font-bold text-green-600 hover:text-red-600 transition duration-300">
          <img src={logo} alt="Akinawa Oil" className="h-12" />
        </a>
        
        {/* Навигация */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="#about" className="hover:text-red-600 transition-all duration-300">О нас</a>
          <a href="#products" className="hover:text-red-600 transition-all duration-300">Продукция</a>
          <a href="#contact" className="hover:text-red-600 transition-all duration-300">Контакты</a>
        </nav>

        {/* Бургер-меню для мобильных устройств */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-lg w-48 py-4 px-6 rounded-lg">
              <a href="#about" className="block mb-4 text-gray-800 hover:text-red-600">О нас</a>
              <a href="#products" className="block mb-4 text-gray-800 hover:text-red-600">Продукция</a>
              <a href="#contact" className="block text-gray-800 hover:text-red-600">Контакты</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
