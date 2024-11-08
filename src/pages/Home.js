/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import { HealthRecordCard } from '../components/dashboard/HealthRecordCard';
import { ScheduleCard } from '../components/dashboard/ScheduleCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { AppointmentCard } from '../components/dashboard/Appointment';
import { useDispatch, useSelector } from 'react-redux';
import Slots from '../store/slots/actions';

const Home = ({ onLogout }) => {
  const dispatch = useDispatch();
  const slotsData = useSelector((state) => state.slots);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    if (slotsData && slotsData.statusCode === 200) {
      setSlots(slotsData.slotsData.data);
    }
  }, [slotsData]);

  useEffect(() => {
    if (slotsData && slotsData.availableSlots?.data?.statusCode === 200) {
      setAvailableSlots(slotsData.availableSlots?.data?.data);
    } else {
      dispatch(Slots.fetchAvailableSlotsRequest());
    }
  }, [dispatch, slotsData.availableSlots?.statusCode]);

  const fetchSlots = () => {
    dispatch(Slots.fetchSlotsRequest());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={onLogout} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-900">Welcome back, Patient</h2>
          <p className="mt-1 text-sm text-gray-600">
            Manage your appointments and health records
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          <HealthRecordCard />
          <AppointmentCard availableSlots={availableSlots} />
          <ScheduleCard slots={slots} fetchSlots={fetchSlots} />
        </div>

        <RecentActivity />
      </main>
    </div>
  );
};

export default Home;
