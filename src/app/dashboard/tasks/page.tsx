import React from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress",
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed",
      dueDate: "2025-02-15",
    },
  ];
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>
        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4 
             
              ${task.status === "In Progress" ? "border-yellow-500" : task.status === "Pending" ? "border-red-500" : "border-green-500"}
              `}
            >
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p>
                  <span className="text-sm text-gray-600 mt-2">
                    {task.description}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Due Date: {task.dueDate}
                </p>
              </div>

              <section className="flex space-x-4">
                <span
                  className={`${task.status === "In Progress" ? "bg-yellow-100 text-yellow-800" : task.status === "Pending" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"} text-xs font-bold px-3 py-3 rounded-full`}
                >
                  {task.status}
                </span>
                <button className="bg-blue-600 text-xs hover:bg-blue-800 text-white font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors ">
                  Edit
                </button>
                {task.status !== "Completed" && (
                  <button className="bg-green-600 text-xs hover:bg-green-800 text-white font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors ">
                    Mark as Complete
                  </button>
                )}
                <button className="bg-red-600 text-xs hover:bg-red-800 text-white font-bold py-1.5 px-3 rounded-full cursor-pointer transition-colors ">
                  Delete
                </button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
