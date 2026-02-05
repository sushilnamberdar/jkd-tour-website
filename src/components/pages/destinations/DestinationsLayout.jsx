import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KashmirDestinations from './Kashmir';
import HimachalDestinations from './Himachal';
import LadakhDestinations from './Ladakh';

export default function DestinationsLayout() {
  return (
    <Routes>
      <Route path="kashmir" element={<KashmirDestinations />} />
      <Route path="himachal" element={<HimachalDestinations />} />
      <Route path="ladakh" element={<LadakhDestinations />} />
    </Routes>
  );
}
