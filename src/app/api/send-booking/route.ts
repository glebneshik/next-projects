import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('🚀 Starting email sending process...');
  
  try {
    const bookingData = await request.json();
    console.log('📝 Received data:', bookingData);

    const required = ['name', 'phone', 'participants'];
    const missing = required.filter(field => !bookingData[field]);
    
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      console.error('❌ Missing email credentials in .env');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('🔧 Creating transporter...');
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    console.log('📧 Sending email...');

    const info = await transporter.sendMail({
      from: `"Квесты" <${emailUser}>`,
      to: 'valak.quest@gmail.com',
      subject: `Новая бронь: ${bookingData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #d32f2f;">🎯 НОВАЯ БРОНЬ НА КВЕСТ</h2>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            <h3>👤 Клиент:</h3>
            <p><strong>Имя:</strong> ${bookingData.name}</p>
            <p><strong>Телефон:</strong> ${bookingData.phone}</p>
            <p><strong>Участники:</strong> ${bookingData.participants}</p>
          </div>

          <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 10px 0;">
            <h3>📅 Бронь:</h3>
            <p><strong>Дата:</strong> ${bookingData.date}</p>
            <p><strong>Время:</strong> ${bookingData.time}</p>
            <p><strong>Стоимость:</strong> ${bookingData.totalPrice}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Отправлено: ${new Date().toLocaleString('ru-RU')}
          </p>
        </div>
      `,
      text: `Новая бронь на квест\n\nКлиент: ${bookingData.name}\nТелефон: ${bookingData.phone}\nУчастники: ${bookingData.participants}\nДата: ${bookingData.date}\nВремя: ${bookingData.time}\nСтоимость: ${bookingData.totalPrice}`
    });

    console.log('✅ Email sent successfully! Message ID:', info.messageId);

    return NextResponse.json(
      { 
        message: 'Бронь отправлена! Проверьте почту glebneshik@gmail.com',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 FAILED to send email:', error);
    
    let errorMessage = 'Ошибка отправки email';
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}