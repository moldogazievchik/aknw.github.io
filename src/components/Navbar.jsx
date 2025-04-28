import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-yellow-600">Akinawa Oil</h1>
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="#about" className="hover:text-yellow-600 transition">О нас</a>
          <a href="#products" className="hover:text-yellow-600 transition">Продукция</a>
          <a href="#contact" className="hover:text-yellow-600 transition">Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
