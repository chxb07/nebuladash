import React from 'react';
import { BarChart2, TrendingUp, Users, Eye, Clock, Target } from 'react-feather';

const Analytics = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Page Views</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">45,231</h3>
              </div>
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400">
                <Eye size={20} />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 font-medium">+15.3%</span> from last month
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Unique Visitors</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">12,456</h3>
              </div>
              <div className="p-3 rounded-lg bg-green-100 dark:bg-gray-700 text-green-600 dark:text-green-400">
                <Users size={20} />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 font-medium">+8.7%</span> from last month
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Session Time</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">4m 32s</h3>
              </div>
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400">
                <Clock size={20} />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 font-medium">+2.1%</span> from last month
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Analytics</h3>
          <p className="text-gray-600 dark:text-gray-300">Detailed analytics charts and metrics would go here.</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;