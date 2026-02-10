import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FamilyTripTypes from './Family';
import HoneymoonTripTypes from './Honeymoon';
import AdventureTripTypes from './Adventure';
import CulturalTripTypes from './Cultural';
import {TripTypeData} from './TripTypeData';
import TourDetails from '../../TourDetails/TourDetails';

export default function TripTypesLayout() {
  return (
    <Routes>
      <Route path="family" element={<TourDetails data={TripTypeData} />} />
      <Route path="honeymoon" element={<TourDetails data={TripTypeData} />} />
      <Route path="adventure" element={<TourDetails data={TripTypeData} />} />
      <Route path="cultural" element={<TourDetails data={TripTypeData} />} />
    </Routes>
  );
}
