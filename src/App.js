import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { CookieConsentProvider } from './components/Cookie/CookieConsent';
import SearcH from './components/pages/Filter/SearcH';
import TourDetails from './components/TourDetails/TourDetails';
import {tourData} from  './components/TourDetails/tourDataKashmir';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
      disable: () => window.innerWidth < 768, // huge win
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard(); // IMPORTANT
  }, [location.pathname]);

  return (
    <div className="bg-gray-50">
      <ScrollToTop />
      <CookieConsentProvider/>
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
        <Route path="/test" element={<TourDetails data={tourData} />} />
        <Route path="/search" element={<SearcH/>} />
      
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;