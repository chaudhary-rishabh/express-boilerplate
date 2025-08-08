import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/uers.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', userRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
