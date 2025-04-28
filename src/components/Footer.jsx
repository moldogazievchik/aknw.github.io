import React from 'react';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'; // для иконок соцсетей

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Лицензия */}
        <p className="text-sm mb-4 font-normal">
          Лицензия №12345 на производство и продажу масел и смазок
        </p>
        
        {/* Социальные сети */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://instagram.com" className="text-white hover:text-yellow-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" className="text-white hover:text-yellow-500 transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://t.me" className="text-white hover:text-yellow-500 transition-colors">
            <FaTelegramPlane size={24} />
          </a>
          <a href="https://wa.me" className="text-white hover:text-yellow-500 transition-colors">
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Адрес */}
        <p className="text-sm mb-4">
          Адрес: г. Москва, ул. Примерная, 10, офис 5
        </p>

        {/* Авторские права */}
        <p className="text-sm font-normal">
          &copy; {new Date().getFullYear()} Akinawa Oil. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
