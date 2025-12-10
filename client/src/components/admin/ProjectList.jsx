import React, { useEffect, useState } from 'react';
import API from '../../services/api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get('/api/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => {
        console.error('Error fetching projects:', err);
        alert('Failed to load projects');
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">#</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Image</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project._id} className="hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{project.name}</td>
                  <td className="p-3 border">{project.description}</td>
                  <td className="p-3 border">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
