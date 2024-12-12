import React from "react";
import Sports from '../assets/sports.jpg'

export default function UpgradeCard() {
  return (
    <div className="flex flex-col sm:flex-row my-10 items-center bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="sm:w-1/2">
        <img
          src={Sports}
          alt="Sports personalities"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 p-6">
        <h5 className="text-sm text-blue-600 font-medium mb-2">Other Sports</h5>
        <h3 className="text-lg font-semibold text-gray-800">
          Upgrade to 9ja Sports
        </h3>
      </div>
    </div>
  );
}
