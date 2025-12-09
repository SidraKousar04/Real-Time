
import Project from '../models/Project.js';

// GET /api/projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

// POST /api/projects
export const createProject = async (req, res) => {
  const { name, description, image } = req.body;

  if (!name || !description || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const project = new Project({ name, description, image });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project' });
  }
};
