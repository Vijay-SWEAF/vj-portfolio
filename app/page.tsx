'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
//import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
//import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  useEffect(() => {
    gsap.from('.animate-hero', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.animate-projects', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.animate-fade', { opacity: 0, duration: 1, stagger: 0.3 });
    gsap.from('.animate-hobbies', { opacity: 0, y: 30, duration: 1, delay: 0.7 });
    
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/*<Experience />*/}
      <Projects />
      <Hobbies />
      {/*<Contact />*/}

  {/* Back to Top Button */}
  <ScrollToTop />
    </main>
  );
}
