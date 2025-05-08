import React from "react";

const WebsiteProgress = () => {
  const progressItems = [
    { name: "Homepage Design", percent: 1 },
    { name: "About Page", percent: 2 },
    { name: "Courses Page", percent: 3 },
    { name: "Notice Board", percent: 4 },
    { name: "Admin Panel", percent: 5 },
    { name: "Deployment", percent: 6 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-2xl w-full mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-fuchsia-900 text-center">
        BCA TPC Madhepura
      </h1>
      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Website Development Progress
      </h2>
      <div className="space-y-4">
        {progressItems.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-800 font-medium">{item.name}</span>
              <span className="text-sm text-gray-600">{item.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteProgress;
