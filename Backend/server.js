import express from 'express';
import cors from 'cors';
import SendEmail from './SendEmail.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Email API routes
app.use('/api', SendEmail);

// Health check route (main)
app.get('/', (req, res) => {
  res.send('✅ Backend is live!');
});

// Ping route for frontend wake-up
app.get('/ping', (req, res) => {
  res.send('🚀 Backend is awake and ready!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running successfully on port ${PORT}`);
});
