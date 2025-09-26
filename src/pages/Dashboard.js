import React from 'react';
import { Plus, Users, DollarSign, ShoppingBag, TrendingUp, CheckCircle, UserPlus, AlertCircle, CreditCard, XCircle, Box, Cpu, Database, Code, Book } from 'react-feather';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

const Dashboard = () => {
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 18000, 22000, 24000, 28000],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.05)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Expenses',
        data: [8000, 11000, 9000, 10000, 12000, 14000, 16000],
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.05)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const trafficData = {
    labels: ['Direct', 'Organic', 'Referral', 'Social'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: [
        '#0ea5e9',
        '#10b981',
        '#8b5cf6',
        '#f59e0b',
      ],
      borderWidth: 0,
      cutout: '80%',
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: function(context) {
            return context.tick.value === 0 ? '#e5e7eb' : 'rgba(229, 231, 235, 0.2)';
          },
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="max-w-8xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button className="flex items-center space-x-1 bg-cosmic-500 hover:bg-cosmic-600 text-white px-4 py-2 rounded-lg transition">
              <Plus size={16} />
              <span>New Report</span>
            </button>
            <div className="relative">
              <button className="flex items-center space-x-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition">
                <span>This Week</span>
                {/* Add chevron icon */}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">12,345</h3>
              </div>
              <div className="p-3 rounded-lg bg-cosmic-100 dark:bg-gray-700 text-cosmic-600 dark:text-cosmic-400">
                <Users size={20} />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 font-medium">+12.5%</span> from last month
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$48,594</h3>
              </div>
              <div className="p-3 rounded-lg bg-green-100 dark:bg-gray-700 text-green-600 dark:text-green-400">
                <DollarSign size={20} />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 font-medium">+8.2%</span> from last month
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">New Orders</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,264</h3>
              </div>
              <div className="p-3 rounded-lg bg-amber-100 dark:bg-gray-700 text-amber-600 dark:text-amber-400">
                <ShoppingBag size={20} />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="text-green-500 font-medium">+3.1%</span> from last month
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">3.42%</h3>
              </div>
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400">
                <TrendingUp size={20} />
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              <span className="text-red-500 font-medium">-0.8%</span> from last month
            </p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h3>
              <div className="flex items-center space-x-2">
                <button className="text-xs px-2.5 py-1 rounded-md bg-cosmic-100 dark:bg-gray-700 text-cosmic-600 dark:text-cosmic-400">Monthly</button>
                <button className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">Weekly</button>
              </div>
            </div>
            <Line data={revenueData} options={chartOptions} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
              {/* Add more vertical icon */}
            </div>
            <Doughnut data={trafficData} options={doughnutOptions} />
          </div>
        </div>

        {/* Recent Activity & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
              <button className="text-sm text-cosmic-600 dark:text-cosmic-400 font-medium">View All</button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-green-100 dark:bg-gray-700 text-green-600 dark:text-green-400">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Order #4589 completed</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">3 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400">
                  <UserPlus size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">New user registered</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-amber-100 dark:bg-gray-700 text-amber-600 dark:text-amber-400">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">High memory usage detected</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">7 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400">
                  <CreditCard size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Payment received from client</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1 day ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-red-100 dark:bg-gray-700 text-red-600 dark:text-red-400">
                  <XCircle size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Failed login attempt</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 card-hover">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Products</h3>
              <button className="text-sm text-cosmic-600 dark:text-cosmic-400 font-medium">View All</button>
            </div>

            <div className="space-y-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-cosmic-500 to-nebula-500 flex items-center justify-center">
                  <Box className="text-white" size={16} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Premium SaaS Plan</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Monthly Subscription</p>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">$49.99</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  <Cpu className="text-white" size={16} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Cloud Hosting</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Annual Plan</p>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">$299.99</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Database className="text-white" size={16} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Database Storage</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400">50GB Package</p>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">$19.99</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Code className="text-white" size={16} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">API Credits</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400">10,000 Requests</p>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">$9.99</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Book className="text-white" size={16} />
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Documentation</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF Download</p>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">$4.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;