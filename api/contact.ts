import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, phone, position, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contato <onboarding@resend.dev>',
      to: ['contato@sidneyjones.com.br'], // correção do endereço e remoção do null
      subject: `Nova mensagem de ${name} - ${position || 'Oportunidade'}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Cargo/Vaga:</strong> ${position || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error sending email' });
    }

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}