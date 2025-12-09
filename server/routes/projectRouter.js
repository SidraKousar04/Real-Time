import express from 'express';
import { getProjects, createProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getProjects);       // GET /api/projects
router.post('/', createProject);    // POST /api/projects

export default router;
