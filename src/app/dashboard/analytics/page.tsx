const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    { title: "Active Users", value: "1,200", change: "-8%", isPositive: false },
    {
      title: "Website Visits",
      value: "8,500",
      change: "+5%",
      isPositive: true,
    },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-xl font-bold text-gray-600 mb-6">
          Analytics Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex items-center justify-between bg-white shadow-xl rounded-lg p-4 border-l-2 ${metric.isPositive ? "border-green-500" : "border-red-500"}`}
            >
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {metric.title}
                </h3>
                <p className="text-sm font-bold text-gray-800 mt-2">
                  {metric.value}
                </p>
              </div>
              <span
                className={`text-sm font-bold ${metric.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {metric.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
