// import express from 'express';
// import SendEmail from './SendEmail.js';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api', SendEmail);
// console.log('Backend was working ')

// app.listen(5000, () => {
//   console.log('✅ Server is running successfully on port 5000');
// });


import express from 'express';
import cors from 'cors';
import SendEmail from './SendEmail.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', SendEmail);

// Default route for checking backend is live
app.get('/', (req, res) => {
  res.send('✅ Backend is live!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running successfully on port ${PORT}`);
});
