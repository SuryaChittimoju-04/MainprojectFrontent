// src/components/dashboard/ScheduleCard.jsx
import React from 'react';
import { Clock } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export const ScheduleCard = () => (
  <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
    <div className="p-6">
      <div className="flex items-center">
        <div className="bg-purple-100 rounded-lg p-3">
          <Clock className="h-6 w-6 text-purple-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
          <p className="text-sm text-gray-500">View scheduled visits</p>
        </div>
      </div>
      <div className="mt-6">
        <Button className="w-full">View Schedule</Button>
      </div>
    </div>
  </Card>
);