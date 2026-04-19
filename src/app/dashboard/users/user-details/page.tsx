const UserDetails = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-02-10" },
      { id: 2, description: "Changed email address", timestamp: "2025-01-25" },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "2025-01-15",
      },
    ],
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-lg font-bold text-gray-800 mb-6">User Details</h1>
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
            <p
              className={`text-sm ${user.status === "Active" ? "text-green-500" : "text-red-500"}`}
            >
              {user.status}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-md mb-2 text-gray-600">About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        <div>
          <h2 className="font-semibold text-md mb-2 text-gray-600">
            Recent Activities
          </h2>

          <ul>
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span>A</span>
                </div>
                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-gray-600 text-sm">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>

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
    </div>
  );
};

export default UserDetails;
