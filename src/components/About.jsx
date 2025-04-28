import React, { useState, useEffect } from 'react';
import aboutImg1 from '../assets/about1.jpg';
import aboutImg2 from '../assets/about2.jpg';
import aboutImg3 from '../assets/about3.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const images = [aboutImg1, aboutImg2, aboutImg3];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // каждые 5 секунд
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-20 text-gray-800 overflow-hidden">
      {/* Смена фонового изображения */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Полупрозрачная белая подложка с контентом */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">О нашей компании</h2>
          <p className="text-lg leading-relaxed mb-4">
            Akinawa Oil — ведущий производитель технических масел, базирующийся в Японии. Мы поставляем продукцию для автомобильной и промышленной отраслей, гарантируя качество, безопасность и инновации.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Наши заводы сертифицированы по международным стандартам, таким как API, ACEA и JASO. Мы гордимся партнёрством с Toyota, Honda, Nissan, а также экспортируем продукцию в 12 стран.
          </p>
          <p className="text-lg leading-relaxed">
            Наша миссия — забота о вашем двигателе и окружающей среде. Мы внедряем экологичные технологии и фокусируемся на инновациях.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Немного статистики</h3>
            <ul className="text-left space-y-3 text-lg">
              <li>📦 Более <strong>2000 литров</strong> масел в день</li>
              <li>🌍 Присутствие в <strong>12 странах</strong></li>
              <li>🤝 Партнёры: Toyota, Nissan, Mazda, Mitsubishi</li>
              <li>⚙️ Сертификация: <strong>API, ACEA, JASO</strong></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
