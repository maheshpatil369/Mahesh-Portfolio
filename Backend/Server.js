import express from 'express';
import SendEmail from './SendEmail.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', SendEmail);

app.listen(5000, () => {
  console.log('✅ Server is running successfully on port 5000');
});
