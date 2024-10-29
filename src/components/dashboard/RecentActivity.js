// src/components/dashboard/RecentActivity.jsx
import React from 'react';

export const RecentActivity = () => (
  <div className="mt-8">
    <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
    <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
      <ul className="divide-y divide-gray-200">
        {[
          { title: 'General Checkup', date: '2024-03-15', status: 'Completed' },
          { title: 'Blood Test', date: '2024-03-10', status: 'Results Available' },
          { title: 'Vaccination', date: '2024-03-05', status: 'Completed' },
        ].map((activity, idx) => (
          <li key={idx} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-blue-600 truncate">{activity.title}</p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {activity.status}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{activity.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);