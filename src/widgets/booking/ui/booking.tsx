"use client";

import { RedButton } from "@/shared/ui/RedButton/RedButton";
import "./booking.scss";
import { useState } from "react";

interface BookingProps {
  date: string;
  time: string;
  onClose: () => void;
  questPrice: number;
}

interface FormData {
  name: string;
  phone: string;
  participants: string;
}

export function Booking({ date, time, onClose, questPrice }: BookingProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    participants: '2'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Расчет стоимости
  const calculatePrice = () => {
    const basePrice = questPrice;
    const participants = parseInt(formData.participants) || 2;
    const isLateSession = parseInt(time.split(':')[0]) >= 22;
    
    let total = basePrice * participants;
    if (isLateSession) {
      total += 1000;
    }
    
    return total.toLocaleString('ru-RU');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage('');

  try {
    const bookingData = {
      ...formData,
      date,
      time,
      totalPrice: `${calculatePrice()} руб.`,
      basePrice: questPrice
    };

    console.log('Sending booking data:', bookingData);

    const response = await fetch('/api/send-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();
    console.log('Response from API:', result);

    if (response.ok) {
      setMessage('Бронь успешно отправлена!');
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      setMessage(result.error || 'Произошла ошибка при отправке');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    setMessage('Ошибка сети при отправке формы');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="booking-overlay">
      <div className="booking">
        <div className="booking__wrapper">
          <div className="booking__header">
            <div className="booking__info">
              <p className="booking__info_text">Бронирование</p>
              <p className="booking__info_descr">{date}</p>
              <p className="booking__info_descr">{time}</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="booking__form">
            <label className="booking__form_contact">
              <span className="booking__form_contact-title">Ваше имя <span>*</span></span>
              <input 
                type="text" 
                name="name"
                className="booking__form_contact-input" 
                placeholder="Иванов Иван" 
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </label>
            
            <label className="booking__form_contact">
              <span className="booking__form_contact-title">Номер телефона <span>*</span></span>
              <input 
                type="tel" 
                name="phone"
                className="booking__form_contact-input" 
                placeholder="+7" 
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </label>
            
            <label className="booking__form_contact">
              <span className="booking__form_contact-title">Количество участников <span>*</span></span>
              <input 
                type="number" 
                name="participants"
                className="booking__form_contact-input" 
                placeholder="2" 
                min="1"
                max="10"
                value={formData.participants}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </label>

            <div className="booking__form_count">
              <p className="booking__form_count-title">СТОИМОСТЬ: {calculatePrice()} руб.</p>
              <p className="booking__form_count-descr">Цена от: {questPrice} руб. за 2 участников</p>
              <p className="booking__form_count-descr">За поздний сеанс к общей стоимости добавляется 1 000 руб.</p>
            </div>

            {message && (
              <p className={`booking__message ${message.includes('успешно') ? 'booking__message--success' : 'booking__message--error'}`}>
                {message}
              </p>
            )}

            <RedButton 
              altImage={"забронировать"} 
              classButton={"booking__form_submit"} 
              textButton={isSubmitting ? "Отправка..." : "забронировать"}
              type="submit"
              disabled={isSubmitting}
            />
            
            <button 
              type="button" 
              className="booking__form-cancel" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Отменить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}