import express from 'express';
import { addSubscriber, getSubscribers } from '../controllers/subscribeController.js';


const router = express.Router();

router.post('/', addSubscriber);     // POST /api/subscribe
router.get('/', getSubscribers);     // GET /api/subscribe

export default router;
