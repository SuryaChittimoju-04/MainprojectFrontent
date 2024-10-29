// src/components/dashboard/AppointmentCard.jsx
import React from 'react';

import Card from '../ui/Card';
import { Calendar } from 'lucide-react';
import { BookingDialog } from '../common/BookingDialog';

export const AppointmentCard = () => (
  <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
    <div className="p-6">
      <div className="flex items-center">
        <div className="bg-green-100 rounded-lg p-3">
          <Calendar className="h-6 w-6 text-green-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Book Appointment</h3>
          <p className="text-sm text-gray-500">Schedule your next visit</p>
        </div>
      </div>
      <div className="mt-6">
        <BookingDialog />
      </div>
    </div>
  </Card>
);