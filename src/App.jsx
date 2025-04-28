import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Products from './components/Products'
// import Navbar from './components/Navbar'
import Header from './components/Header'
function App() {

  return (
    <>

      <Header />
    <main className="pt-20"> 

      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
