import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,     // animation duration
      easing: "ease-out",
      once: true,        // animate only once
      offset: 100,       // trigger point
    });
  }, []);
  return (
    <div>
      <Header/>
      <Hero />
      <Destinations />
      <Tours />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;