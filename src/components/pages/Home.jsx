import React from 'react';
import Hero from '../Hero';
import Destinations from '../Destinations';
import Testimonials from '../Testimonials';
import Tourss from './Tours';
import AboutSection from './AboutSection';
import WhyChooseUs from './WhyChooseUs';
import WhyTravelWithUs from './WhyTravelWithUs';
import PopularThingsToDo from './PopularThingsToDo';
import RecommendedTours from './RecommendedTours';
import SuccessStoriesScroll from './SuccessStoriesScroll';
import TravelDesk from './TravelDesk';
import CustomizeTrip from './CustomizeTrip';
import TravelDeskPage from './TravelDeskPage';
import GalleryZigZag from './GalleryZigZag';
import FooterBrandSection from './FooterBrandSection';


export default function Home() {
  return (
    <div>
      <Hero />
      <Tourss/>
      <Destinations />
      <AboutSection/>
      <WhyChooseUs/>
      <WhyTravelWithUs/>
      <PopularThingsToDo/>
      <RecommendedTours/>
      <SuccessStoriesScroll/>
      <TravelDesk/>
      <CustomizeTrip/>
      <TravelDeskPage/>
      <GalleryZigZag/>
      <FooterBrandSection/>
      <Testimonials />
    </div>
  );
}