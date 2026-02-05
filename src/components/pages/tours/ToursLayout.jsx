import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KashmirTours from './Kashmir';
import HimachalTours from './Himachal';
import AdventureTours from './Adventure';
import HoneymoonTours from './Honeymoon';

export default function ToursLayout() {
  return (
    <Routes>
      <Route path="kashmir" element={<KashmirTours />} />
      <Route path="himachal" element={<HimachalTours />} />
      <Route path="adventure" element={<AdventureTours />} />
      <Route path="honeymoon" element={<HoneymoonTours />} />
    </Routes>
  );
}
