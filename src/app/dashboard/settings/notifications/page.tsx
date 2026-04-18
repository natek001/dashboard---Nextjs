const Notifications = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-100 to-purple-200 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-lg font-extrabold text-gray-900 mb-6">
          Notifications
        </h1>

        <div>
          <h2 className="text-md font-semibold text-gray-900 mb-4">
            Notification Preferences
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Notifications
              </label>
              <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                SMS Notifications
              </label>
              <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Push Notifications
              </label>
              <select className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
        </div>

        {/* action settings */}

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

export default Notifications;
