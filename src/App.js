import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Home,
  WhyChooseUs,
  Contact,
  ToursLayout,
  DestinationsLayout,
  ActivitiesLayout,
  TripTypesLayout,
  Gallery
} from './components/pages/AllPages';
import Tours from './components/pages/Tours';
import FooterBrandSection from './components/pages/FooterBrandSection';


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
    <div className="bg-[#f5f5f5]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/*" element={<ToursLayout />} />
        <Route path="/destinations/*" element={<DestinationsLayout />} />
        <Route path="/activities/*" element={<ActivitiesLayout />} />
        <Route path="/trip-types/*" element={<TripTypesLayout />} />
        <Route path="/Why-Choose-Us" element={<WhyChooseUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={ <FooterBrandSection/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;