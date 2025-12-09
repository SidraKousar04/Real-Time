import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import projectRouter from './routes/projectRouter.js';
import clientRouter from './routes/clientRouter.js';
import contactRouter from './routes/contactRouter.js';
import subscribeRouter from './routes/subscribeRouter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes (will add actual files later)
app.use('/api/projects', projectRouter);
app.use('/api/clients', clientRouter);
app.use('/api/subscribe', subscribeRouter);
app.use('/api/contact', contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
