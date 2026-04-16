import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8 ">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4  sm:mb-0">
            Dashboard
          </h1>
          <p className="text-md text-gray-600 mt-3">
            Welcome to your dashboard! Here you can manage your tasks and track
            your analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            className=" bg-blue-100 hover:bg-blue-150 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-1000 ease-in-out transform "
            href="/dashboard/tasks"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-blue-800">Tasks</h2>
              <span className="text-blue-800 text-2xl">📒</span>
            </div>
            <p className="text-gray-700 mt-2">
              View, Organize, and Manage your tasks daily.
            </p>
          </Link>

          <Link
            className=" bg-green-100 hover:bg-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-1000 ease-in-out transform "
            href="/dashboard/analytics"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-green-800">
                analytics
              </h2>
              <span className="text-green-500 text-2xl">📊</span>
            </div>
            <p className="text-gray-700 mt-2">
              Gain insights into your performance and trends.
            </p>
          </Link>

          <Link
            className=" bg-purple-100 hover:bg-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-1000 ease-in-out transform "
            href="/dashboard/settings"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-purple-800">
                Settings
              </h2>
              <span className="text-purple-500 text-2xl">⚙️</span>
            </div>
            <p className="text-gray-700 mt-2">
              Customize and tweak your dashboard settings.
            </p>
          </Link>

          <Link
            className=" bg-yellow-100 hover:bg-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-1000 ease-in-out transform "
            href="/dashboard/users"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-yellow-800">Users</h2>
              <span className="text-yellow-500 text-2xl">👥</span>
            </div>
            <p className="text-gray-700 mt-2">
              Manage and View your user base.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
