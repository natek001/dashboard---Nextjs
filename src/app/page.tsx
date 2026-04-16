import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to the dashboard App
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Manage your tasks, track your analytics, and stay organized with our
          powerful dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-color shadow-lg hover:shadow-xl duration-2000"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
