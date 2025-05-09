import React from "react";

const Card = ({ image, name, title, department, organization }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white ">
      <div className="flex justify-center items-center mt-1">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={image}
          alt={name}
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center text-purple-800">
          {name}
        </div>
        <p className="text-gray-500 text-center mt-2">{title}</p>
        <p className="text-red-600 text-center text-sm mt-2">{department}</p>
        <p className="text-red-600 text-center text-sm">{organization}</p>
      </div>
    </div>
  );
};

export default Card;
