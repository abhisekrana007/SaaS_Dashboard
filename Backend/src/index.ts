import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoute from './routes/health';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/health', healthRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
