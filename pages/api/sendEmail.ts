import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, subject, message } = req.body;

  // Use an email service to send the email
  // Example with Nodemailer or any other service
    // TODO
  // Send a response back
  res.status(200).json({ success: true });
};