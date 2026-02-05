import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrekkingActivities from './Trekking';
import SkiingActivities from './Skiing';
import SkyDivingActivities from './SkyDiving';
import TrackingActivities from './Tracking';
import RiverRaftingActivities from './RiverRafting';
import PhotographyActivities from './Photography';

export default function ActivitiesLayout() {
  return (
    <Routes>
      <Route path="trekking" element={<TrekkingActivities />} />
      <Route path="skiing" element={<SkiingActivities />} />
      <Route path="sky-diving" element={<SkyDivingActivities />} />
      <Route path="tracking" element={<TrackingActivities />} />
      <Route path="river-rafting" element={<RiverRaftingActivities />} />
      <Route path="photography" element={<PhotographyActivities />} />
    </Routes>
  );
}
