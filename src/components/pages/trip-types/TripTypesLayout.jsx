import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FamilyTripTypes from './Family';
import HoneymoonTripTypes from './Honeymoon';
import AdventureTripTypes from './Adventure';
import CulturalTripTypes from './Cultural';

export default function TripTypesLayout() {
  return (
    <Routes>
      <Route path="family" element={<FamilyTripTypes />} />
      <Route path="honeymoon" element={<HoneymoonTripTypes />} />
      <Route path="adventure" element={<AdventureTripTypes />} />
      <Route path="cultural" element={<CulturalTripTypes />} />
    </Routes>
  );
}
