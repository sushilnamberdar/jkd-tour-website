import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KashmirTours from './Kashmir';
import HimachalTours from './Himachal';
import AdventureTours from './Adventure';
import HoneymoonTours from './Honeymoon';
import { tourData } from '../../TourDetails/tourDataKashmir';
import TourDetails from '../../TourDetails/TourDetails';
import {tourDataHimachal} from '../../TourDetails/TourDataHimachal'; 
import { tourData as tourDataAdventure } from '../../TourDetails/AdvantureTour';
import { tourData as tourDataHoneymoon } from '../../TourDetails/HoneymoonPackage';
import { tourData as tourDataLadak } from '../../TourDetails/TourDataLadak';
export default function ToursLayout() {
  return (
    <Routes>
      <Route path="kashmir" element={<TourDetails data={tourData} />} />
      <Route path="himachal" element={<TourDetails data={tourDataHimachal} />} />
      <Route path="adventure" element={<TourDetails data={tourDataAdventure} />} />
      <Route path="honeymoon" element={<TourDetails data={tourDataHoneymoon} />} />
      <Route path="ladakh" element={<TourDetails data={tourDataLadak} />} />
    </Routes>
  );
}
