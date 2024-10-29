// src/pages/Home.jsx
import React from 'react';
import { Header } from '../components/layout/Header';
import { HealthRecordCard } from '../components/dashboard/HealthRecordCard';
import { ScheduleCard } from '../components/dashboard/ScheduleCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { AppointmentCard } from '../components/dashboard/Appointment';

const Home = ({ onLogout }) => (
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
        <AppointmentCard />
        <ScheduleCard />
      </div>

      <RecentActivity />
    </main>
  </div>
);

export default Home;