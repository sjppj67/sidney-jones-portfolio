import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, phone, position, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
      user: 'contato@sidneyjones.com.br',
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <contato@sidneyjones.com.br>`,
      to: 'contato@sidneyjones.com.br',
      subject: `Nova mensagem de ${name} - ${position || 'Oportunidade'}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
        <p><strong>E-mail do contato:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Cargo/Vaga:</strong> ${position || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error sending email' });
  }
}