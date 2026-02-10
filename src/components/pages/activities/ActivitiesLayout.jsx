import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrekkingActivities from './Trekking';
import SkiingActivities from './Skiing';
import SkyDivingActivities from './SkyDiving';
import TrackingActivities from './Tracking';
import RiverRaftingActivities from './RiverRafting';
import PhotographyActivities from './Photography';
import TourDetails from '../../TourDetails/TourDetails';
import { ActivityData } from './ActivitiesData';

export default function ActivitiesLayout() {
  return (
    <Routes>
      <Route path="trekking" element={<TourDetails data={ActivityData} />} />
      <Route path="skiing" element={<TourDetails data={ActivityData} />} />
      <Route path="sky-diving" element={<TourDetails data={ActivityData} />} />
      <Route path="tracking" element={<TourDetails data={ActivityData} />} />
      <Route path="river-rafting" element={<TourDetails data={ActivityData} />} />
      <Route path="photography" element={<TourDetails data={ActivityData} />} />
    </Routes>
  );
}
