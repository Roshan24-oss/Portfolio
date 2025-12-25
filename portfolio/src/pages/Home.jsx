import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"
const Home = () => {
  return (
    <div>
      <Hero/>
       <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
