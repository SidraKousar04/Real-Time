import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-44 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {project.description}
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;


