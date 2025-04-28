import React from 'react';
import prod1 from '../assets/10W-40.jpeg';
import prod2 from '../assets/5W-20.jpeg';
import prod3 from '../assets/0W-20.jpeg';
import prod4 from '../assets/5W-30.jpeg';
import prod5 from '../assets/5W-40.jpeg';
import prod6 from '../assets/10W-40black.jpeg';
import prod7 from '../assets/10W-40red.jpeg';
import prod8 from '../assets/HMMF.jpeg';
import prod9 from '../assets/Multy-ATF.jpeg';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Моторное масло 10W-40',
    img: prod1,
    desc: 'Обеспечивает отличную защиту двигателя от износа и перегрева.',
  },
  {
    title: 'Моторное масло 5W-20',
    img: prod2,
    desc: 'Идеально подходит для современных автомобилей с высокими требованиями к маслам.',
  },
  {
    title: 'Моторное масло 15W-40',
    img: prod3,
    desc: 'Надежная защита в самых жестких условиях эксплуатации и в различных температурах.',
  },
  {
    title: 'Гидравлическое масло',
    img: prod4,
    desc: 'Для гидравлических систем с высокими требованиями к фильтрации и стабильности.',
  },
  {
    title: 'Трансмиссионное масло',
    img: prod5,
    desc: 'Обеспечивает долгосрочную работу трансмиссий и коробок передач.',
  },
  {
    title: 'Смазка для подшипников',
    img: prod6,
    desc: 'Высококачественная смазка для долгосрочной работы подшипников при высоких нагрузках.',
  },
  {
    title: 'Теплоносители',
    img: prod7,
    desc: 'Предназначены для теплообменников и систем отопления.',
  },
  {
    title: 'Смазка для цепей',
    img: prod8,
    desc: 'Идеальна для смазки цепей и цепных механизмов, продлевает срок службы.',
  },
  {
    title: 'Смазка для автомобилей',
    img: prod9,
    desc: 'Обеспечивает защиту и продлевает срок службы автотранспорта.',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
          Наша продукция
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-48 object-cover"
                />
                {/* Описание, которое появляется при наведении */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                  <p className="text-red-600 text-center">{prod.desc}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-red-600">{prod.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
