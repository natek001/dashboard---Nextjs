import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-100 to-purple-200 p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-lg font-extrabold text-gray-900 mb-6">Settings</h1>
        <p className="text-md mb-8 max-w- text-gray-600">
          Manage your account preferences and application settings.
        </p>
        <div className="flex space-x-12">
          <div className="w-1/2 bg-gray-50 rounded-lg p-6 shadow-sm space-y-6">
            <h2 className="text-md font-semibold text-gray-900 mb-4">
              {" "}
              Quick Links
            </h2>
            <ul className="space-y-6">
              <li>
                <Link
                  href="/dashboard/settings/account"
                  className="flex items-center py-2 px-4 rounded-md  text-gray-800 hover:text-blue-500 hover:bg-blue-100 transition-colors"
                >
                  <span> Account</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/settings/notifications"
                  className="flex items-center py-2 px-4 rounded-md  text-gray-800 hover:text-yellow-500 hover:bg-yellow-100 transition-colors"
                >
                  <span> Notifications</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/settings/profile"
                  className="flex items-center py-2 px-4 rounded-md  text-gray-800 hover:text-green-500 hover:bg-green-100 transition-colors"
                >
                  <span> Profile</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-white rounded-lg p-8 shadow-md">
            <h1>Select Settings</h1>
            <p>Choose an option from the list to view its settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
