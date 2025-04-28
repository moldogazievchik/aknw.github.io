import React from 'react'
import heroBg from '../assets/hero-bg.jpg'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-4 rounded-xl"
      >
        {/* Убрали фон, чтобы сделать его прозрачным */}
        <div className="text-center p-6 bg-transparent rounded-2xl max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Добро пожаловать в Akinawa Oil
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Качественные масла и смазки для вашего производства
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-shadow shadow-md hover:shadow-lg">
            Подробнее
          </button>
        </div>
      </motion.div>
    </section>
  )
}
