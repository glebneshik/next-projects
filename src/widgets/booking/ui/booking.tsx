
import { RedButton } from "@/shared/ui/RedButton/RedButton";
import "./booking.scss";
export function Booking() {
  return (
    <div className="booking">
      <div className="booking__wrapper">
        <div className="booking__info">
          <p className="booking__info_text">Бронирование</p>
          <p className="booking__info_descr">2025-04-26</p>
          <p className="booking__info_descr">23:30</p>
        </div>
        <form action="" className="booking__form">
          <label className="booking__form_contact">
            <span className="booking__form_contact-title">Ваше имя <span>*</span></span>
            <input type="text" className="booking__form_contact-input" placeholder="Иванов Иван" />
          </label>
          <label className="booking__form_contact">
            <span className="booking__form_contact-title">Номер телефона <span>*</span></span>
            <input type="text" className="booking__form_contact-input" placeholder="+7" />
          </label>
          <label className="booking__form_contact">
            <span className="booking__form_contact-title">Количество участников <span>*</span></span>
            <input type="text" className="booking__form_contact-input" placeholder="2" />
          </label>

          <div className="booking__form_count">
            <p className="booking__form_count-title">СТОИМОСТЬ:  3 000 руб.</p>

            <p className="booking__form_count-descr">Цена от: 3 000 руб. за 2 участников</p>
            <p className="booking__form_count-descr">За поздний сеанс к общей стоимости добавляется 1 000 руб.</p>
          </div>

          <RedButton altImage={"забронировать"} classButton={"booking__form_submit"} textButton={"забронировать"} />
          <p className="booking__form-cancel">Отменить</p>
        </form>
      </div>
    </div>
  )
}
