import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config(); 

const router = express.Router();


const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/send-email', async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to,
      subject,
      html,
    });

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
