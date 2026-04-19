const UsersList = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Sam Brown",
      email: "sam.brown@example.com",
      role: "User",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      role: "User",
      status: "Suspended",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-md font-bold text-gray-800">Users List</h1>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto mt-4">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm">Name</th>
                <th className="px-4 py-3 text-left text-sm">Email</th>
                <th className="px-4 py-3 text-left text-sm">Role</th>
                <th className="px-4 py-3 text-left text-sm">Status</th>
                <th className="px-4 py-3 text-left text-sm">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm">{user.name}</td>
                  <td className="px-4 py-4 text-sm">{user.email}</td>
                  <td className="px-4 py-4 text-sm">{user.role}</td>
                  <td
                    className={`px-4 py-4 ${user.status === "Active" ? "text-green-500" : user.status === "Inactive" ? "text-yellow-500" : "text-red-500"}`}
                  >
                    {user.status}
                  </td>
                  <td className="px-4 py-4 text-center text-sm">
                    <button
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition
                    "
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg  ml-2 transition
                    "
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
