import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Заголовок */}
        <motion.h2
          className="text-3xl font-bold mb-6 text-red-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Связаться с нами
        </motion.h2>
        
        {/* Подпись */}
        <motion.p
          className="mb-4 text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Оставьте заявку, и мы свяжемся с вами в ближайшее время
        </motion.p>
        
        {/* Форма */}
        <motion.form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Имя */}
          <input
            type="text"
            placeholder="Ваше имя"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          
          {/* Email */}
          <input
            type="email"
            placeholder="Ваш Email"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          
          {/* Сообщение */}
          <textarea
            rows="4"
            placeholder="Ваше сообщение"
            className="border border-gray-300 p-3 rounded-lg w-full sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
          />
          
          {/* Кнопка отправить */}
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-all sm:col-span-2"
          >
            Отправить
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
