import express from 'express';
import { getClients, addClient } from '../controllers/clientController.js';

const router = express.Router();

router.get('/', getClients);       // GET /api/clients
router.post('/', addClient);       // POST /api/clients

export default router;
