import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

type ResponseData = {
  message: string;
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, phone, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: 'Email et message sont requis' });
  }

  try {
    // Send email to your inbox
    await resend.emails.send({
      from: 'noreply@aidan-cristini.dev',
      to: process.env.CONTACT_EMAIL || 'aidan.cristini.pro@gmail.com',
      replyTo: email,
      subject: `Nouveau message de contact de ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f9826c;">Nouveau message de contact</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'noreply@aidan-cristini.dev',
      to: email,
      subject: 'Merci pour votre message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f9826c;">Merci pour votre message ! 🎉</h2>
          <p>J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666;">Cordialement,<br><strong>Aidan CRISTINI</strong></p>
        </div>
      `,
    });

    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      message: 'Erreur lors de l\'envoi du message',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

