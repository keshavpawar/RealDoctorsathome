import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials'
import Blogs from './components/Blogs/Blogs'
import Faq from './components/Faq/Faq'
import Infotab from './components/Infotab/Infotab'
import Footer from './components/Footer/Footer'

function Homepage() {
  return (
    <div>
        <Navbar />         
          <Hero />
          <Cards />
          <Plans />
          <Testimonials />
          <Blogs />
          <Faq />
          <Infotab />
          <Footer />
    </div>
  )
}

export default Homepage