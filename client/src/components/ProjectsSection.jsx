import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import API from '../services/api';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get('/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section id="projects" className="py-16 px-6 bg-[#f8fafc]">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 tracking-wide">
        Our Projects
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto px-4 scrollbar-hide">
        <div className="flex gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project._id} className="inline-block">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <p>Loading or no projects available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
