import React from "react";
import Link from "next/link";

const Users = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Users</h1>
        <p className="text-md text-gray-600 mb-8">
          Manage your user accounts and permissions.
        </p>

        {/* user related section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/dashboard/users/user-details"
            className="bg-teal-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-md text-teal-800 font-bold">User Details</h2>
            <p className=" text-sm text-gray-600">
              View details for each user account.
            </p>
          </Link>

          <Link
            href="/dashboard/users/user-list"
            className="bg-red-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-md text-red-800 font-bold">User List</h2>
            <p className=" text-sm text-red-400">View all user accounts.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;
