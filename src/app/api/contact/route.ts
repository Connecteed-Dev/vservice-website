import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // port 465 uses SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!email || !message) {
      return NextResponse.json({ success: false, message: 'Email e messaggio sono obbligatori' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"V.Service Contatti" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Nuovo messaggio dal sito - ${name || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F2D58; border-bottom: 2px solid #1059C4; padding-bottom: 8px;">
            Nuovo messaggio dal sito V.Service
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Nome:</td>
              <td style="padding: 8px 0; color: #222;">${name || '—'}</td>
            </tr>
            <tr style="background: #f8f8f8;">
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #222;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Telefono:</td>
              <td style="padding: 8px 0; color: #222;">${phone || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Messaggio:</p>
            <div style="background: #f8f8f8; border-left: 4px solid #1059C4; padding: 12px 16px; color: #222; white-space: pre-line;">
              ${message}
            </div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #aaa;">
            Inviato dal form di contatto su vservice.it
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: 'Messaggio inviato con successo' })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false, message: "Errore nell'invio del messaggio" }, { status: 500 })
  }
}
