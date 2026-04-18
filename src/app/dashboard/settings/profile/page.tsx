import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-100 to-purple-200 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-lg font-extrabold text-gray-900 mb-6">
          Profile Settings
        </h1>

        {/* profile picture  */}

        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>

          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <button className="mt-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer transition-colors">
            Change Image
          </button>
        </section>

        <section className=" space-y-4">
          <h2 className="text-2xl text-gray-700 font-semibold mb-4">
            Profile Information
          </h2>
          <div>
            <label className="block font-bold text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Nahil Bona"
              className="w-full block mt-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-sm text-gray-600">
              User Name
            </label>
            <input
              type="text"
              placeholder="Nah_ona"
              className="w-full block mt-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-bold text-sm text-gray-600">
              Email Address
            </label>
            <input
              type="text"
              placeholder="nahil.bona@example.com"
              className="w-full block mt-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        <div className="flex justify-end space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
