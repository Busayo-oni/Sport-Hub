// src/components/TeamMemberCard.jsx
import React from 'react';

export default function TeamMemberCard({ name, role, image, bio }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {/* Team Member Image */}
      <img
        src={image}
        alt={`${name}`}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      {/* Team Member Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      {/* Team Member Role */}
      <p className="text-gray-500 text-sm font-semibold mb-4">{role}</p>
      {/* Team Member Bio */}
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
